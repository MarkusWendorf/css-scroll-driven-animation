import { LeftRightTranslate } from "~/components/left-right-translate/LeftRightTranslate";
import { Parallax } from "~/components/parallax/Parallax";
import { Reveal } from "~/components/reveal/Reveal";
import { TextBlur } from "~/components/text-blur/TextBlur";
import { TextReveal } from "~/components/text-reveal/TextReveal";

export default function About() {
  const lines = [
    "For Green Luberon, I designed an immersive",
    "e-commerce experience, reflecting the brand's",
    "commitment to natural health. Leveraging Figma, I",
    "crafted a responsive website that guides users",
    "effortlessly from discovery to purchase.",
    "",
    "I focused on weaving a narrative that connects the",
    "brand's values with their target audience, ensuring every",
    "digital touchpoint conveys the essence of nature and",
    "wellness.",
  ];

  const items = [
    "Relaxation",
    "Focus",
    "Balance",
    "Release",
    "Transform",
    "Perform",
    "MindfulnessVeryLongness",
    "Clarity",
  ];

  const leftRightLines = ["Join our", "Jungle", "Trek"];

  return (
    <div style={{ color: "#e3f7d3" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", margin: "8rem 0" }}>
        Scroll down
      </h1>

      <div style={{ height: "100vh" }}></div>

      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        <Parallax x="0%" y="-100%" />
        <Parallax x="20%" y="-50%" />
        <Parallax x="0%" y="50%" />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextReveal
          words={[
            ["Sturdily", "beautiful", "prosperous"],
            ["Warm,", "bright."],
            ["Naturally", "comforting."],
            ["Timelessly", "modern."],
          ]}
        />
      </div>

      <LeftRightTranslate items={leftRightLines}>
        {(item) => <div>{item}</div>}
      </LeftRightTranslate>

      <LeftRightTranslate items={["Partner", "Love"]} variant="left">
        {(item) => <div>{item}</div>}
      </LeftRightTranslate>

      <div style={{ height: "100vh" }}></div>

      <TextBlur items={items}>{(item) => <div>{item}</div>}</TextBlur>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "4rem" }}
      >
        <Reveal color="#e3f7d3" items={lines}>
          {(item) => <div>{item}</div>}
        </Reveal>
      </div>

      <div style={{ height: "100vh" }}></div>
    </div>
  );
}
