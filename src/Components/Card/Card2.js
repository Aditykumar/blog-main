import React from 'react'

function Card2(props) {
    return (
        <div className='FlexRow' >
             <div > <img className='cardImgBox' src={props.img}alt=""/> </div>
        <div>
          <div className='cardTitle'>{props.title}</div>
          <div className='cardDec cardContain'>{props.fullDec}</div>
          <p className='cardDate'>Travel<span className='cardDec'> / {props.date}</span></p>
        </div>
        
      </div>
    )
}

export default Card2