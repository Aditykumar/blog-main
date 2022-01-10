import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { CatContext } from './Catagory/CatContext'
function LatestArtCat3() {
    const tech3 = []
    const techAll = []
    const [result, setResult] = []
    const [visible, SetVisible] = useState(false)
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        if (a.Category === "technology") {
            techAll.push({
                name: a.Name,
                img: a.Img,
                id:a.Id,
                date:a.Date,
                detail:a.Details,
                category:a.Category
            })
        }

    })
    techAll.forEach((a, index) => {
        if (index < 3) {
            tech3.push({
                name: a.name,
                img: a.img,
                id:a.id,
                date:a.date,
                detail:a.detail,
                category:a.category
            })
        }

    })


    const loadMore = () => {
        SetVisible(true)
        setResult(techAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(tech3)
    }
    console.log("ssss", result);
    return (
        
             <div className='FlexRow'>
                {visible ? <>{techAll.map((latest) => 
                            <div key={latest.id}>
                                <div style={{cursor:"pointer"}} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='cardDec '>About : {latest.detail.slice(0,30)} </span>
                                    <p className='cardDate'>{latest.category}<span className='cardDec'> / {latest.date}</span></p>
                               </div>
                           </div>
                        ) }
                      <button className='loadMore' onClick={loadLess} > View Less &#8592;</button> </>
                    :<>{tech3.map((latest) => 
                        <div key={latest.id}>
                             <div style={{cursor:"pointer"}} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>

                            <div>
                            <div className='cardTitle'>{latest.name}</div>
                                    <div className='cardDec '>About : {latest.detail.slice(0,100)} </div>
                                    <p className='cardDate'>{latest.category}<span className='cardDec'> / {latest.date}</span></p>
                           </div>
                       </div>
                    ) }
                    <button className='loadMore' onClick={loadMore} > View More &#8594;</button></>
                
                }
        </div>
    )
}

export default LatestArtCat3
