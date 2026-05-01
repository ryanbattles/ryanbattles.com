/**
 * A thin horizontal divider with a soft elliptical shadow.
 * By default the shadow rises *above* the line (like a page edge curving up).
 * Pass `flip` to mirror it so the shadow hangs *below* the line.
 */
export function ShadowSeparator({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="relative w-full h-6 pointer-events-none select-none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      {/* Soft elliptical shadow rising from the line */}
      <div className="shadow-sep-glow absolute left-1/2 -translate-x-1/2 bottom-0 w-[85%] max-w-2xl h-6" />
      {/* The thin line itself */}
      <div className="shadow-sep-line absolute inset-x-0 bottom-0 h-px" />
    </div>
  );
}
