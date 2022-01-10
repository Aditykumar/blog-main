import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { CatContext } from './Catagory/CatContext'
function TopArtWebsite() {
    let top1 = []
    let top3 = []
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        let key = a.Id
        switch (key) {
            case "21":
                top1.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category: a.category
                })
                break;
            case "11":
                top3.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category: a.Category
                })
                break;
            case "22":
                top3.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category: a.Category
                })
                break;
            case "40":
                top3.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category: a.Category
                })
                break;


            default:
                break;
        }

    })
    console.log("top1", top1);
    console.log("top3", top3);


    return (
        <div>
            <div className='FlexRow  topArtContainer'>
                {top1.map((ra, index) =>
                    <div key={ra.id}>
                        <div style={{ cursor: "pointer" }}><Link to={`/artReading/${ra.id}`}> <img className='topArtImgBox' src={ra.img} alt="top" /></Link></div>

                        <div className='FlexRow1'>
                            <div className='top1ArtTitle'>
                                <div>{ra.name}</div>
                                <p className='cardDate'>{ra.category}<span className='cardDec'> / {ra.date}</span></p>
                            </div>
                            <div className='topArtIndex'> {index + 1}</div>
                        </div>
                    </div>
                )}
                {top3.map((raa, index) =>
                    <div key={raa.id} className='FlexRow1'>
                        <div style={{ cursor: "pointer" }}><Link to={`/artReading/${raa.id}`}>  <img className='topArtImgBox2' src={raa.img} alt="{raa.name}" /></Link></div>
                        <div className='topArtTitle'>
                            <div>{raa.name.slice(0, 15)}</div>
                            <p className='cardDate'>{raa.category}<span className='cardDec'> / {raa.date}</span></p>
                        </div>

                        <div className='topArtIndex'> {index + 2}</div>
                    </div>

                )}
            </div>
        </div>
    )
}

export default TopArtWebsite
