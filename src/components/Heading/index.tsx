import styles from "./style.module.css";
import classNames from "classnames";
import { HTMLAttributes } from "react";

namespace Heading {
  export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children: string;
    as?: "h1" | "h2" | "h3" | "h4";
  }
}

export const Heading = ({
  children,
  as = "h1",
  className: userClassName,
  ...rest
}: Heading.Props) => {
  const Element = as;
  const className = classNames(styles.Heading, userClassName);
  return (
    <Element className={className} {...rest}>
      {children}
    </Element>
  );
};
