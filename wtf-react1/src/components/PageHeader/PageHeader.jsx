import "./PageHeader.css";
import { PageNavigation } from "./PageNavigation";
import { PageBanner } from "./PageBanner";

export function FullHeader() {
  return (
    <header className="page-header header">
      <PageBanner />
      <PageNavigation />
    </header>
  );
}
