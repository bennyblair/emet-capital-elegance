import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-6 shadow-md transition-all",
  {
    variants: {
      variant: {
        default: "bg-background border",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export type ToastProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants> & {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    title?: React.ReactNode
    description?: React.ReactNode
    action?: React.ReactNode
  }

export function Toast({ className, variant, ...props }: ToastProps) {
  return <div className={toastVariants({ variant, className })} {...props} />
}

export function ToastTitle(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="font-semibold" {...props} />
}

export function ToastDescription(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="text-sm opacity-90" {...props} />
}

export function ToastClose(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      aria-label="Close"
      className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md text-sm opacity-60 transition-opacity hover:opacity-100 focus:outline-none"
      {...props}
    >
      ×
    </button>
  )
}

export function ToastViewport(
  props: React.HTMLAttributes<HTMLOListElement>
) {
  return (
    <ol
      className="fixed top-0 right-0 z-50 m-0 flex max-h-screen w-full flex-col gap-2 p-4 sm:max-w-[420px]"
      {...props}
    />
  )
}
