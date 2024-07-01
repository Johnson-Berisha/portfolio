import React from 'react'

function contact() {
  return (
    <main className="contact" id='contactSection'>
        <div className="container">
            <div className="sections">
                <div className="section section1"></div>
                <div className="section section2">
                    <div className="stitle">Meet Me!</div>
                    <div className="info">
                        <div className="infos info1">
                            <i className='gg-phone'></i>
                            <p>+383 49 711 544</p>
                        </div>
                        <div className="infos info2">
                            <i className='gg-mail'></i>
                            gjonsonberisha@gmail.com
                        </div>
                        <div className="infos info3">
                            <i className="gg-pin"></i>
                            Kushtrimi I Lirise St, Doberdol, Kline
                        </div>
                    </div>
                </div>
                <div className="section section3">
                <div className="stitle">Pitch Me!</div>
              <form action="">
                    <div className="group group1">
                        <input type="text" name="name" id="name" placeholder='My name...' autoComplete='off' required />
                        <input type="email" name='email' id='email' placeholder='My email...' autoComplete='off' required />
                    </div>
                    <div className="group group2">
                        <input type="text" name="message" id="message" placeholder='My message...' autoComplete='off' />
                    </div>

                   <button type='submit' className='btn2'><span>Send</span><i className="gg-mail mail2"></i></button>
                   </form>
                   
                </div>
            </div>
        </div>
    </main>
  )
}

export default contact