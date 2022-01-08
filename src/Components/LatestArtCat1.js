import React, { useContext, useState } from 'react'
import { CatContext } from './Catagory/CatContext'
function LatestArtCat1() {
    const bolly3 = []
    const bollyAll = []
    const [result, setResult] = []
    const [visible, SetVisible] = useState(false)
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        if (a.Category === "bollywood") {
            bollyAll.push({
                name: a.Name,
                img: a.Img
            })
        }

    })
    bollyAll.forEach((a, index) => {
        if (index < 4) {
            bolly3.push({
                name: a.name,
                img: a.img
            })
        }

    })


    const loadMore = () => {
        SetVisible(true)
        setResult(bollyAll)
    }
    const loadLess = () => {
        SetVisible(false)
        setResult(bolly3)
    }
    console.log("ssss", result);
    return (
        <div>
                {visible ? <>{bollyAll.map((raa) => 
                            <div className='FlexRow'>
                                <div > <img className='cardImgBox' src={raa.img}alt=""/> </div>
                                <div>
                                    <div className='cardTitle'>{raa.name}</div>
                                    <div className='cardDec cardContain'>dec:</div>
                                    <p className='cardDate'>date<span className='cardDec'> /</span></p>
                               </div>
                           </div>
                        ) }
                      <button className='loadMore' onClick={loadLess} >&#8593; Load Less </button> </>
                    :<>{bolly3.map((ra)=> 
                        <div className='FlexRow' >
                            <div > <img className='cardImgBox' src={ra.img}alt=""/> </div>
                            <div>
                                <div className='cardTitle'>{ra.name}</div>
                                <div className='cardDec cardContain'>dec:</div>
                                <p className='cardDate'>date<span className='cardDec'> /</span></p>
                            </div>
                        </div>
                        )} 
                    <button className='loadMore' onClick={loadMore} >&#8595; Load More</button></>
                
                }
        </div>
    )
}

export default LatestArtCat1
