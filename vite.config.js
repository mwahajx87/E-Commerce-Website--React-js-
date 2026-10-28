import { createReadStream, promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const adminDist = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../Admin-panel-E-commerce-Dashboad-/dist',
)

const adminStaticPlugin = {
  name: 'serve-admin-build',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      if (!request.url?.split('?')[0].startsWith('/admin')) {
        next()
        return
      }

      if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.statusCode = 405
        response.end('Method Not Allowed')
        return
      }

      try {
        const requestPath = decodeURIComponent(
          new URL(request.url, 'http://localhost').pathname,
        )
        if (requestPath !== '/admin' && !requestPath.startsWith('/admin/')) {
          next()
          return
        }

        const relativePath = requestPath.slice('/admin'.length)
        const candidate = path.resolve(
          adminDist,
          `.${relativePath || '/index.html'}`,
        )
        if (
          candidate !== adminDist &&
          !candidate.startsWith(`${adminDist}${path.sep}`)
        ) {
          response.statusCode = 403
          response.end('Forbidden')
          return
        }

        let filePath = candidate
        try {
          const stats = await fs.stat(filePath)
          if (!stats.isFile()) filePath = path.join(adminDist, 'index.html')
        } catch (error) {
          if (error.code !== 'ENOENT') throw error
          if (path.extname(relativePath)) {
            response.statusCode = 404
            response.end('Not Found')
            return
          }
          filePath = path.join(adminDist, 'index.html')
        }

        const contentTypes = {
          '.css': 'text/css; charset=utf-8',
          '.html': 'text/html; charset=utf-8',
          '.ico': 'image/x-icon',
          '.js': 'text/javascript; charset=utf-8',
          '.json': 'application/json; charset=utf-8',
          '.png': 'image/png',
          '.svg': 'image/svg+xml',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
        }
        response.setHeader(
          'Content-Type',
          contentTypes[path.extname(filePath)] || 'application/octet-stream',
        )
        const stream = createReadStream(filePath)
        stream.on('error', next)
        stream.pipe(response)
      } catch (error) {
        next(error)
      }
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [adminStaticPlugin, react(), tailwindcss()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    strictPort: true,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
})
