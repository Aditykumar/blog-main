import React from 'react'
import FeaturedArticle from './FeaturedArticle'
import LatestArtAll from './LatestArtAll'
import LatestArtCat1 from './LatestArtCat1'
import LatestArtCat2 from './LatestArtCat2'
import LatestArtCat3 from './LatestArtCat3'
import TopArtWebsite from './TopArtWebsite'
function Home() {
    
    return (
        <div>
            <FeaturedArticle/>
            
            <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Latest</div>
          
            <LatestArtAll/>  
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Articles</div>
            <div className='FlexRow'>
                <div className='ArtFlxCol'>
                  <LatestArtCat1/>
                <div >
                    <img className='artVerticleImg' alt='gallary' src="https://imgr.search.brave.com/eTddN7oqGFYp2K7gNbCO9jsVg-xyD4Tf0UnFNfYp-YU/fit/759/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/UEJDZ3ZwOU4wU1Vi/VllKbkJnMklRSGFF/byZwaWQ9QXBp" /> 
                </div>
                </div>
                <div className='marginLeft'>
                    <div className='Advertistement'>Advertistement</div>
                    <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Top</div>
                    <TopArtWebsite/>
                </div>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Technology Article</div>
              
            <LatestArtCat3/>
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Fitness Article</div>
              
              <LatestArtCat2/>
              
            </div>

    </div>
    )
}

export default Home
