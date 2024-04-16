import { ReactNode } from "react";
import styles from "./left-right-translate.module.css";

interface Props<T> {
  variant?: "center" | "left";
  items: T[];
  children: (item: T) => ReactNode;
}

export function LeftRightTranslate<T>({
  items,
  variant = "center",
  children,
}: Props<T>) {
  return (
    <div
      className={styles.wrapper}
      data-variant={variant}
      style={{ "--color": "white", "--bg-color": "#252525" }}
    >
      {items.map((item, i) => (
        <div key={i} className={styles.line} style={{ "--index": i }}>
          {children(item)}
        </div>
      ))}
    </div>
  );
}
