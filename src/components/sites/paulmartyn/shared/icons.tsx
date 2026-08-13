import type { SVGProps } from "react";

/**
 * Icons for the Paul Martyn Construction site.
 *
 * Font Awesome 6 Pro/Sharp is licensed, so these are independently drawn
 * equivalents matching the shapes and optical weight the design calls for —
 * nothing licensed is redistributed.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
  focusable: "false" as const,
  ...props,
});

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M6.6 2.5a1.6 1.6 0 0 1 1.9.7l1.7 2.9c.3.6.2 1.3-.3 1.7l-1.3 1a11 11 0 0 0 4.6 4.6l1-1.3c.4-.5 1.1-.6 1.7-.3l2.9 1.7c.6.4.9 1.2.7 1.9l-.7 2.4a1.7 1.7 0 0 1-1.8 1.2A16.6 16.6 0 0 1 2.2 5.4 1.7 1.7 0 0 1 3.4 3.6l2.4-.7Z" />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M2 6.2c0-.9.7-1.6 1.6-1.6h16.8c.9 0 1.6.7 1.6 1.6v.5l-10 5.9-10-5.9v-.5Zm0 2.6 9.5 5.6c.3.2.7.2 1 0L22 8.8v9c0 .9-.7 1.6-1.6 1.6H3.6c-.9 0-1.6-.7-1.6-1.6v-9Z" />
    </svg>
  );
}

export function HammerIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M13.4 2.2 9.9 4.4a1 1 0 0 0-.4 1.2l.4 1L7.7 8l-.9-.9a1 1 0 0 0-1.5 0L3.4 9a1 1 0 0 0 0 1.5l1 1a1 1 0 0 0 1.4 0L7.7 9.6l2.1 2.1-6.3 6.3a2 2 0 0 0 2.8 2.8l6.3-6.3 2.2 2.2a1 1 0 0 0 1.4 0l1.9-1.9a1 1 0 0 0 0-1.4l-6-6-.4-1a1 1 0 0 0-1.2-.6l-.1.4Z" />
    </svg>
  );
}

export function CommentIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M3 4.5h18c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1h-9.4l-4.9 3.7a.6.6 0 0 1-1-.5v-3.2H3c-.6 0-1-.4-1-1v-10c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function PencilRulerIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M17.6 2.5a1.4 1.4 0 0 1 2 0l1.9 1.9a1.4 1.4 0 0 1 0 2l-2 2-3.9-3.9 2-2ZM14.4 5.7l3.9 3.9-8.6 8.6-3.9-3.9 8.6-8.6ZM5 15.5l3.5 3.5-4.4 1.3a.8.8 0 0 1-1-1L5 15.5Z" />
      <path d="M2.6 9.6 6.4 5.8l1.3 1.3-1 1 1.2 1.2 1-1 1.2 1.2-1 1 1.2 1.2 1-1 1 1-3.8 3.8-5.9-5.9Z" opacity=".55" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M12 2.2a7.3 7.3 0 0 0-7.3 7.3c0 5.3 6.5 11.7 6.8 12a.8.8 0 0 0 1.1 0c.3-.3 6.8-6.7 6.8-12A7.3 7.3 0 0 0 12 2.2Zm0 10.5a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z" />
    </svg>
  );
}

export function BadgeIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M12 2.2 14.4 6l4.3 1-2.9 3.4.4 4.4-4.2-1.5-4.2 1.5.4-4.4L5.3 7l4.3-1L12 2.2Z" />
      <path d="M8.4 14.9 6.6 21.4a.6.6 0 0 0 .9.6l4.5-2.6 4.5 2.6a.6.6 0 0 0 .9-.6l-1.8-6.5-3.6 1.3-3.6-1.3Z" opacity=".55" />
    </svg>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M5 2.2a.8.8 0 0 0-.8.8v18.2c0 .6.7 1 1.2.6l1.9-1.4 1.9 1.4c.3.2.7.2 1 0l1.8-1.4 1.9 1.4c.3.2.7.2 1 0l1.9-1.4 1.9 1.4c.5.4 1.2 0 1.2-.6V3a.8.8 0 0 0-.8-.8H5Zm2.6 4.6h8.8v1.8H7.6V6.8Zm0 4h8.8v1.8H7.6v-1.8Zm0 4h5.6v1.8H7.6v-1.8Z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M12 12.3a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 1.9c-4.1 0-8 2.2-8 5.1v1.7c0 .5.4.8.8.8h14.4c.4 0 .8-.3.8-.8v-1.7c0-2.9-3.9-5.1-8-5.1Z" />
    </svg>
  );
}

/** Mobile handset — distinguishes the mobile number from the landline. */
export function MobileIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M10.75 18.5h2.5" strokeLinecap="round" />
    </svg>
  );
}

