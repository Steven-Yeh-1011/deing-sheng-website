/** DS ADM® banner logo — geometric industrial bold style */
export default function DsAdmLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-baseline justify-center gap-4 md:gap-6 ${className}`}>
      <span
        className="text-6xl md:text-8xl font-black text-white"
        style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
      >
        DS
      </span>
      <span
        className="text-6xl md:text-8xl font-black text-white"
        style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
      >
        ADM
        <sup className="text-lg md:text-xl font-medium align-super ml-1 text-white/70">®</sup>
      </span>
    </div>
  );
}
