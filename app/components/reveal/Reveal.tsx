import { ReactNode } from "react";
import styles from "./reveal.module.css";

interface Props<T> {
  color: string;
  items: T[];
  children: (item: T) => ReactNode;
}

export function Reveal<T>({ color, items, children }: Props<T>) {
  return (
    <div style={{ "--color": color }}>
      {items.map((item, i) => (
        <div key={i} className={styles.reveal}>
          {children(item)}
        </div>
      ))}
    </div>
  );
}
