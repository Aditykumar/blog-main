import React, { useContext, useState } from 'react'
import { CatContext } from './Catagory/CatContext'
function LatestArtCat2() {
    const fitness3 = []
    const fitnessAll = []
    const [result, setResult] = []
    const [visible, SetVisible] = useState(false)
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        if (a.Category === "fitness") {
            fitnessAll.push({
                name: a.Name,
                img: a.Img
            })
        }

    })
    fitnessAll.forEach((a, index) => {
        if (index < 3) {
            fitness3.push({
                name: a.name,
                img: a.img
            })
        }

    })


    const loadMore = () => {
        SetVisible(true)
        setResult(fitnessAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(fitness3)
    }
    console.log("ssss", result);
    return (
        
             <div className='FlexRow'>
                {visible ? <>{fitnessAll.map((latest) => 
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
                    :<>{fitness3.map((latest) => 
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
