import { SVGProps } from "react";

export function VendorsIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="7" cy="7" r="4" />
      <circle cx="17" cy="7" r="4" />
      <path d="M3 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
      <path d="M11 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
    </svg>
  );
}

