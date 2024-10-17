import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  label: string;
  href?: string; // Optional href for Link
  onClick?: () => void; // Optional onClick for Button
  className?: string; // Additional classes passed as props
  children?: ReactNode; // For optional icons or extra content
};

const Button = ({
  label,
  href,
  onClick,
  className = "",
  children,
}: ButtonProps) => {
  const buttonStyle =
    "py-[0.563rem] lg:py-[1.031rem] rounded-[10px] text-[0.75rem] text-center lg:text-[1.125rem] text-[#ffffff] bg-[linear-gradient(93.15deg,_#CF60F2_-0.19%,_#78388C_99.46%)] cursor-pointer";

  return href ? (
    <Link href={href} className={`${buttonStyle} ${className}`}>
      {label}
      {children && <span>{children}</span>}
    </Link>
  ) : (
    <button onClick={onClick} className={`${buttonStyle} ${className}`}>
      {label}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
