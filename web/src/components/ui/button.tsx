import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button as raw material, fully restyled to the DevAXL brand:
 * amber primary with #0A0A0C ink + amber glow on hover, quiet ghost,
 * token-driven radius/timing. Nothing here reads like a default template.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-md font-semibold tracking-[-0.01em] " +
    "transition-[background,border-color,box-shadow,transform] duration-[120ms] ease-standard " +
    "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--focus-ring)] " +
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 " +
    "[&_svg]:size-[1.05em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-on-accent shadow-xs hover:bg-accent-hover hover:shadow-glow",
        ghost:
          "bg-transparent text-primary border border-subtle hover:bg-surface-2 hover:border-strong",
        quiet:
          "bg-transparent text-secondary hover:text-primary",
      },
      size: {
        sm: "h-[38px] px-4 text-[14px]",
        md: "h-[46px] px-[22px] text-[14px]",
        lg: "h-[52px] px-7 text-[16px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
