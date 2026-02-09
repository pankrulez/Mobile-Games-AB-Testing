import "./globals.css";
import Sidebar from "../components/Sidebar";
import ConfidenceBadge from "../components/ConfidenceBadge";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 rounded bg-black px-3 py-2 text-white"
        >
          Skip to content
        </a>
        <Sidebar />
          <ConfidenceBadge />
          <main id="main" className="flex-1 px-10 py-8">{children}</main>
      </body>
    </html>
  );
}