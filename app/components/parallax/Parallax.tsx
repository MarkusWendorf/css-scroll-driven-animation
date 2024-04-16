import styles from "./styles.module.css";

interface Props {
  x: string;
  y: string;
}

export function Parallax({ x: offsetX, y: offsetY }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ "--offset-x": offsetX, "--offset-y": offsetY }}
    ></div>
  );
}
