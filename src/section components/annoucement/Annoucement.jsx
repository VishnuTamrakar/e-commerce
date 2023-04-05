import React from 'react'

const Annoucement = () => {
    const myStyles ={
        width:'26%  ',
        hieght:'340px'
    }
    const myStyle1={
        width:'68%',
        hieght:'340px'
    }
  return (
    <>
    <section className="annoucement background">
        <div className="container d_flex">
            <div className="img" style={myStyles}>
                <img src="./images/banner-1.png" alt="" />
            </div>
            <div className="img"style={myStyle1}>
                <img src="./images/banner-2.png" alt="" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Annoucement
