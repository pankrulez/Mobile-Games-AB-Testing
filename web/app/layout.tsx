export const metadata = {
  title: "Mobile Games A/B Test",
  description: "Statistical analysis of mobile game experimentation"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}