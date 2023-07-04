import { cn } from "../../../libs/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md  font-medium transition-colors focus:outline-none disabled:opacity-50  disabled:pointer-events-none dark:focus:ring-offset-slate-900 rounded-radius-default antialiased",
  {
    variants: {
      variant: {
        default:
          "bg-color-primary text-color-secondary gap-gap-btn-text font-fw-btn-default active:scale-95	",
        danger:
          "bg-color-danger text-color-white gap-gap-btn-text font-fw-btn-default active:scale-95	",
        outline:
          "bg-transparent text-color-secondary gap-gap-btn-text btn-height-default font-fw-btn-default text-base border-2	border-slate-300 active:scale-95	",
        ghost:
          "bg-transparent text-transparent  hover:bg-color-primary hover:text-color-secondary gap-gap-btn-text font-fw-btn-default active:scale-95	",
        link: "bg-transparent text-color-link gap-gap-btn-text font-fw-btn-default ",
      },
      size: {
        default: "btn-height-default p-padding-btn-default text-base",
        sm: "btn-height-sm p-padding-btn-sm text-sm",
        lg: "btn-height-lg p-padding-btn-lg text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  btnImg?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      size,
      btnImg,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={onClick}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {btnImg ? (
          <img src={btnImg} alt="O Auth image" className="h-6 w-6 mr-2" />
        ) : null}
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
