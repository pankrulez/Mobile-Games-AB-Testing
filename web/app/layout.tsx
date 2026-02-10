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
      <body className="flex min-h-screen bg-[var(--bg-main)]">
        <Sidebar />

        <main
          id="main"
          className="flex-1 px-10 py-10 overflow-y-auto"
        >
          {children}
        </main>

        <ConfidenceBadge />
      </body>
    </html>
  );
}