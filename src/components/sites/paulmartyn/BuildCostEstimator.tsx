"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Build cost estimator.
 *
 * A port of Paul's standalone estimator into the site. The rates, the cost
 * lines and the arithmetic are his and are reproduced exactly; what changed is
 * the styling, which now uses the site's palette instead of the original's
 * grey-and-orange, so it does not read as a widget bolted onto the page.
 *
 * NOTE ON A LIKELY ERROR IN THE MODEL, carried over faithfully rather than
 * silently corrected: "Roof Structure" is multiplied by the number of storeys,
 * so a two-storey extension is charged twice for one roof frame. "Roof
 * Coverings" is correctly not multiplied. Flagged to Paul on 2026-08-13; left
 * as-is so the website and his own spreadsheet agree until he decides.
 */

/** [label, £ per m² of floor area] */
const OPTS = {
  storeys: [
    ["1", 1],
    ["2", 2],
    ["3", 3],
  ],
  walls: [
    ["Traditionally Rendered Block", 650],
    ["Monocouche Rendered Block", 770],
    ["Brick Facings", 860],
  ],
  roofing: [
    ["Clay Plain tile", 125],
    ["Interlocking tiles", 70],
    ["Concrete Plain Tile", 90],
    ["Flat roofing", 145],
  ],
  rooftype: [
    ["Pitched roof", 195],
    ["Flat roof (warm)", 300],
  ],
  foundation: [["Concrete Trench Fill", 150]],
} as const;

type OptKey = keyof typeof OPTS;

/**
 * `src` takes its rate from a dropdown; otherwise `rate` is fixed.
 * `storey` multiplies by the number of storeys.
 */
const LINES: { name: string; rate?: number; src?: OptKey; storey: boolean }[] = [
  { name: "Electrics & Plumbing", rate: 500, storey: true },
  { name: "Joinery", rate: 400, storey: true },
  { name: "Drainage", rate: 70, storey: true },
  { name: "Windows & Doors", rate: 105, storey: true },
  { name: "Sanitaryware Installation", rate: 35, storey: true },
  { name: "Partitions & Flooring", rate: 125, storey: true },
  { name: "Preliminaries", rate: 420, storey: true },
  { name: "Foundations", src: "foundation", storey: false },
  { name: "Roof Coverings", src: "roofing", storey: false },
  { name: "Roof Structure", src: "rooftype", storey: true },
  { name: "Masonry", src: "walls", storey: true },
];

