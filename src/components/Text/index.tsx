import styles from "./style.module.css";
import classNames from "classnames";
import { HTMLAttributes } from "react";

namespace Text {
  export type Props = { children: string } & (
    | ({
        as?: "p";
      } & HTMLAttributes<HTMLParagraphElement>)
    | ({
        as: "span";
      } & HTMLAttributes<HTMLSpanElement>)
  );
}

export const Text = ({
  children,
  as = "p",
  className: userClassName,
  ...rest
}: Text.Props) => {
  const className = classNames(styles.Text, userClassName);
  return as === "span" ? (
    <span className={className} {...(rest as HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </span>
  ) : (
    <p className={className} {...(rest as HTMLAttributes<HTMLParagraphElement>)}>
      {children}
    </p>
  );
};
