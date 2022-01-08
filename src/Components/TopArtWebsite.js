import React, { useContext }  from 'react'
import { CatContext } from './Catagory/CatContext'
function TopArtWebsite() {
    let top1=[]
    let top3=[]
    const [data] = useContext(CatContext)
    data.forEach((div1)=>{
        let key =div1.Id
        switch (key) {
            case "21":
                top1.push({
                    id:div1.Id,
                    name:div1.Name,
                    img:div1.Img
                })
                break;
                case "11":
                    top3.push({
                    id:div1.Id,
                    name:div1.Name,
                    img:div1.Img
                })
                break;
                case "22":
                top3.push({
                    id:div1.Id,
                    name:div1.Name,
                    img:div1.Img
                })
                break;
                case "40":
                top3.push({
                    id:div1.Id,
                    name:div1.Name,
                    img:div1.Img
                })
                break; 
               
        
            default:
                break;
        }
      
    })
    console.log("top1",top1);
    console.log("top3",top3);


    return (
        <div className='FlexRow  topArtContainer'>
            {top1.map((ra,index)=>
                 <div>
                       <img className='topArtImgBox' src={ra.img}alt=""/>
                    
                        <div className='FlexRow'>   
                             <div className='top1ArtTitle'>  
                                <div >{ra.name}</div>
                                <p className='cardDate'>date<span className='cardDec'> /</span></p>
                            </div>
                            <div className='topArtIndex'> {index+1}</div>
                         </div>
                </div>
            )}
            {top3.map((raa,index)=>
                <div className='FlexRow'>
                   <div> <img className='topArtImgBox2' src={raa.img}alt=""/></div>
                    <div className='topArtTitle'>
                        <div className=''>{raa.name}</div>
                        <p className='cardDate'>date<span className='cardDec'> /</span></p>
                    </div>

                   <div className='topArtIndex'> {index+2}</div> 
                </div>
            
            )}
     </div>  
    )
}

export default TopArtWebsite
