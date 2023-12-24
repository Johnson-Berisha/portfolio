import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";



const SectionList = () => {
   
const sectionRef = useRef(null);
const triggerRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
        translateX: 0
    }, {
        translateX: "300vh",
        ease: "none",
        duration: 1,
        ScrollTrigger: {
            trigger: triggerRef,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true
        }

    })

    return () => {
pin.kill()
    }

}, []);

  return (
    <>
     <div ref={triggerRef} className="about" id="horizontal">
        <div className="sections" ref={sectionRef}>
        <div className="abt-firstsec" id="h-item">
            <div className="abtfs-txt">
                <span className="abtfs-txt-2">1/5</span>
                About Me
            </div>
            
        </div>

        <div className="abt-actualsec" id="h-item">
            
            <h1>yooooo it actually works</h1>
            
    
        </div>
        </div>
 
    </div>
    </>
  );
    };




export default SectionList;
