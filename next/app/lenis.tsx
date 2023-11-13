"use client"

import React, { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"

/**
 * Wrapper for Lenis
 */
export default function SmoothScroller() {
  const containerRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on("scroll", () => {
      const container = containerRef.current as unknown as HTMLElement
      if (container) {
        const containerWidth = container.offsetWidth
        const scrollPercent =
          lenis.scroll / (container.scrollWidth - containerWidth)

        const hitems = container.querySelectorAll(".slide-item")

        gsap.to(hitems, {
          xPercent: -100 * scrollPercent,
          ease: "sine.out",
        })
      }
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div id="horizontal" ref={containerRef} style={{ overflowX: "scroll" }}>
      {/*
        Render your slide items here with the "slide-item" class
        For example:
      */}
      <div className="slide-item">Slide Item 1</div>
      <div className="slide-item">Slide Item 2</div>
      <div className="slide-item">Slide Item 3</div>
    </div>
  )
}
