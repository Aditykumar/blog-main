import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CatContext } from './Catagory/CatContext'
import {Link} from 'react-router-dom'
import ClapCount from './Hoc/ClapCount'

function ArtReading() {
    const { id } = useParams();
    let result=[]
    const MoreResult=[]
    const [data] = useContext(CatContext);
    data.forEach((a)=>{
        if (a.Id===id) {
        result.push(a.Category)
               
            
    }})
    const category=result[0]
    data.forEach((a)=>{
        if ((a.Category===category)&&(a.Id!==id)) {
            MoreResult.push(
            {  id:a.Id,
                category:a.Category,
                name: a.Name,
                img: a.Img,
                date:a.Date,
                detail:a.Details,
                about:a.About})
        }
    })
    
    
    
    console.log("dddd",MoreResult);
    console.log("sdsfsdfdfgdsgdfgdd",result)
       
    return (
        <div>
        <div className="FlexRow readJustifyCenter ">
           
            {data.filter((dataa) => dataa.Id===id).map((result) =>
            <div className="ReadArtBox borderShadow">
                <div className="txtAlignCenter">{result.Name}</div>
                <div><img  className="readArtImg" alt="Article" src={result.Img}/></div>
                <div className=" ReadArtBox">{result.Details}</div>
                <span>{result.About}</span>
            </div>
            
            )
        }
        
        </div>
        <ClapCount/>
<div className='homeLatestTxt'><div className='articleHtext'>More </div> Latest  Article</div>


             <div className='FlexRow'>

                {MoreResult.filter((dataa,index) => index<3).map((latest) => 
                            <div key={latest.id}>
                                
                                <div style={{cursor:"pointer"}} > <Link to={`/artReading/${latest.id}`}><img className='cardImgBox' src={latest.img}alt=""/> </Link></div>
                                <div>
                                    <div className='cardTitle'>{latest.name}</div>
                                    <span className='cardDec '>About : {latest.detail.slice(0,30)} </span>
                                    <p className='cardDate'>Launch Date<span className='cardDec'>/ {latest.date}</span></p>
                               </div>
                           </div>
                        ) }
                        </div>
        </div>
    )
}

export default ArtReading
