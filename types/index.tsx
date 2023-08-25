import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  type?: "button" | "submit";
}

export interface InputProps {
  autocomplete?: "on" | "off";
  containerStyles?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

export interface CardProps {
  description: string;
  title: string;
  type: string;
}