/** At sign, for the email line. */
export function AtIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="3.6" />
      <path
        d="M15.6 8.4v4.6a2.6 2.6 0 0 0 5.2 0V12a8.8 8.8 0 1 0-3.5 7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Accordion disclosure caret. Rotated 180° by the caller when open. */
export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="m5 9 7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h17M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9L12 2.6Z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M14.5 21.9V13.5h2.8l.5-3.3h-3.3V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.5c-.8-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.4H7.8v3.3h3.1v8.4h3.6Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor">
      <path d="M12 2.2c-2.7 0-3 0-4.1.1-1 0-1.8.2-2.4.5-.6.2-1.2.6-1.7 1.1-.5.5-.8 1-1.1 1.7-.2.6-.4 1.3-.5 2.4 0 1.1-.1 1.4-.1 4.1s0 3 .1 4.1c0 1 .2 1.8.5 2.4.2.6.6 1.2 1.1 1.7.5.5 1 .8 1.7 1.1.6.2 1.3.4 2.4.5 1.1 0 1.4.1 4.1.1s3 0 4.1-.1c1 0 1.8-.2 2.4-.5.6-.2 1.2-.6 1.7-1.1.5-.5.8-1 1.1-1.7.2-.6.4-1.3.5-2.4 0-1.1.1-1.4.1-4.1s0-3-.1-4.1c0-1-.2-1.8-.5-2.4-.2-.6-.6-1.2-1.1-1.7-.5-.5-1-.8-1.7-1.1-.6-.2-1.3-.4-2.4-.5-1.1 0-1.4-.1-4.1-.1Zm0 1.8c2.7 0 3 0 4 .1.9 0 1.4.2 1.8.3.4.2.7.4 1 .7.3.3.5.6.7 1 .1.4.3.9.3 1.8.1 1 .1 1.3.1 4s0 3-.1 4c0 .9-.2 1.4-.3 1.8-.2.4-.4.7-.7 1-.3.3-.6.5-1 .7-.4.1-.9.3-1.8.3-1 .1-1.3.1-4 .1s-3 0-4-.1c-.9 0-1.4-.2-1.8-.3-.4-.2-.7-.4-1-.7-.3-.3-.5-.6-.7-1-.1-.4-.3-.9-.3-1.8-.1-1-.1-1.3-.1-4s0-3 .1-4c0-.9.2-1.4.3-1.8.2-.4.4-.7.7-1 .3-.3.6-.5 1-.7.4-.1.9-.3 1.8-.3 1-.1 1.3-.1 4-.1Zm0 3.1a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm6.4-8.4a1.2 1.2 0 1 1-2.3 0 1.2 1.2 0 0 1 2.3 0Z" />
    </svg>
  );
}

export function GoogleGIcon(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23 12.3c0-.9-.1-1.5-.2-2.2H12v4h6.3c-.1 1-.8 2.6-2.3 3.6l3.5 2.7c2.1-1.9 3.4-4.8 3.4-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3 0 5.6-1 7.5-2.7l-3.5-2.7c-1 .7-2.3 1.1-4 1.1-3 0-5.6-2-6.5-4.8l-3.7 2.8A11.5 11.5 0 0 0 12 23.5Z"
      />
      <path
        fill="#FBBC05"
        d="M5.5 14.4a7 7 0 0 1 0-4.5L1.8 7.1a11.5 11.5 0 0 0 0 10.1l3.7-2.8Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3 .7 3.6 1.4l3.2-3.1A11 11 0 0 0 12 .5 11.5 11.5 0 0 0 1.8 7.1l3.7 2.8C6.4 6.9 9 4.8 12 4.8Z"
      />
    </svg>
  );
}
