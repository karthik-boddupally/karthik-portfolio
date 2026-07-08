
export default function HeroIllustration() {
  return (
    <div className="relative w-full">
      <img
        src="/hero-illustration.png"
        alt="Karthik working on a laptop"
        className="w-full h-auto"
        style={{
          maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        }}
      />
    </div>
  );
}
