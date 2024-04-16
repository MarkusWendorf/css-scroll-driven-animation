import { ReactNode } from "react";
import styles from "./textblur.module.css";

interface Props<T> {
  items: T[];
  children: (item: T) => ReactNode;
}

export function TextBlur<T>({ items, children }: Props<T>) {
  return (
    <div className={styles.wrapper}>
      <div>
        {items.map((item, i) => (
          <div key={i} className={styles.blur}>
            {children(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
