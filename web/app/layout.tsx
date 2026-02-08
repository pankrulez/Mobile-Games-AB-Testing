import "./globals.css";

export const metadata = {
  title: "Mobile Games A/B Testing",
  description: "Experiment results & statistical analysis"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-200 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}