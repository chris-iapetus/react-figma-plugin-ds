import * as React from "react";

interface ButtonProps {
  children: React.Component;
  secondary: boolean;
  disabled?: boolean;
  destructive?: boolean;
}

interface CheckboxProps {
  label: string;
  checkbox?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export {
  ButtonProps,
	CheckboxProps
};