import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import image from "../../public/img/me.jpg";

// did i add the comments? fuck no, who did? codeium did :3 its so coooool

export default function ScrollSection() {

    /**
     * A scroll section component that uses GSAP ScrollTrigger to animate scrolling.
     * The component animates the sectionRef element to translateX: "-180vh" when scrolled.
     */
    const sectionRef = useRef(null); // Reference to the section element
    const triggerRef = useRef(null); // Reference to the trigger element

    gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger plugin

    useEffect(() => {
        /**
         * Animation function that animates the sectionRef element to translateX: "-180vh" 
         * when scrolled using GSAP ScrollTrigger.
         */
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0 // Initial translateX value
        }, {
            translateX: "-50%", // Final translateX value
            ease: "none", // Easing function
            duration: 1, // Duration of the animation
            scrollTrigger: {
                trigger: triggerRef.current, // Trigger element
                start: "top top", // Start position of the animation
                end: "2000 top", // End position of the animation
                scrub: true, // Scrubbing effect  
                pin: true // Pin the element to its position
            }
        })
    
        // Cleanup function to kill the animation when the component unmounts
        return () => {
            pin.kill()
        }
    }, [])
    

  return (
   <section className="scroll-section-outer">
    <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section ss-1"><div className="abtfs-txt">
                <span className="abtfs-txt-2">2/4</span>
                About Me
            </div></div>
            <div className="scroll-section ss-2" id="aboutSection">
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
            <div className="custom-shape-divider-bottom-1703709061">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
            </div>
   </section>
  )
}
