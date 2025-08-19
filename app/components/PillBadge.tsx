import { twMerge } from "tailwind-merge";

const PillBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={twMerge(
        "px-3 py-1 text-xs bg-accent text-highlight rounded-full",
        className
      )}
    >
      {children}
    </span>
  );
};

export default PillBadge;
