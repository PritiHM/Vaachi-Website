export default function Footer() {
  return (
    <footer className="w-full bg-white py-6">
      <div
        className="
          w-full
          px-4 
          md:px-8
          flex flex-col gap-6
          md:grid md:grid-cols-3
        "
      >

        {/* SOCIAL ICONS 
            MOBILE: 1st (order-1)
            DESKTOP: 3rd (md:order-3)
        */}
        <div className="order-1 md:order-3 w-full flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center justify-center md:justify-end gap-4 md:gap-5">
            <img src="/images/Facebook.png" className="h-8 w-8 md:h-10 md:w-10" />
            <img src="/images/Instagram.png" className="h-8 w-8 md:h-10 md:w-10" />
            <img src="/images/youtube.png" className="h-8 w-8 md:h-10 md:w-10" />
          </div>
          <span className="text-sm md:text-lg font-serif font-semibold">Follow us on</span>
        </div>

        {/* PRIVACY
            MOBILE: 2nd (order-2)
            DESKTOP: 2nd (md:order-2)
        */}
        <div className="order-2 md:order-2 w-full flex flex-col items-center md:items-center gap-2">
          <a className="text-sm md:text-lg font-serif font-semibold hover:underline">Privacy Policy</a>
          <a className="text-sm md:text-lg font-serif font-semibold hover:underline">Terms of Use</a>
        </div>

        {/* LOGO 
            MOBILE: 3rd (order-3)
            DESKTOP: 1st LEFT (md:order-1)
        */}
        <div className="order-3 md:order-1 w-full flex flex-col items-center md:items-start gap-2">
          <img src="/images/Logo.png" className="h-12 w-auto md:h-10" />
          <p className="text-sm text-[#00656D]">All Rights Reserved © 2025</p>
        </div>

      </div>
    </footer>
  );
}
