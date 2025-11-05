import { FC } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

namespace Button {
  export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
  }
}

export const Button: FC<Button.Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(styles.root, styles[variant])}
      {...props}
    >
      {children}
    </button>
  );
};
