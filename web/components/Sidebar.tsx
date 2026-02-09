"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/lib/tabs";

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 bg-[var(--bg-panel)] p-6 border-r border-white/10">
      {/* Branding */}
      <div className="mb-10">
        <h1 className="text-xl font-bold tracking-wide">
          GAMEPULSE
        </h1>
        <p className="text-xs text-[var(--text-secondary)]">
          A/B Intelligence
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {tabs.map(tab => (
          <Link
            key={tab.key}
            href={tab.href}
            className={`block rounded-xl px-4 py-3 text-sm transition
              focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]
              ${
                path === tab.href
                  ? "bg-[var(--accent-blue)] text-black font-semibold"
                  : "text-[var(--text-secondary)] hover:bg-white/5"
              }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {/* Active test indicator */}
      <div className="mt-10 rounded-xl border border-white/10 p-4">
        <p className="text-xs text-[var(--text-secondary)] mb-1">
          ACTIVE TEST
        </p>
        <p className="text-sm font-semibold">
          Progression Pacing v2.4
        </p>
        <p className="text-xs text-[var(--text-muted)]">
          14 days
        </p>
      </div>
    </aside>
  );
}