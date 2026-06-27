export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(236,72,153,0.14),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.12),transparent_35%)]" />

      <div className="absolute left-1/2 top-[15%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-pink-600/15 blur-[80px]" />

      <div className="absolute right-[8%] top-[28%] h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[80px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.9))]" />
    </div>
  );
}