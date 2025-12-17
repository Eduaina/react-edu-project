export function PageBanner() {
  return (
    <div className="banner">
      <div className="container flex-between text-sm">
        <div className="hidden md:flex items-center gap-6">
          <span>📞 +1 (234) 567-890</span>
          <span>✉️ support@learning.com</span>
        </div>
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <p>Get 50% Off on your first course enrollment!</p>
          <button className="banner__cta">Claim Now</button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="banner__link">
            Login
          </a>
          <span className="opacity-50">|</span>
          <a href="#" className="banner__link">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
