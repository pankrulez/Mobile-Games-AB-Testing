import { dataAvailability } from "../data/availability";
import { notFound } from "next/navigation";
import { JSX } from "react";

export function withDataGuard(
  key: keyof typeof dataAvailability,
  Component: () => JSX.Element
) {
  if (!dataAvailability[key]) {
    notFound();
  }
  return <Component />;
}