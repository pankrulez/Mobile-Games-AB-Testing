"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Summary", href: "/summary" },
  { name: "Overview", href: "/overview" },
  { name: "Retention", href: "/retention" }
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 bg-[var(--bg-panel)] p-6 border-r border-white/10">
      <div className="mb-10">
        <h1 className="text-xl font-bold">GAMEPULSE</h1>
        <p className="text-xs text-[var(--text-secondary)]">
          A/B Intelligence
        </p>
      </div>

      <nav className="space-y-2">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`block rounded-xl px-4 py-3 text-sm ${
              path === tab.href
                ? "bg-[var(--accent-blue)] text-black font-semibold"
                : "text-[var(--text-secondary)] hover:bg-white/5"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}