import { ReactNode } from "react";
import styles from "./carousel.module.css";

interface Props<T> {
  items: T[];
  children: (item: T) => ReactNode;
}

export function Carousel<T>({ items, children }: Props<T>) {
  return (
    <div className={styles.wrapper} style={{ "--n": items.length }}>
      <div className={styles.carousel}>
        {items.map((item, i) => (
          <div
            key={i}
            className={styles.item}
            style={{
              "--index": i,
            }}
          >
            {children(item)}
          </div>
        ))}
      </div>
    </div>
  );
}
