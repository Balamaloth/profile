import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-4 h-4 rounded-full bg-primary transition-all duration-200 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-primary transition-all duration-300 ${
            isPointer ? "scale-150 opacity-50" : "scale-100 opacity-100"
          }`}
        />
      </div>
    </>
  );
};
