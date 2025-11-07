import styles from "./style.module.css";
import classNames from "classnames";
import { Variant } from "@/types";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

namespace Button {
  export type Props = { variant?: Variant; children: string } & (
    | ({
        as?: "button";
      } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({
        as: "a";
      } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );
}

export const Button = ({
  children,
  variant = "primary",
  as = "button",
  ...props
}: Button.Props) => {
  const className = classNames(styles.Button, styles[variant], 'prevent-select', 'focus-outline');
  return as === "a" ? (
    <a
      className={className}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  ) : (
    <button
      className={className}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}