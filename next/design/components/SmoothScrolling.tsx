"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.7, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;