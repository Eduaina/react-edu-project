export function PageBanner() {
  return (
    <div className="banner">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center text-[13px] font-medium">
        <div className="hidden md:flex items-center gap-6">
          <span>📞 +1 (234) 567-890</span>
          <span>✉️ support@learning.com</span>
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <p>Get 50% Off on your first course enrollment!</p>
          <button className="underline hover:text-teal-100 font-bold">
            Claim Now
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="hover:opacity-80">
            Login
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:opacity-80">
            Register
          </a>
        </div>
      </div>
    </div>
  )
}
