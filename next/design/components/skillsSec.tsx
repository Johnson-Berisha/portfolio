import React from 'react'
import Image from "next/image"

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
                <div className="skillsText">
                    <br /><br /><br />
                    <h1>My Skills</h1><br /><br /><br />
                    <p>Some text... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, cupiditate odit quod tempore aspernatur nam laudantium expedita vel quia tempora ducimus itaque nisi neque consequatur quibusdam quo harum necessitatibus dignissimos.</p>
                    <br /><br />
                    <p>Some text... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, cupiditate odit quod tempore aspernatur nam laudantium expedita vel quia tempora ducimus itaque nisi neque consequatur quibusdam quo harum necessitatibus dignissimos.</p>
                   
                </div>
                <div className="skillsImgSec">
                    <p>Skills and Technologies I practice.</p>
                <Image
                className="skillsimg"
                width="765"
                height="450"
                src="/img/skills.svg"
                alt=""
              />
                </div>
            
            </div>
    </section>
  )
}
