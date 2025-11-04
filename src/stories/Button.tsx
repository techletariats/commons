import styles from "./button.module.css";

export interface ButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Is this the principal call to action on the page? */
  secondary?: boolean;
}

/** Primary UI component for user interaction */
export const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" className={styles.root} {...props}>
      {label}
    </button>
  );
};
