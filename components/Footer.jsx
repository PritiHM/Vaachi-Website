import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F6F1] text-[#291F1E]">
      <div className="w-full border-t border-gray-200">
        <div
          className="
            w-full max-w-7xl mx-auto 
            mt-5 md:mt-10 lg:mt-20
            px-4 md:px-6 
            py-6 md:py-10 
            grid grid-cols-1 md:grid-cols-3 
            gap-8 items-center
          "
        >
          <div className="flex flex-col items-center md:items-start gap-2 order-1 md:order-1 md:col-start-1">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <img
                src="/images/Logo 1 (2).png"
                alt="Vaachi Foundation logo"
                className="h-10 w-auto md:h-12"
              />
            </div>

            <p className="hidden md:block text-[#00656D] text-xl mt-1 pl-3">
              All Rights Reserved © 2025
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center gap-2 order-3 md:order-2 md:col-start-2 text-center">
            <a href="#" className="text-sm md:text-xl hover:underline font-bold">
              Privacy Policy
            </a>
            <a href="#" className="text-sm md:text-xl hover:underline font-bold">
              Terms of Use
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 order-2 md:order-3 md:col-start-3 md:justify-end">
            <div className="flex items-center gap-4 md:gap-5">
             

              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/LinkedIn.png"
                  className="h-9 w-9 md:h-10 md:w-10"
                  alt="Instagram icon"
                />
              </a>

              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/youtube.png"
                  className="h-8 w-8 md:h-9 md:w-9"
                  alt="YouTube icon"
                />
              </a>
            </div>

            <span className="text-sm md:text-base font-bold">Follow us on</span>
          </div>

          <div className="flex justify-center md:hidden order-4 col-span-1 mt-2">
            <p className="text-sm text-[#00656D]">All Rights Reserved © 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
