import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-md",
    outline: "border border-gray-200 bg-white hover:bg-gray-100 text-gray-900",
    ghost: "hover:bg-gray-100 hover:text-gray-900 text-[var(--color-foreground-muted)]",
    link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
  };
  
  const sizes = {
    default: "h-11 px-6 py-2 text-[15px]",
    sm: "h-9 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button };
