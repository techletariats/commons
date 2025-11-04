import { FC } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

namespace Button {
  export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
  }
}

/** Primary UI component for user interaction */
export const Button: FC<Button.Props> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.root,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary
      )}
      {...props}
    >
      {children}
    </button>
  );
};
