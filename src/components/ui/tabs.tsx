import * as React from "react";

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function Tabs({ value, defaultValue, onValueChange, className, children }: TabsProps) {
  const [current, setCurrent] = React.useState(defaultValue || "");
  React.useEffect(() => {
    if (value !== undefined) setCurrent(value);
  }, [value]);
  const handleChange = (val: string) => {
    setCurrent(val);
    onValueChange && onValueChange(val);
  };
  return <div className={className}>{React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child, { current, onTabChange: handleChange });
  })}</div>;
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}
export function TabsList({ className, children }: TabsListProps) {
  return <div className={className}>{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  current?: string;
  onTabChange?: (value: string) => void;
}
export function TabsTrigger({ value, className, children, current, onTabChange }: TabsTriggerProps) {
  return (
    <button
      className={className + (current === value ? " active" : "")}
      onClick={() => onTabChange && onTabChange(value)}
      type="button"
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  current?: string;
  children: React.ReactNode;
}
export function TabsContent({ value, current, children }: TabsContentProps) {
  if (current !== value) return null;
  return <div>{children}</div>;
}