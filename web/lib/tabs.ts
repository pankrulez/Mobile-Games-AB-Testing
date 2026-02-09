import { dataAvailability } from "@/data/availability";

export const tabs = [
  {
    key: "summary",
    label: "Summary",
    href: "/summary",
    enabled: dataAvailability.summary
  },
  {
    key: "overview",
    label: "Overview",
    href: "/overview",
    enabled: dataAvailability.overview
  },
  {
    key: "retention",
    label: "Retention",
    href: "/retention",
    enabled: dataAvailability.retention
  },
  {
    key: "segments",
    label: "Segments",
    href: "/segments",
    enabled: dataAvailability.segments
  },
  {
    key: "monetization",
    label: "Monetization",
    href: "/monetization",
    enabled: dataAvailability.monetization
  }
].filter(tab => tab.enabled);