const Announcement = () => {
  return (
    <div className="w-full min-w-[250px] bg-black px-[20px] py-[10px] text-white max-[639px]:min-w-0 max-[639px]:px-[16px] max-[639px]:py-[8px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-center gap-[6px] text-[12px] font-medium tracking-[-0.1px] max-[639px]:text-[10px]">
        <span>Sign up and get 20% off to your first order.</span>
        <a
          href="#newsletter"
          className="font-bold text-white underline underline-offset-2"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default Announcement;
