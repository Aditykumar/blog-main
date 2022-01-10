import React, { useContext } from 'react'
import { CatContext } from './Catagory/CatContext'
import { Link } from 'react-router-dom'
function FeaturedArticle() {
    let item1 = []
    let item2 = []
    const [data] = useContext(CatContext)
    data.forEach((a) => {
        let key = a.Id
        switch (key) {
            case "17":
                item1.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category

                })
                break;
            case "18":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category

                })
                break; case "32":
                item2.push({
                    name: a.Name,
                    img: a.Img,
                    id: a.Id,
                    date: a.Date,
                    detail: a.Details,
                    category:a.Category
                 
                })
                break;

            default:
                break;
        }

    })
    console.log(item1);
    console.log(item2);
    return (




        <div className='FeatureArtBox' >
            {item1.map((data) =>
                <div  key={data.id}class="FeatureBox1" >
                    <Link to={`/artReading/${data.id}`}><img style={{cursor:"pointer"}} className='FeatureImgBox1' src={data.img} alt="" /></Link>
                    <div className='box1Txt'>{data.name}</div>
                    <div className='box1TxtDate'>{data.category} / {data.date}</div>
                </div>

            )}
            <div>
                {item2.map((data) => 
                <div  key={data.id} className='FeatureBox2'>
                   <Link to={`/artReading/${data.id}`}> <img className='FeatureImgBox2' src= {data.img} alt="" /></Link>
                    <div class="box2Txt">{data.name}</div>
                    <div className='box2TxtDate'> {data.category} / {data.date}</div>
                </div>
                )}
            </div>
        </div>

    )
}

export default FeaturedArticle

