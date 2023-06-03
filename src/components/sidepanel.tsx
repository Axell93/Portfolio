"use client";

import * as React from "react";
import * as SidePanel from "@radix-ui/react-dialog";
import { VariantProps, cva } from "class-variance-authority";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

import { cn } from "../lib/utils";

const Panel = SidePanel.Root;

const PanelTrigger = SidePanel.Trigger;

const portalVariants = cva("fixed inset-0 z-50 flex", {
  variants: {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      right: "justify-end",
    },
  },
  defaultVariants: { position: "right" },
});

interface PanelPortalProps
  extends SidePanel.DialogPortalProps,
    VariantProps<typeof portalVariants> {}

const PanelPortal = ({
  position,
  className,
  children,
  ...props
}: PanelPortalProps) => (
  <SidePanel.Portal
    className={cn(
      className,
      `transform transition ease-in-out duration-500 sm:duration-700`
    )}
    {...props}
  >
    <div className={portalVariants({ position })}>{children}</div>
  </SidePanel.Portal>
);
PanelPortal.displayName = SidePanel.Portal.displayName;

const PanelOverlay = React.forwardRef<
  React.ElementRef<typeof SidePanel.Overlay>,
  React.ComponentPropsWithoutRef<typeof SidePanel.Overlay>
>(({ className, children, ...props }, ref) => (
  <SidePanel.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    )}
    {...props}
    ref={ref}
  />
));
PanelOverlay.displayName = SidePanel.Overlay.displayName;

const panelVariants = cva(
  "fixed z-50 scale-100 gap-4 bg-background p-6 pt-16 bg-background opacity-100 shadow-lg border",
  {
    variants: {
      position: {
        top: "animate-in slide-in-from-top w-full duration-300",
        bottom: "animate-in slide-in-from-bottom w-full duration-300",
        left: "animate-in slide-in-from-left h-full duration-300",
        right: "animate-in slide-in-from-right h-full duration-300",
      },
      size: {
        content: "",
        default: "",
        sm: "",
        lg: "",
        xl: "",
        full: "",
      },
    },
    compoundVariants: [
      {
        position: ["top", "bottom"],
        size: "content",
        class: "max-h-screen",
      },
      {
        position: ["top", "bottom"],
        size: "default",
        class: "h-1/3",
      },
      {
        position: ["top", "bottom"],
        size: "sm",
        class: "h-1/4",
      },
      {
        position: ["top", "bottom"],
        size: "lg",
        class: "h-1/2",
      },
      {
        position: ["top", "bottom"],
        size: "xl",
        class: "h-5/6",
      },
      {
        position: ["top", "bottom"],
        size: "full",
        class: "h-screen",
      },
      {
        position: ["right", "left"],
        size: "content",
        class: "max-w-screen",
      },
      {
        position: ["right", "left"],
        size: "default",
        class: "w-1/3",
      },
      {
        position: ["right", "left"],
        size: "sm",
        class: "w-1/4",
      },
      {
        position: ["right", "left"],
        size: "lg",
        class: "w-1/2",
      },
      {
        position: ["right", "left"],
        size: "xl",
        class: "w-5/6",
      },
      {
        position: ["right", "left"],
        size: "full",
        class: "w-screen",
      },
    ],
    defaultVariants: {
      position: "right",
      size: "default",
    },
  }
);

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof SidePanel.Content>,
    VariantProps<typeof panelVariants> {}

const PanelContent = React.forwardRef<
  React.ElementRef<typeof SidePanel.Content>,
  DialogContentProps
>(({ position, size, className, children, ...props }, ref) => {
  return (
    <PanelPortal position={position}>
      <PanelOverlay />
      <SidePanel.Content
        ref={ref}
        className={cn(panelVariants({ position, size }), className)}
        {...props}
      >
        {children}
        <SidePanel.Close className="absolute mb-5 mt-3 mr-2 right-4 top-4 rounded-sm opacity-100 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  data-[state=open]:bg-secondary">
          <CloseSharpIcon className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SidePanel.Close>
      </SidePanel.Content>
    </PanelPortal>
  );
});
PanelContent.displayName = SidePanel.Content.displayName;

const PanelHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
PanelHeader.displayName = "PanelHeader";

const PanelFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
PanelFooter.displayName = "PanelFooter";

const PanelTitle = React.forwardRef<
  React.ElementRef<typeof SidePanel.Title>,
  React.ComponentPropsWithoutRef<typeof SidePanel.Title>
>(({ className, ...props }, ref) => (
  <SidePanel.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
PanelTitle.displayName = SidePanel.Title.displayName;

const PanelDescription = React.forwardRef<
  React.ElementRef<typeof SidePanel.Description>,
  React.ComponentPropsWithoutRef<typeof SidePanel.Description>
>(({ className, ...props }, ref) => (
  <SidePanel.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
PanelDescription.displayName = SidePanel.Description.displayName;

export {
  Panel,
  PanelTrigger,
  PanelContent,
  PanelHeader,
  PanelFooter,
  PanelTitle,
  PanelDescription,
};
