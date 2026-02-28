import { FullHeader } from "../../components/PageHeader/PageHeader";
import { Hero } from "../../components/HeroSection/Hero";

export function Home () {
    return (
      <div className="app-root">
        <div className="global-wrapper">
          <div className="container">
            <FullHeader />
            <Hero />
          </div>
        </div>
      </div>
    );
}

