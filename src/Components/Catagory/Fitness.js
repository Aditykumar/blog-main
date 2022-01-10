import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CatContext } from './CatContext'
import TopArtWebsite from '../TopArtWebsite'

function Fitness() {
  const content = []
  const [data] = useContext(CatContext)


  data.forEach((cat) => {
    if (cat.Category === "fitness") {
      console.log(cat);
      content.push({
        id: cat.Id,
        name: cat.Name,
        img: cat.Img,
        detail: cat.Details,
        about: cat.About,
        date: cat.Date,
        category: cat.Category
      });
    }
  });




  return (
    <div className='FlexRow1'>

      <div >

        {content.map((row) =>
          <div key={row.id} className='FlexRow' >
            <div style={{ cursor: "pointer" }}> <Link to={`/artReading/${row.id}`}> <img className='cardImgBox' src={row.img} alt="" /></Link> </div>
            <div>
              <div className='cardTitle'>{row.name}</div>
              <div className='cardDec cardContain'>
                <div>{row.detail}</div>

              </div>
              <p className='cardDate'>{row.category}<span className='cardDec'> / {row.date}</span></p>
            </div>

          </div>
        )}
      </div>
      <div>
        <div className='Advertistement'>Advertistement</div>
        <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
        <TopArtWebsite />
      </div>
    </div>
  )
}

export default Fitness
