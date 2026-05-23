import { tickerItems } from "@/data/ticker";

export default function MarqueeTicker() {
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {allItems.map((item, i) => (
          <div key={i} className="ticker__item">
            {item}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image-3.svg"
              alt=""
              width={22}
              height={22}
              style={{ display: "inline-block", flexShrink: 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
