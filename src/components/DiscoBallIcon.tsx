import type { SVGProps } from 'react';

type DiscoBallIconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export default function DiscoBallIcon({
  size = 24,
  className,
  ...props
}: DiscoBallIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 2h2v2.1a8 8 0 0 1 6.9 6.9H22v2h-2.1a8 8 0 0 1-6.9 6.9V22h-2v-2.1a8 8 0 0 1-6.9-6.9H2v-2h2.1A8 8 0 0 1 11 4.1V2Zm1 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
      />
      <path
        fill="currentColor"
        d="M11 6.3h2v11.4h-2V6.3Zm-3.7 2.1h9.4v1.6H7.3V8.4Zm-.8 4.1h10.9v1.1H6.5v-1.1Zm1.1 3h8.8v1.6H7.6v-1.6Zm2.2-10.7h1.5c-.8.6-1.4 1.4-1.9 2.3H7.8c.5-.9 1.2-1.7 2-2.3Zm2.9 0h1.5c.8.6 1.5 1.4 2 2.3h-1.6c-.5-.9-1.1-1.7-1.9-2.3Zm-6.3 6h3.1v1.9H6.1c0-.6.1-1.3.3-1.9Zm8.1 0h3.4c.2.6.3 1.3.3 1.9h-3.4v-1.9Zm-4.9 2.9h1.8v3.9H9.6v-3.9Zm3 0h1.8v3.3c-.6.3-1.2.5-1.8.7v-4Zm-3-7.8h1.8v2.5H9.6V5.9Zm3 0h1.8v2.5h-1.8V5.9Z"
      />
    </svg>
  );
}
