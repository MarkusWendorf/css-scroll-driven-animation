import styles from "./styles.module.css";

interface Props {
  words: string[][];
}

export function TextReveal({ words }: Props) {
  let current = 0;

  return (
    <div>
      {words.map((row, i) => (
        <div
          key={i}
          className={styles.row}
          style={{
            "--row": i,
          }}
        >
          {row.map((word, j) => (
            <div
              key={j}
              style={{
                "--index": current++,
              }}
              className={styles.word}
            >
              {word}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
