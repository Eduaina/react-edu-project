import Button from "../Button/Button";

export function Hero () {
  return (
    <section className="hero">
      <div className="container grid-2">
        <div className="hero__content">
          <span className="badge">EDUCATION & ONLINE LEARNING</span>
          <h1 className="hero__title">
            Discover Your <span className="text-teal">Potential</span> With
            Online Education.
          </h1>
          <p className="hero__desc">
            Choose from over 5,000 online video courses with new additions
            published every month.
          </p>

          <div className="hero__actions">
            <Button variant="primary" size="lg">
              Get Started Now
            </Button>
            <div className="video-btn">
              <div className="video-icon">
                {/* <Play fill="currentColor" size={20} /> */}
              </div>
              <span>Watch Video</span>
            </div>
          </div>

          <div className="hero__stats">
            <div className="stat-item">
              <h4>25K+</h4>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <h4>890+</h4>
              <p>Mentors</p>
            </div>
            <div className="stat-item">
              <h4>150+</h4>
              <p>Categories</p>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <img
            src="/hero/hero-image.png"
            className="hero__img"
            alt="Hero"
            onError={(e) =>
              (e.target.src =
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80")
            }
          />
          <div className="floating-card card-1">
            <div className="icon-wrap bg-orange">
              {/* <Users size={24} /> */}
            </div>
            <div>
              <p className="sub">Join now</p>
              <p className="val">1,200+ Students</p>
            </div>
          </div>
          <div className="floating-card card-2">
            <div className="icon-wrap bg-teal">
              {/* <Star size={24} /> */}
            </div>
            <div>
              <p className="sub">Top Rated</p>
              <p className="val">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};