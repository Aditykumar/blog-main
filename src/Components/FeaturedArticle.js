import React, { useContext }  from 'react'
import { CatContext } from './Catagory/CatContext'
function FeaturedArticle() {
    let item1=[]
    let item2=[]
    let item3=[]
    const [data] = useContext(CatContext)
    data.forEach((div1)=>{
        let key =div1.Id
        switch (key) {
            case "17":
                item1.push({
                    name:div1.Name,
                    img:div1.Img
                })
                break;
                case "2":
                item2.push({
                    name:div1.Name,
                    img:div1.Img
                })
                break;case "22":
                item3.push({
                    name:div1.Name,
                    img:div1.Img
                })
                break;
        
            default:
                break;
        }
      
    })
    console.log(item1);
    console.log(item2);
    console.log(item3);
    return (
        <div>
           
               
                   
                <div className='grid-container' >
             {item1.map((data)=> 
                  <div class="grid-item item1" >
                      <img className='item1Image' src= {data.img} alt="" />
                      <div className='item1Txt'>{data.name}</div>
                    </div>
                
             )}  <div>
              {item2.map((data)=><> 
                      {/* <img className='' src= {data.img} alt="" /> */}

                  <div class="grid-item item2">{data.name}</div>
                  </>
             )}  {item3.map((data)=> 
                <div class="grid-item item2">{data.name}</div>
              
           )}      
               </div>
            </div>
          
        </div>
    )
}

export default FeaturedArticle

