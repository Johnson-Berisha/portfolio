"use client"

import { useEffect, useRef } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"

/**
 * Wrapper for Lenis
 */
export default function SmoothScroller(this: any) {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on("scroll", (e: any) => {
      console.log(e)
    })

    function raf(time: number) {

      

      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);


// horizontal

const hsection1 = document.getElementById('horizontal');
const hitems = gsap.utils.toArray('#h-item');

gsap.to(hitems, {
  xPercent: -100 * (hitems.length - 1),
  ease: "sine.out",
  scrollTrigger: {
      trigger: hsection1,
      pin: true,
      scrub:3,
      snap: 1 / (hitems.length - 1),
      end: "+=" + hsection1?.offsetWidth
  }
})

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return this
}
