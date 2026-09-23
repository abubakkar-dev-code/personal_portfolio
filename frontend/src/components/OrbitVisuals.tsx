const orbitConfig = [
  {
    ring: 1,
    radius: 75,
    duration: 16,
    reverse: false,
    angle: 0,
    icon: "⚛",
    label: "React",
    iconBg: "bg-[#61DAFB]",
    iconColor: "text-[#0B0A10]",
  },
  {
    ring: 1,
    radius: 75,
    duration: 16,
    reverse: false,
    angle: 180,
    icon: "⬢",
    label: "Node.js",
    iconBg: "bg-[#3C873A]",
    iconColor: "text-white",
  },
  {
    ring: 2,
    radius: 115,
    duration: 24,
    reverse: true,
    angle: 60,
    icon: "M",
    label: "MongoDB",
    iconBg: "bg-[#47A248]",
    iconColor: "text-white",
  },
  {
    ring: 2,
    radius: 115,
    duration: 24,
    reverse: true,
    angle: 240,
    icon: "ex",
    label: "Express",
    iconBg: "bg-zinc-100",
    iconColor: "text-[#0B0A10]",
  },
  {
    ring: 3,
    radius: 155,
    duration: 32,
    reverse: false,
    angle: 110,
    icon: "TS",
    label: "TypeScript",
    iconBg: "bg-[#3178C6]",
    iconColor: "text-white",
  },
  {
    ring: 3,
    radius: 155,
    duration: 32,
    reverse: false,
    angle: 290,
    icon: "✦",
    label: "AI",
    iconBg: "bg-gradient-to-br from-primary to-purple-400",
    iconColor: "text-white",
  },
];

export default function OrbitVisual() {
  const uniqueRadii = Array.from(
    new Set(orbitConfig.map((item) => item.radius)),
  );
  return (
    <div className="relative w-full max-w-90 aspect-square mx-auto flex items-center justify-center">
      <div
        className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-2xl"
        style={{ animation: "pulse-slow 4s ease-in-out infinite" }}
      />
      {uniqueRadii.map((radius) => (
        <div
          key={radius}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/80"
          style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
        />
      ))}
      <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 shadow-[0_0_20px_5px_rgba(139,92,246,0.8)]" />
      {orbitConfig.map((item, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 w-0 h-0 pointer-events-none"
          style={{
            animation: `${item.reverse ? "orbit-reverse" : "orbit"} ${item.duration}s linear infinite`,
          }}
        >
          <div
            className="absolute left-0 top-0"
            style={{
              transform: `rotate(${item.angle}deg) translateX(${item.radius}px) rotate(-${item.angle}deg)`,
            }}
          >
            <div
              style={{
                animation: `${item.reverse ? "orbit" : "orbit-reverse"} ${item.duration}s linear infinite`,
              }}
            >
              <div className="pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border bg-card/90 backdrop-blur-md px-3 py-1 shadow-md transition-transform hover:scale-110 hover:border-violet-500">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-md text-[11px] font-bold ${item.iconBg} ${item.iconColor}`}
                >
                  {item.icon}
                </span>
                <span className="text-xs font-medium text-primary">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
