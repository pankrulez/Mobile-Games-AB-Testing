import "./globals.css";
import Sidebar from "@/components/Sidebar";
import ConfidenceBadge from "@/components/ConfidenceBadge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <Sidebar />

        <main id="main" className="flex-1 px-10 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-xl font-bold tracking-wide">
                GAMEPULSE
              </h1>
              <p className="text-xs text-[var(--text-secondary)]">
                Mobile Games A/B Testing
              </p>
            </div>

            <a
              href="#"
              className="text-sm rounded-lg border border-white/10 px-4 py-1.5
                         hover:bg-white/5 transition"
            >
              Live Demo
            </a>
          </div>

          {children}
        </main>

        <ConfidenceBadge />
      </body>
    </html>
  );
}