import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { CatContext } from './Catagory/CatContext'
function LatestArtAll() {
    const latest = []
    const [data] = useContext(CatContext)
    data.forEach((a, index) => {
        if (index >= data.length - 3) {
            latest.push(
                {
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category: a.Category

                }
            )
        }

    })
    console.log(latest);
    return (
        <div style={{width:"auto"}}>
            <div className='FlexRow'>
                {
                    latest.map((latest) =>
                        <div key={latest.id}>
                            <div className='cardImgBox' style={{ cursor: "pointer" }} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img} alt="" /> </Link></div>

                            <div style={{margin:"15px"}} >
                                <div className='cardTitle'>{latest.name}</div>
                                <div className='cardDec '>About: {latest.detail.slice(0, 30)} ...</div>
                                <div className='cardDate'>{latest.category}<span className='cardDec'> / {latest.date}</span></div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default LatestArtAll
