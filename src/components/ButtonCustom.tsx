import { Button, ButtonProps as HeadlessButtonProps } from "@headlessui/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface ButtonCustomProps extends HeadlessButtonProps {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function ButtonCustom({
  children,
  leftIcon,
  rightIcon,

  className,
  type = "button",
  ...props
}: ButtonCustomProps) {
  return (
    <Button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 py-2 rounded transition-all cursor-pointer bg-primary hover:bg-primary/80  font-bold ",

        typeof className === "string" ? className : "",
      )}
      {...props}
    >
      {leftIcon}
      {children && <span>{children}</span>}
      {rightIcon}
    </Button>
  );
}
