import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CatContext } from './Catagory/CatContext'
import { Link } from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'
import avtar from '../logo/avtar.png'

function ArtReading() {
    const { id } = useParams();
    let result = []
    const MoreResult = []
    const [data] = useContext(CatContext);
    data.forEach((a) => {
        if (a.Id === id) {
            result.push(a.Category)


        }
    })
    const category = result[0]
    data.forEach((a) => {
        if ((a.Category === category) && (a.Id !== id)) {
            MoreResult.push(
                {
                    id: a.Id,
                    category: a.Category,
                    name: a.Name,
                    img: a.Img,
                    date: a.Date,
                    detail: a.Details,
                    about: a.About
                })
        }
    })



    console.log("dddd", MoreResult);
    console.log("sdsfsdfdfgdsgdfgdd", result)

    return (
        <div>
            <div className="ClapFixed">
                                <ClapCount />
                                <br/>
                                <div><i className="fas fa-share-alt"> </i>&nbsp; &nbsp;Share this article</div>
                            </div>
            <div className="FlexRow readJustifyCenter ">

                {data.filter((dataa) => dataa.Id === id).map((result) =>
                    <div className="ReadArtBox borderShadow">


                        <div className="txtAlignCenter">{result.Name}</div>
                        <br />
                        <div className="FlexRow1 jstSpaceBeetben">
                            <div ><img alt="avter" style={{ width: "40px" }} src={avtar} /><i style={{ color: "gray" }}>Dmitry Nozhenko</i></div>
                            <div><i className="fab fa-facebook-square"></i> &nbsp;<i className="fab fa-twitter-square"></i> &nbsp;<i className="fab fa-instagram"></i> &nbsp;<i class="fab fa-youtube-square"></i></div>
                        </div>
                        <div>
                            <img className="readArtImg" alt="Article" src={result.Img} />
                            <div>   <ClapCount /> </div>
                        </div>
                        <br />
                        <br />
                        <div className=" ReadArtBox"><i>{result.Details}</i></div>
                        <br />
                        
                        <span>{result.About}</span>
                    </div>

                )
                }

            </div >
           <div style={{background:"white"}}>
            <div className='homeLatestTxt'><div className='articleHtext'>More </div> Latest  Article</div>


            <div className='FlexRow'>

                {MoreResult.filter((dataa, index) => index < 3).map((latest) =>
                    <div key={latest.id}>

                        <div style={{ cursor: "pointer" }} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img} alt="" /> </Link></div>
                        <div>
                            <div className='cardTitle'>{latest.name}</div>
                            <span className='cardDec '>About : {latest.detail.slice(0, 30)} </span>
                            <p className='cardDate'>{latest.category}<span className='cardDec'>/ {latest.date}</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div></div>
    )
}

export default ArtReading
