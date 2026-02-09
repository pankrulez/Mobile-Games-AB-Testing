"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tabs } from "@/lib/tabs";

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[var(--bg-panel)]
                      border-r border-white/10 px-6 py-8">
      {/* Brand */}
      <div className="mb-10">
        <h2 className="text-lg font-bold tracking-wide">
          GAMEPULSE
        </h2>
        <p className="text-xs text-[var(--text-muted)]">
          A/B Intelligence
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`block rounded-xl px-4 py-3 text-sm transition
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

      {/* Active Test */}
      <div className="mt-10 rounded-xl border border-white/10 p-4">
        <p className="text-xs text-[var(--text-muted)] mb-1">
          ACTIVE TEST
        </p>
        <p className="text-sm font-semibold">
          Progression Pacing v2.4
        </p>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          14 days
        </p>
      </div>
    </aside>
  );
}