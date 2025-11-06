import { ButtonHTMLAttributes, FC } from "react";
import { Variant } from "@/types";
import styles from "./style.module.css";
import classNames from "classnames";

export namespace Button {
  export interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    children: string;
    variant?: Variant;
  }
}

export const Button: FC<Button.Props> = ({
  children,
  variant = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button
      className={classNames(styles.Button, styles[variant])}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
