import React from 'react'

function contact() {
  return (
    <main className="contact">
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
                    <input type="text" className='name' />
                </div>
            </div>
        </div>
    </main>
  )
}

export default contact