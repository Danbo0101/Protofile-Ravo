// app/components/ReturningInsightsBWSection.tsx
"use client";

type CircleStat = {
    percent: number;          // 0..100
    label: string;            // "New", "Returning"
    tone?: "solid" | "muted"; // solid = đen, muted = xám đậm
    subnote?: string;
};

type StatTile = {
    title: string;
    value: string;
    subtitle: string;
    footer: string;
    tone?: "black" | "dark"; // header nền đen (black) hay xám rất đậm (dark)
};

type Props = {
    title?: string;
    description?: string;
    leftCardTitle?: string;
    circles: [CircleStat, CircleStat];
    tiles: [StatTile, StatTile];
    className?: string;
};

/** Vòng tròn % đen–trắng, text trắng ở giữa */
function CircleBadge({ percent, label, tone = "solid" }: CircleStat) {
    const bg =
        tone === "solid"
            ? "bg-black"
            : "bg-neutral-800"; // xám đậm cho biến thể thứ hai

    return (
        <div className="flex flex-col items-center">
            <div
                className={[
                    "grid aspect-square w-[180px] place-items-center rounded-full text-white shadow-sm",
                    bg,
                ].join(" ")}
            >
                <div className="text-5xl font-extrabold leading-none">{percent}%</div>
                <div className="mt-1 text-sm font-medium opacity-95">{label}</div>
            </div>
        </div>
    );
}

/** Tile số liệu: header nền đen/xám đậm, footer nền trắng */
function StatTileCard({
    title,
    value,
    subtitle,
    footer,
    tone = "black",
}: StatTile) {
    const headerBg = tone === "black" ? "bg-black" : "bg-neutral-900";

    return (
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            <div className={["px-5 py-10 text-center text-white", headerBg].join(" ")}>
                <div className="text-xs font-semibold tracking-wide uppercase opacity-90">
                    {title}
                </div>
                <div className="mt-4 text-5xl font-extrabold leading-none">{value}</div>
                <div className="mt-1 text-sm opacity-90">{subtitle}</div>
            </div>
            <div className="bg-white px-5 py-3 text-center text-sm text-neutral-600">
                {footer}
            </div>
        </div>
    );
}

export default function ReturningInsightsSection({
    title = "See who’s coming back for seconds.",
    description = "Understand your customers in a whole new way. Identify new vs. returning customers, see your most frequent and most recent visitors, and find out how much your average customer spends.",
    leftCardTitle = "New Customers vs Returning Customers",
    circles,
    tiles,
    className = "",
}: Props) {
    const [left, right] = circles;
    const [tileA, tileB] = tiles;

    return (
        <section
            className={[
                "w-full bg-white text-black",
                className,
            ].join(" ")}
        >
            <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
                {/* Heading */}
                <div className="max-w-3xl">
                    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
                        {title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
                        {description}
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2">
                    {/* Left card: circles */}
                    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.25)] sm:p-8">
                        <h3 className="text-center text-sm font-semibold text-neutral-700">
                            {leftCardTitle}
                        </h3>

                        <div className="mt-8 grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2">
                            <div className="flex flex-col items-center">
                                <CircleBadge {...left} />
                                {left.subnote && (
                                    <p className="mt-4 text-sm text-neutral-500">{left.subnote}</p>
                                )}
                            </div>

                            <div className="flex flex-col items-center">
                                <CircleBadge {...right} />
                                {right.subnote && (
                                    <p className="mt-4 text-sm text-neutral-500">{right.subnote}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right card: stat tiles */}
                    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.25)] sm:p-8">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <StatTileCard {...tileA} />
                            <StatTileCard {...tileB} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
