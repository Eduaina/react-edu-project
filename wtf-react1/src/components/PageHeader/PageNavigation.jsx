
export function PageNavigation() {

  return (
    <nav className="nav">
      <div className="container flex-between h-20">
        <div className="nav__logo">
          <div className="logo-box">L</div>
          <span className="logo-text">EduStream</span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {["Courses", "Instructors", "Pricing", "Blog", "About"].map(
            (item) => (
              <a key={item} href="#" className="nav__link">
                {/* {item} <ChevronDown size={14} /> */}
              </a>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="nav__search">
            <input type="text" placeholder="Search courses..." />
            {/* <Search className="search-icon" size={16} /> */}
          </div>
          <button className="nav__cart">
            {/* <ShoppingBag size={20} /> */}
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
