import styles from "./style.module.css";
import classNames from "classnames";
import { HTMLAttributes } from "react";

namespace Text {
  export type Props = { children: string; as: 'p' | 'span' } & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;
}

export const Text = ({
  children,
  as = "p",
  className: userClassName,
  ...rest
}: Text.Props) => {
  const className = classNames(styles.Text, userClassName);
  const Element = as;
  return (
    <Element className={className} {...(rest as HTMLAttributes<HTMLSpanElement>)}>
      {children}
    </Element>
  )
};
