import { SVGProps } from "react";

export function ChevronDownIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  const computedClassName = ["h-5 w-5 text-gray-400", className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={computedClassName}
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