/** Which illustration lights up for which field. */
const CARDS: { key: string; label: string; art: React.ReactNode }[] = [
  {
    key: "dims",
    label: "Size (W \u00d7 L)",
    art: (
      <svg viewBox="0 0 100 86" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><g transform="translate(44.5 61.0)"><path d="M0.0 -4.4 L32.7 -23.3 L10.9 -35.9 L-21.8 -17.0 Z" fill="#f2efe9" /><path d="M0.0 0.0 L32.7 -18.9 L32.7 -23.3 L0.0 -4.4 Z" fill="#e2ded6" /><path d="M0.0 0.0 L-21.8 -12.6 L-21.8 -17.0 L0.0 -4.4 Z" fill="#e9e6df" /><text x="16.4" y="-10.9" fontSize="11" fontFamily="sans-serif" fontWeight="700" fill="#e8722a" stroke="none" textAnchor="middle">W</text><text x="-10.9" y="-7.7" fontSize="11" fontFamily="sans-serif" fontWeight="700" fill="#e8722a" stroke="none" textAnchor="middle">L</text></g></svg>
    ),
  },
  {
    key: "storeys",
    label: "Storeys",
    art: (
      <svg viewBox="0 0 100 86" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><g transform="translate(44.5 80.2)"><path d="M0.0 0.0 L-21.8 -12.6 L-21.8 -46.6 L0.0 -34.0 Z" fill="#efece6" /><path d="M0.0 0.0 L32.7 -18.9 L32.7 -52.9 L0.0 -34.0 Z" fill="#e6e3dc" /><path d="M0.0 -34.0 L32.7 -52.9 L21.8 -74.3 L-10.9 -55.4 Z" fill="#eceae4" /><path d="M0.0 -34.0 L-21.8 -46.6 L-10.9 -55.4 Z" fill="#dcd8d0" /><path d="M-7.9 -4.5 L-14.0 -8.1 L-14.0 -19.6 L-7.9 -16.1 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M8.2 -20.4 L14.7 -24.2 L14.7 -29.6 L8.2 -25.8 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M20.3 -27.4 L26.8 -31.1 L26.8 -36.6 L20.3 -32.8 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M8.2 -28.5 L14.7 -32.3 L14.7 -37.8 L8.2 -34.0 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M20.3 -35.5 L26.8 -39.3 L26.8 -44.8 L20.3 -41.0 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M-8.7 -26.1 L-13.1 -28.7 L-13.1 -35.5 L-8.7 -32.9 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M0.0 -17.0 L32.7 -35.9" fill="none" strokeWidth="1.2"/><path d="M0.0 -17.0 L-21.8 -29.6" fill="none" strokeWidth="1.2"/></g></svg>
    ),
  },
  {
    key: "walls",
    label: "External walls",
    art: (
      <svg viewBox="0 0 100 86" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><g transform="translate(44.5 68.2)"><path d="M0.0 0.0 L-21.8 -12.6 L-21.8 -31.5 L0.0 -18.9 Z" fill="#efece6" /><path d="M0.0 0.0 L32.7 -18.9 L32.7 -37.8 L0.0 -18.9 Z" fill="#e6e3dc" /><path d="M0.0 -18.9 L32.7 -37.8 L10.9 -50.4 L-21.8 -31.5 Z" fill="#f4f2ec" /><path d="M0.0 -21.7 L27.8 -37.8 L10.9 -47.6 L-16.9 -31.5 Z" fill="#ddd9d0" /><path d="M-7.9 -4.5 L-14.0 -8.1 L-14.0 -18.5 L-7.9 -14.9 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M9.8 -13.2 L17.0 -17.4 L17.0 -23.4 L9.8 -19.3 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M20.3 -19.3 L27.5 -23.4 L27.5 -29.5 L20.3 -25.3 Z" fill="#ffffff" strokeWidth="1.3"/></g></svg>
    ),
  },
  {
    key: "roof",
    label: "Roof",
    art: (
      <svg viewBox="0 0 100 86" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><g transform="translate(44.5 71.3)"><path d="M0.0 0.0 L-21.8 -12.6 L-21.8 -29.0 L0.0 -16.4 Z" fill="#efece6" /><path d="M0.0 0.0 L32.7 -18.9 L32.7 -35.3 L0.0 -16.4 Z" fill="#e6e3dc" /><path d="M0.0 -16.4 L32.7 -35.3 L21.8 -56.7 L-10.9 -37.8 Z" fill="#e4e1d9" /><path d="M0.0 -16.4 L-21.8 -29.0 L-10.9 -37.8 Z" fill="#dcd8d0" /><path d="M-7.9 -4.5 L-14.0 -8.1 L-14.0 -17.1 L-7.9 -13.5 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M9.8 -12.2 L17.0 -16.4 L17.0 -21.6 L9.8 -17.5 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M20.3 -18.3 L27.5 -22.4 L27.5 -27.7 L20.3 -23.5 Z" fill="#ffffff" strokeWidth="1.3"/><path d="M6.5 -20.2 L-4.4 -41.6" fill="none" strokeWidth="1.2"/><path d="M13.1 -23.9 L2.2 -45.4" fill="none" strokeWidth="1.2"/><path d="M19.6 -27.7 L8.7 -49.1" fill="none" strokeWidth="1.2"/><path d="M26.2 -31.5 L15.3 -52.9" fill="none" strokeWidth="1.2"/></g></svg>
    ),
  },
  {
    key: "foundation",
    label: "Foundation",
    art: (
      <svg viewBox="0 0 100 86" fill="none" stroke="#3a3a3a" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"><g transform="translate(44.5 63.2)"><path d="M0.0 -8.8 L32.7 -27.7 L10.9 -40.3 L-21.8 -21.4 Z" fill="#f2efe9"/><path d="M0.0 0.0 L32.7 -18.9 L32.7 -27.7 L0.0 -8.8 Z" fill="#ddd9d1"/><path d="M0.0 0.0 L-21.8 -12.6 L-21.8 -21.4 L0.0 -8.8 Z" fill="#e6e3dc"/></g></svg>
    ),
  },
];

const FIELD_TO_CARD: Record<string, string> = {
  width: "dims",
  length: "dims",
  storeys: "storeys",
  walls: "walls",
  roofing: "roof",
  rooftype: "roof",
  foundation: "foundation",
};

