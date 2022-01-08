import React, { useContext } from 'react'
import { CatContext } from './CatContext'
function Hollywood() {
  const content = []
  const [data] = useContext(CatContext)


  data.forEach((cat) => {
    if (cat.Category === "hollyWood") {
      console.log(cat);
      content.push({
        id: cat.Id,
        name: cat.Name,
        img: cat.Img,
        story: cat.Story,
        directed: cat.detail.Directed,
        released: cat.detail.Released,
        types: cat.detail.Types,
        stars: cat.detail.Stars,
        imdb: cat.detail.Imdb
        
      });
    }
  });




  return (
    <div>


      {content.map((row) =>
            <div className='FlexRow' >
              <div > <img className='cardImgBox' src={row.img} alt="" /> </div>
              <div>
                <div className='cardTitle'>{row.name}</div>
                <div className='cardDec cardContain'>
                  <div>{row.directed}</div>
                  <div>{row.stars}</div>
                  <div>{row.imdb}</div>
                  <div>{row.types}</div>

                </div>
                <p className='cardDate'>Released Date<span className='cardDec'> / {row.released}</span></p>
              </div>

            </div>
          )}
    </div>
  )
}

export default Hollywood
