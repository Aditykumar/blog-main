import React, { useContext, useState } from 'react'
import { CatContext } from './Catagory/CatContext'
function LatestArtCat2() {
    const tech3 = []
    const techAll = []
    const [result, setResult] = []
    const [visible, SetVisible] = useState(false)
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        if (a.Category === "technology") {
            techAll.push({
                name: a.Name,
                img: a.Img
            })
        }

    })
    techAll.forEach((a, index) => {
        if (index < 3) {
            tech3.push({
                name: a.name,
                img: a.img
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
                            <div>
                                <div > <img className='cardImgBox' src={latest.img}alt=""/> </div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='cardDec '>dec:</span>
                                    <p className='cardDate'>date<span className='cardDec'> /</span></p>
                               </div>
                           </div>
                        ) }
                      <button className='loadMore' onClick={loadLess} > View Less &#8592;</button> </>
                    :<>{tech3.map((latest) => 
                        <div>
                            <div > <img className='cardImgBox' src={latest.img}alt=""/> </div>
                            <div>
                                <div className='cardTitle'>{latest.name}</div>
                                <span className='cardDec '>dec:</span>
                                <p className='cardDate'>date<span className='cardDec'> /</span></p>
                           </div>
                       </div>
                    ) }
                    <button className='loadMore' onClick={loadMore} > View More &#8594;</button></>
                
                }
        </div>
    )
}

export default LatestArtCat2
