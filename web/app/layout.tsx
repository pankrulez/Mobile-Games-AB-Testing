import "./globals.css";

export const metadata = {
  title: "Mobile Games A/B Testing",
  description: "Modern analytics dashboard for A/B testing results"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}