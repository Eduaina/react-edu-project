import "./PageHeader.css";
import { PageNavigation } from "./PageNavigation";
import { PageBanner } from "./PageBanner";

export function FullHeader() {
  return (
    <header className="header">
      <PageBanner />
      <PageNavigation />
    </header>
  );
}
