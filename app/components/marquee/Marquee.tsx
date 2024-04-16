import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props<T> {
  items: T[];
  children: (item: T) => ReactNode;
}

export function Marquee<T>({ items, children }: Props<T>) {
  return (
    <div className={styles.wrapper} style={{ "--count": items.length }}>
      {items.map((item, i) => (
        <div key={i} className={styles.item} style={{ "--index": i }}>
          {children(item)}
        </div>
      ))}
    </div>
  );
}
