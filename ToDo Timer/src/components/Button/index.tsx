import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button type="submit" className={styles.botao} {...rest}>
      {children}
    </button>
  );
}
