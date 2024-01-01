import React from 'react'
import Image from "next/image"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


/* ------Great Horned Owl Sequence------  */

export default function skillsSec() {
  return (
    <section className='skillsinfo'>
        <div className="skillsection-1">
        <div className="abtfs-txt">
                <span className="abtfs-txt-2">2/5</span>
                Skills
            </div>
            </div>
            <div className="skillsection-2">
                <div className="titleSec">
                    <div className="title" id='myText'><span>It has become time to be profesional.</span> As you already know, I am a creative web developer, and through my life I've been creating websites </div>

                </div>
                <div className="cluster clusterGreat">
                    <div className="circle clusterPieces"></div>
                    <div className="me clusterPieces">
                <Image width="310" height="482" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="me!" />
                <div className="dots">
                <Image width="340" height="300" className='dotsBlue clusterPieces' src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/dots_blue_494x434.svg" alt="me!" />
                </div>
            </div>
        </div>
        <div className="titleSec2">
        <div className="title titleBurrowing">I am currently using mostly NextJS, but I'm also very expierenced in <span className="html">HTML</span>,<span className="css"> CSS</span> and also <span className="js">Vanilla JS</span>.</div>
        </div>
        <div className="titleSec3">
        <div className="title titleBurrowing">As of this time, I am using diffrent technologies, gsap, gsap ScrollTrigger, gsap ScrollTo, etc... so I can make my websites more interactive and animated.</div>
        </div>
    </div>
       
    </section>
  )

  
}

// parallax 

gsap.set(".circle", { yPercent: -10});
gsap.set(".dotsBlue", { yPercent: 15});
gsap.set(".me", { yPercent: -25});
gsap.set(".clusterGreat", { yPercent: 10});

gsap.to(".circle", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -15,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".me", {
  yPercent: 25,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});



gsap.to(".clusterGreat", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});


