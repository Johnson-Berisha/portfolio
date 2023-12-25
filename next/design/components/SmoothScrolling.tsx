"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react"; // Import ReactNode type from react

interface SmoothScrollingProps {
  children: ReactNode; // Explicitly define children prop type
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
