export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(236,72,153,0.18),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_30%_80%,rgba(147,51,234,0.16),transparent_35%)]" />

      <div className="absolute left-1/2 top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-pink-600/20 blur-[130px]" />

      <div className="absolute right-[5%] top-[25%] h-[380px] w-[380px] rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="absolute bottom-[-15%] left-[10%] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.85))]" />

      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
}