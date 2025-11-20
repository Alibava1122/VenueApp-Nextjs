import { SVGProps } from "react";

export function UserIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  const computedClassName = ["h-7 w-7 text-orange-600", className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={computedClassName}
      {...props}
    >
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 20.25a6 6 0 0 0-12 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

