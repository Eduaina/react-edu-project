export function Hero () {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Background Grid Pattern Asset */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1920px] mx-auto px-6 lg:px-24 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: TEXT */}
        <div>
          <span className="inline-block px-4 py-1.5 bg-[#E0F7F6] text-[#00A9A5] rounded-full text-xs font-bold tracking-widest mb-6">
            EDUCATION & ONLINE LEARNING
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] leading-tight mb-6">
            Discover Your <span className="text-[#00A9A5]">Potential</span> With Online Education.
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
            Choose from over 5,000 online video courses with new additions published every month. Start your journey today with world-class experts.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <Button variant="primary" size="lg">Get Started Now</Button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-[#00A9A5] group-hover:text-white transition-all">
                <Play fill="currentColor" size={20} />
              </div>
              <span className="font-bold text-[#0F172A]">Watch Video</span>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 pt-10 border-t border-gray-100 flex gap-12">
            <div>
              <h4 className="text-3xl font-black text-[#0F172A]">25K+</h4>
              <p className="text-sm text-gray-500 font-medium">Active Students</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#0F172A]">890+</h4>
              <p className="text-sm text-gray-500 font-medium">Expert Mentors</p>
            </div>
            <div>
              <h4 className="text-3xl font-black text-[#0F172A]">150+</h4>
              <p className="text-sm text-gray-500 font-medium">Course Categories</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE & FLOATING CARDS */}
        <div className="relative">
          {/* Main Hero Image - src/public/hero/hero-main.png */}
          <div className="relative z-10 p-4">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#00A9A5]/10 rounded-full blur-3xl -z-10"></div>
            <img 
              src="/hero/hero-image.png" 
              className="w-full h-auto rounded-3xl"
              alt="Hero Student"
              onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'}
            />
          </div>

          {/* Floating Card 1: Course Info */}
          <div className="absolute top-10 -left-8 bg-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-bounce-subtle">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-500"><Users size={24}/></div>
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">Join now</p>
              <p className="text-sm font-black text-[#0F172A]">1,200+ Students</p>
            </div>
          </div>

          {/* Floating Card 2: Certificate */}
          <div className="absolute bottom-10 -right-4 bg-[#0F172A] text-white p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-float">
            <div className="bg-[#00A9A5] p-3 rounded-xl"><Star size={24}/></div>
            <div>
              <p className="text-xs opacity-70">Top Rated</p>
              <p className="text-sm font-bold">Certified Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};