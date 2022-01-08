import React, { useContext } from 'react'
import { CatContext } from './Catagory/CatContext'
function LatestArtAll() {
    const latest3 = []
    const [data] = useContext(CatContext)
    data.map((a, index) => {
        if (index >= data.length - 3) {
            latest3.push(a)
        }

    })
    console.log(latest3);
    return (
        <div>
            <div className='FlexRow'>
            {
            latest3.map((latest)=>
            <div>
            <div > <img className='cardImgBox' src={latest.Img} alt="" /> </div>
                    <div >
                        <div className='cardTitle'>{latest.Name}</div>
                        <span className='carDec'></span>
                        <p className='cardDate'>Publish Date<span className='cardDec'> / </span></p>
                    </div>
            </div>
            ) }
            </div>
        </div>
    )
}

export default LatestArtAll
