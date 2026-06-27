export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6">
      <h2 className="text-2xl font-black tracking-widest text-white">
        VICEHUB AI
      </h2>

      <div className="hidden md:flex gap-8 text-gray-300">
        <button className="hover:text-pink-400 transition">AI</button>
        <button className="hover:text-pink-400 transition">Map</button>
        <button className="hover:text-pink-400 transition">Vehicles</button>
        <button className="hover:text-pink-400 transition">Weapons</button>
        <button className="hover:text-pink-400 transition">Tracker</button>
      </div>
    </nav>
  );
}