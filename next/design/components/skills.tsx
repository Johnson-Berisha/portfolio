import React from 'react'
import Image from 'next/image'


function skills() {
  return (
    <main className='skills'>
  
  <div className="container">
    <div className="big-text1">
      <p><span className="bt1-span">It has become time to be more professional</span>, I am a passionate web development enthusiast and CSS aficionado. Armed with a versatile skill set, I excel in <span style={
        {color: "#f06529"}
      }>HTML</span>, <span style={{color: "#2965f1"}}>CSS</span>, <span style={{color: "#f0db4f"}}>Javascript</span>, <span>NextJS ▲</span>, <span style={{color: "#2ab8cb"}}>React</span>, <span style={{color: "#007acc"}}>Typescript</span>, and <span style={{color: "#507d2a"}}>GSAP</span>. My journey involves translating ideas into captivating digital experiences. Let's embark on a coding adventure together, crafting innovative and visually appealing web solutions. Join me in the exciting realm where creativity meets technology! </p>
      
    </div>
    <div className="box-sec">
    
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/html-1.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/css-3.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/javascript-1.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/next-js.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/react-2.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/typescript.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/gsap-greensock.svg"
      width={100}
      height={180}
      alt=""></Image>
    </div>
    <div className="htmlcssjs-skill">
      <Image src="/img/skills/figma-5.svg"
      width={140}
      height={220}
      alt=""></Image>
    </div>
       
    </div>
    </div>
</main>
  )
}

export default skills