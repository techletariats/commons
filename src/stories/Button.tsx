import { FC } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

namespace Button {
  export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    secondary?: boolean;
  }
}

/** Primary UI component for user interaction */
export const Button: FC<Button.Props> = ({
  children,
  secondary = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames(
        styles.root,
        secondary ? styles.secondary : styles.primary
      )}
      {...props}
    >
      {children}
    </button>
  );
};
