import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Play = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isStriking, setIsStriking] = useState(false);
  const [buttonClicks, setButtonClicks] = useState<Record<number, number>>({});
  const [openPopup, setOpenPopup] = useState<number | null>(null);

  useEffect(() => {
    // Auto-focus the page on mount
    if (pageRef.current) {
      pageRef.current.focus();
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsStriking(true);
      setTimeout(() => setIsStriking(false), 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 800;
      const newPosition =
        direction === "left"
          ? containerRef.current.scrollLeft - scrollAmount
          : containerRef.current.scrollLeft + scrollAmount;

      containerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") scroll("left");
    if (e.key === "ArrowRight") scroll("right");
  };

  const logCoords = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    const worldX = e.clientX - rect.left + container.scrollLeft;
    const worldY = e.clientY - rect.top;

    const section = Math.floor(worldX / viewportWidth);
    const localX = Math.round(worldX - section * viewportWidth);
    const localY = Math.round(worldY);

    console.log({ section, x: localX, y: localY });
  };

  const handleButtonClick = (buttonId: number) => {
    // Play mining sound
    const audio = new Audio('/mining.m4a');
    audio.play();

    // Trigger the strike animation
    setIsStriking(true);
    setTimeout(() => setIsStriking(false), 300);

    const currentClicks = buttonClicks[buttonId] || 0;
    const newClicks = currentClicks + 1;

    setButtonClicks({ ...buttonClicks, [buttonId]: newClicks });

    if (newClicks >= 3) {
      setOpenPopup(buttonId);
    }
  };

  return (
    <div
      ref={pageRef}
      className="h-screen w-screen overflow-hidden bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 relative cursor-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{ cursor: 'none' }}
    >
      {/* Custom cursor - large pickaxe */}
      <div
        className="fixed pointer-events-none z-50 text-8xl transition-transform duration-150"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) rotate(${isStriking ? '-90deg' : '0deg'})`,
        }}
      >
        ⛏️
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-4 z-20 -translate-y-1/2 pointer-events-auto" style={{ cursor: 'pointer' }}>
        <Button
          onClick={(e) => { e.stopPropagation(); scroll("left"); }}
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute top-1/2 right-4 z-20 -translate-y-1/2 pointer-events-auto" style={{ cursor: 'pointer' }}>
        <Button
          onClick={(e) => { e.stopPropagation(); scroll("right"); }}
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        onClick={logCoords}
        className="h-full overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div
          className="h-full inline-flex"
          style={{
            width: "400vw",
            backgroundImage: "url(/cave-background.png)",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
          }}
        >
          {/* Section 0 */}
          <div className="w-screen h-full relative flex items-center justify-center">
            <button
              style={{ left: '451px', top: '200px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(1); }}
            />
            <button
              style={{ left: '707px', top: '614px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(2); }}
            />
            <button
              style={{ left: '840px', top: '162px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(3); }}
            />
            <button
              style={{ left: '1095px', top: '223px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(4); }}
            />
          </div>

          {/* Section 1 */}
          <div className="w-screen h-full relative flex items-center justify-center">
            <button
              style={{ left: '147px', top: '162px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(5); }}
            />
            <button
              style={{ left: '550px', top: '177px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(6); }}
            />
            <button
              style={{ left: '676px', top: '155px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(7); }}
            />
            <button
              style={{ left: '822px', top: '189px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(8); }}
            />
            <button
              style={{ left: '1064px', top: '124px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(9); }}
            />
            <button
              style={{ left: '1349px', top: '159px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(10); }}
            />
          </div>

          {/* Section 2 */}
          <div className="w-screen h-full relative flex items-center justify-center">
            <button
              style={{ left: '8px', top: '180px' }}
              className="absolute w-32 h-32 rounded-full bg-transparent hover:bg-transparent border-2 border-transparent hover:border-transparent transition-all hover:scale-110 -translate-x-1/2 -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); handleButtonClick(11); }}
            />
          </div>

          {/* Section 3 */}
          <div className="w-screen h-full relative flex items-center justify-center">
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-sm px-8 py-6 rounded-2xl">
        <p className="text-emerald-100 text-1xl font-bold">
          Swing 3 times to uncover a gem!
        </p>
      </div>

      {/* Scroll Instructions */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full">
        <p className="text-emerald-100 text-sm">
          Use ← → arrow keys or click buttons to scroll
        </p>
      </div>

      {/* Popup Window */}
      {openPopup !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Button {openPopup} Unlocked!
            </h2>
            <p className="text-gray-700 mb-6">
              You clicked this rock 3 times and discovered something special!
            </p>
            <button
              onClick={() => setOpenPopup(null)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Play;
