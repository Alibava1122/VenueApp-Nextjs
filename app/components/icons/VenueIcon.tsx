import { SVGProps } from "react";

export function VenueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="9" width="5" height="11" rx="1" />
      <rect x="10" y="4" width="5" height="16" rx="1" />
      <rect x="16" y="11" width="4" height="9" rx="1" />
      <path d="M4 14h5" />
      <path d="M10 9h5" />
      <path d="M16 15h4" />
      <path d="M4 21h16" />
    </svg>
  );
}

