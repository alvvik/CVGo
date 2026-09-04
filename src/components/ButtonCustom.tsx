import { Button, ButtonProps as HeadlessButtonProps } from "@headlessui/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface ButtonCustomProps extends HeadlessButtonProps {
  children?: ReactNode;
}

export default function ButtonCustom({
  children,
  className,
  type = "button",
  ...props
}: ButtonCustomProps) {
  return (
    <Button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-semibold text-white  transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-primary focus:outline-none focus:ring-4 focus:ring-primary/20",
        typeof className === "string" ? className : "",
      )}
      {...props}
    >
      {children && <span>{children}</span>}
    </Button>
  );
}
