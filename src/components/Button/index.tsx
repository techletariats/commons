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
}: Button.Props) =>
  as === "a" ? (
    <a
      className={classNames(styles.Button, styles[variant])}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </a>
  ) : (
    <button
      className={classNames(styles.Button, styles[variant])}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
