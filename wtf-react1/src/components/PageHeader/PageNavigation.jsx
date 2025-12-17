
export function PageNavigation() {
  return (
    <nav className="navigation">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* LOGO - src/public/header/logo.svg */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#00A9A5] rounded-lg flex items-center justify-center">
            <span className="font-black text-xl">L</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Edu<span className="text-[#00A9A5]">Stream</span>
          </span>
        </div>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {["Courses", "Instructors", "Pricing", "Blog", "About"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-1 text-sm font-medium hover:text-[#00A9A5] transition-colors"
              >
                {/* {item} <ChevronDown size={14} /> */}
              </a>
            )
          )}
        </div>
      
      </div>
    </nav>
  )
}
