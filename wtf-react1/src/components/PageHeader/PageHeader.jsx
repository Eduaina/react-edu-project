import "./PageHeader.css";
import { PageNavigation } from "./PageNavigation";
import { PageBanner } from "./PageBanner";

export function FullHeader() {
  return (
    <section className="header">
      <PageBanner />
      <PageNavigation />
    </section>
  );
}
