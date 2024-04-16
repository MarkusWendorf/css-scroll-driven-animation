import { Carousel } from "~/components/carousel/Carousel";

export default function Page() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <div>
        <Carousel items={items}>
          {(item) => (
            <img
              key={item}
              src={"/carousel/" + item + ".jpg"}
              alt=""
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.5rem",
                opacity: 0.98,
                height: "calc(var(--item-size) * 9 / 16)",
              }}
            />
          )}
        </Carousel>

        <div style={{ height: "100vh" }}></div>
      </div>

      <div style={{ height: "100vh" }}></div>
    </div>
  );
}
