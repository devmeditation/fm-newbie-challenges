import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  stylesOption?: string
}

export function Button({ children, stylesOption, ...rest }:ButtonProps) {
  return (
    <button className={`${styles.button} ${stylesOption}`} {...rest}>
      {children}
    </button>
  )
}