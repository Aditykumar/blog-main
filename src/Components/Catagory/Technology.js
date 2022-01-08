import React, { useContext } from 'react'
import { CatContext } from './CatContext'
function Technology() {
  const content = []
  const [data] = useContext(CatContext)


  data.forEach((cat) => {
    if (cat.Category === "technology") {
      console.log(cat);
      content.push({
        id: cat.Id,
        name: cat.Name,
        img: cat.Img,
        directed: cat.detail.Directed,
        released: cat.Released,
        types: cat.Types,
        stars: cat.Stars,
        imdb: cat.Imdb,
        story: cat.Story
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
                  <div>{row.story.slice(0,50)}</div>

                </div>
                <p className='cardDate'>Released Date<span className='cardDec'> / {row.released}</span></p>
              </div>

            </div>
          )}
    </div>
  )
}

export default Technology
