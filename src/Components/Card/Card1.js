import React from 'react'

function Card1(props) {
    return (
        <div >
             <div > <img className='cardImgBox' src={props.img}alt=""/> </div>
        <div >
          <div className='cardTitle'>{props.title}</div>
          <span className='carDec'>{props.fullDec}</span>
          <p className='cardDate'>Travel<span className='cardDec'> / {props.date}</span></p>
        </div>
        
      </div>
    )
}

export default Card1