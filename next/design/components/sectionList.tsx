import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import image from "../../public/img/me.jpg";

export default function ScrollSection() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
      
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-180vh",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: true,
                pin: true
            }
        })
    
      return () => {
        pin.kill()
      }
    }, [])
    

  return (
   <section className="scroll-section-outer">
    <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section ss-1"><div className="abtfs-txt">
                <span className="abtfs-txt-2">1/5</span>
                About Me
            </div></div>
            <div className="scroll-section ss-2">
                <div className="text-section">
                    <h1>About Me</h1>
                    <br /><br />
                    <p>Hi, I'm Johnson Berisha, <i>well...</i> In my language, <i>Gjonson Berisha</i>, since I come from <span className="highlight">Kosovo</span>, and I live in the small village of <span className="highlight">Doberdol</span> inside the city of <span className="highlight">Klina</span>.</p>
                    <br /><br />
                    <p>I was born on the <span className="line">24 of January 1999</span>... Wait wait wait.. no.. sorry let's try again, I was born on the <span className="highlight">24 of January 2011</span> with <span className="highlight">3 years</span> of experience in Web Development! <br />
                    I'm a <strong>Front-End Web Developer</strong> who is still too young to get a degree, but I do have a degree on Youtube, I guess..?</p>
                    <br /><br />
                    <p>Hmmm, <span className="sup">Should I become more profesional?</span> Nahh, I'm still a kid. <br />
                    Soo basically, my journey <span className="highlight"><i>in the miraculous world of spending 6 hours a day on making a website</i></span> started when my <i>Tezak</i> <span className="sup">Albanian for aunt's son</span> said to me: "<i>Do you know Web Dev?</i> " then i said: "<i>No.</i>", then he said: "<i>Then learn it.</i>".</p>
                </div>
                <div className="big-photo-section" 
                style={{
                  
                   
                    backgroundPosition: "50% 75%",
                    backgroundSize: "90%",
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className="triangle"></div>
                    <div className="triangle2"></div>
                    <div className="image-overlay"></div>
                </div>
            </div>
            
            
        </div>
        
    </div>
    <div className="about-big-section">
    <p>Oh yeah, I forgot, his name is <span className="highlight">Astrit Malsija</span>.</p>
    <br />
    <p>Fine, <span className="sup">I'll become more profesional.</span> I'm <span className="highlight">Gjonson Berisha</span>, I’m a web developer with a passion for <strong>building excellent websites</strong>,
            applications and everything in between. I specialize in building and designing exceptional digital
            experiences. Currently, I’m focused on building responsive
            full-stack web applications.</p><br />
            <p>The lion? <big>↗</big>,  <i>it resembles how I feel </i> <span className="sup"> also looks good</span> !</p><br />
            <p>I call myself <span className="sup">unofficially </span>a <strong>creative Web Developer</strong>, since I like to be creative with my websites, <small>just like this one</small>, and also because it makes me feel cool. I myself, am in love with interactive tools like Lenis, gsap, etc... because, I want to give my users information, but also like to make it fun!</p><br /><br />
            <p>I've been in this field for about <span className="highlight">3 years</span> and it's been the best journey of my life. There's something about coding that just feels right, and it never makes me stop, and if you are interested, <span className="highlight">you can contact me thorugh the contact page</span>!</p>
            <br />
            <p>See ya!</p>
            </div>
   </section>
  )
}
