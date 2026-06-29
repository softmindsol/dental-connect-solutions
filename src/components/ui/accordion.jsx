"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Plus } from "lucide-react";

const AccordionContext = React.createContext({});
const AccordionItemContext = React.createContext(null);

export function Accordion({
  type = "single",
  collapsible = true,
  defaultValue,
  className,
  children,
}) {
  const [value, setValue] = React.useState(
    defaultValue || (type === "multiple" ? [] : ""),
  );

  const handleToggle = (itemValue) => {
    if (type === "single") {
      if (value === itemValue && collapsible) {
        setValue("");
      } else {
        setValue(itemValue);
      }
    } else {
      if (value.includes(itemValue)) {
        setValue(value.filter((v) => v !== itemValue));
      } else {
        setValue([...value, itemValue]);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ value, handleToggle }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, className, children }) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div
        className={cn(
          "border-b border-[var(--color-border)] last:border-0",
          className,
        )}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ className, children }) {
  const { value: selectedValue, handleToggle } =
    React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const isExpanded = Array.isArray(selectedValue)
    ? selectedValue.includes(itemValue)
    : selectedValue === itemValue;

  return (
    <button
      className={cn(
        "flex flex-1 items-center justify-between w-full py-5 text-left font-semibold text-[15.5px] text-[var(--color-secondary)] transition-all hover:text-[var(--color-primary)]",
        className,
      )}
      onClick={() => handleToggle(itemValue)}
      aria-expanded={isExpanded}
    >
      {children}
      <Plus
        className={cn(
          "h-5 w-5 shrink-0 text-[var(--color-primary)] transition-all duration-200",
          {
            "rotate-45": isExpanded,
          },
        )}
      />
    </button>
  );
}

export function AccordionContent({ className, children }) {
  const { value: selectedValue } = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  const isExpanded = Array.isArray(selectedValue)
    ? selectedValue.includes(itemValue)
    : selectedValue === itemValue;

  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isExpanded
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "pb-5 pt-0 text-[14.5px] leading-[24px] text-[var(--color-foreground-muted)]",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