function gbp(n: number) {
  return "£" + Math.round(n).toLocaleString("en-GB");
}

export function BuildCostEstimator() {
  const [width, setWidth] = useState("7");
  const [length, setLength] = useState("3");
  const [storeys, setStoreys] = useState(String(OPTS.storeys[0][1]));
  const [walls, setWalls] = useState(String(OPTS.walls[0][1]));
  const [roofing, setRoofing] = useState(String(OPTS.roofing[0][1]));
  const [rooftype, setRooftype] = useState(String(OPTS.rooftype[0][1]));
  const [foundation, setFoundation] = useState(String(OPTS.foundation[0][1]));
  const [active, setActive] = useState("dims");
  const [open, setOpen] = useState(false);

  const rates: Record<OptKey, string> = {
    storeys,
    walls,
    roofing,
    rooftype,
    foundation,
  };

  const { rows, total } = useMemo(() => {
    const area = (parseFloat(width) || 0) * (parseFloat(length) || 0);
    const s = parseInt(storeys, 10) || 1;

    const rows = LINES.map((line) => {
      const rate = line.src ? parseFloat(rates[line.src]) || 0 : (line.rate ?? 0);
      return { name: line.name, amount: rate * area * (line.storey ? s : 1) };
    });

    return { rows, total: rows.reduce((sum, r) => sum + r.amount, 0) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, length, storeys, walls, roofing, rooftype, foundation]);

  const touch = (field: string) => setActive(FIELD_TO_CARD[field] ?? "dims");

  const selectProps = (field: string, value: string, set: (v: string) => void) => ({
    value,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
      set(e.target.value);
      touch(field);
    },
    onFocus: () => touch(field),
    className:
      "w-full appearance-none rounded-[6px] border border-pm-rule bg-white bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23888%22 stroke-width=%222%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-[position:right_14px_center] bg-no-repeat py-3 pl-[14px] pr-[38px] text-[16px] text-pm-ink outline-none transition-colors focus:border-pm-gold",
  });

  const labelClass =
    "mb-2 block text-[14px] tracking-[.03em] text-pm-ink";

  return (
    <div className="@container w-full">
      {/* Headline total */}
      {/* Questions on the left of the tool, live result and illustrations
          on the right. On the pricing page that puts the questions in the
          middle column of the page and the running total beside them, so a
          visitor sees the figure move as they type rather than having to
          scroll back up to it. Collapses to one column when the container
          is too narrow to carry two. */}
      <div className="grid gap-8 @3xl:grid-cols-[1fr_1fr] @3xl:gap-10">
        <div>
          {/* Inputs */}
          <div className="mt-7 grid gap-5 @lg:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="bce-width">
                Extension width (m)
              </label>
              <input
                id="bce-width"
                type="number"
                min="0"
                step="0.1"
                inputMode="decimal"
                value={width}
                onChange={(e) => {
                  setWidth(e.target.value);
                  touch("width");
                }}
                onFocus={() => touch("width")}
                className="w-full rounded-[6px] border border-pm-rule bg-white px-[14px] py-3 text-[16px] text-pm-ink outline-none transition-colors focus:border-pm-gold"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="bce-length">
                Extension length (m)
              </label>
              <input
                id="bce-length"
                type="number"
                min="0"
                step="0.1"
                inputMode="decimal"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                  touch("length");
                }}
                onFocus={() => touch("length")}
                className="w-full rounded-[6px] border border-pm-rule bg-white px-[14px] py-3 text-[16px] text-pm-ink outline-none transition-colors focus:border-pm-gold"
              />
            </div>

            <div>
              <label className={labelClass} htmlFor="bce-storeys">
                Number of storeys
              </label>
              <select id="bce-storeys" {...selectProps("storeys", storeys, setStoreys)}>
                {OPTS.storeys.map(([l, v]) => (
                  <option key={l} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="bce-walls">
                External walls
              </label>
              <select id="bce-walls" {...selectProps("walls", walls, setWalls)}>
                {OPTS.walls.map(([l, v]) => (
                  <option key={l} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="bce-roofing">
                Roofing material
              </label>
              <select id="bce-roofing" {...selectProps("roofing", roofing, setRoofing)}>
                {OPTS.roofing.map(([l, v]) => (
                  <option key={l} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="bce-rooftype">
                Roof type
              </label>
              <select id="bce-rooftype" {...selectProps("rooftype", rooftype, setRooftype)}>
                {OPTS.rooftype.map(([l, v]) => (
                  <option key={l} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div className="@lg:col-span-2">
              <label className={labelClass} htmlFor="bce-foundation">
                Foundation type
              </label>
              <select
                id="bce-foundation"
                {...selectProps("foundation", foundation, setFoundation)}
              >
                {OPTS.foundation.map(([l, v]) => (
                  <option key={l} value={v}>
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        <div>
          <div className="flex items-center gap-6 rounded-[8px] border border-pm-rule bg-pm-cream px-6 py-5">
            <div className="hidden shrink-0 @sm:block" aria-hidden="true">
              <svg viewBox="0 0 120 120" fill="none" stroke="#3a3a3a" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
            <path d="M60 14 L100 37 L60 60 L20 37 Z" fill="#ffffff"/>
            <path d="M60 24 L86 39 L60 54 L34 39 Z" fill="#ece8e1" strokeWidth="1.6"/>
            <path d="M20 37 L60 60 L60 100 L20 77 Z" fill="#f6f4f0"/>
            <path d="M100 37 L60 60 L60 100 L100 77 Z" fill="#efece6"/>
            <path d="M30 55 L42 62 L42 74 L30 67 Z" fill="#ffffff" strokeWidth="1.6"/>
            <path d="M78 62 L90 55 L90 67 L78 74 Z" fill="#ffffff" strokeWidth="1.6"/>
          </svg>
            </div>
            <div>
              <div className="text-[13px] uppercase tracking-[.09em] text-pm-slate">
                Estimated build cost
              </div>
              <div className="text-[34px] font-semibold leading-[1.05] text-pm-ink @sm:text-[44px]">
                {gbp(total)}
              </div>
              <div className="mt-1 text-[13px] text-pm-slate">
                excluding VAT · indicative guide
              </div>
            </div>
          </div>


          {/* Illustration strip — the pointer follows whichever field is in use */}
          <div className="mt-6 grid grid-cols-3 gap-[10px] @lg:grid-cols-5">
            {CARDS.map((card) => {
              const isActive = card.key === active;
              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActive(card.key)}
                  aria-pressed={isActive}
                  className={cn(
                    "relative rounded-[8px] border bg-white px-2 pb-3 pt-4 text-center transition-colors",
                    isActive
                      ? "border-pm-gold bg-pm-cream shadow-[0_0_0_1px_var(--color-pm-gold)]"
                      : "border-pm-rule hover:border-pm-gold",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -top-[9px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[8px] border-t-[9px] border-x-transparent border-t-pm-gold transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  />
                  <span className="block [&>svg]:mx-auto [&>svg]:h-auto [&>svg]:w-full">
                    {card.art}
                  </span>
                  <span
                    className={cn(
                      "mt-2 block text-[12px] leading-[15px]",
                      isActive ? "text-pm-ink" : "text-pm-slate",
                    )}
                  >
                    {card.label}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Breakdown */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="bce-breakdown"
        className="mt-7 text-[13px] uppercase tracking-[.05em] text-pm-slate transition-colors hover:text-pm-ink"
      >
        {open ? "Hide cost breakdown ↑" : "Show cost breakdown ↓"}
      </button>

      <div
        id="bce-breakdown"
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="rounded-[8px] bg-pm-teal-dark px-6 py-5 text-white">
            {rows.map((row) => (
              <div
                key={row.name}
                className="flex items-baseline justify-between gap-4 border-b border-white/15 py-[9px] last:border-b-0"
              >
                <span className="text-[14px] text-white/80">{row.name}</span>
                <span className="whitespace-nowrap text-[16px] font-medium">
                  {gbp(row.amount)}
                </span>
              </div>
            ))}

            <div className="mt-2 flex items-baseline justify-between gap-4 border-t-2 border-white/35 pt-4">
              <span className="text-[15px] tracking-[.05em]">TOTAL (EX VAT)</span>
              <span className="whitespace-nowrap text-[20px] font-semibold">
                {gbp(total)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-[12.5px] leading-[1.55] text-pm-slate">
        Indicative estimate excluding VAT, based on the selections above at a
        standard build specification. Actual costs vary with site conditions,
        structural requirements, specification level and design complexity. For a
        detailed cost assessment, please get in touch.
      </p>
    </div>
  );
}
