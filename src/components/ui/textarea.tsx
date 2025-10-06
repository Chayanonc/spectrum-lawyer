import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-white/40 shadow-xs focus-visible:ring-primary focus-visible:ring-[1px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Textarea({
  className,
  variant,
  ...props
}: React.ComponentProps<"textarea"> & VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(textareaVariants({ className, variant }), className)}
      {...props}
    />
  );
}

export { Textarea };
