import React from 'react'
import FeaturedArticle from './FeaturedArticle'
import LatestArtAll from './LatestArtAll'
import LatestArtCat1 from './LatestArtCat1'
import LatestArtCat2 from './LatestArtCat2'
import LatestArtCat3 from './LatestArtCat3'
import TopArtWebsite from './TopArtWebsite'
function Home() {
    
    return (
        <div className='FlexRow'>
            <FeaturedArticle/>
            
            <div className='homeLatestTxt'><div className='TxtBorder'>The </div> Latest</div>
          
            <LatestArtAll/>  
            <div className='homeLatestTxt'><div className='articleHtext'>Latest </div>  Articles</div>
            <div className='FlexRow'>
                <div className='ArtFlxCol'>
                  <LatestArtCat1/>
                <div >
                    <img className='artVerticleImg' alt='gallary' src="https://i0.wp.com/buildesign.co.ke/wp-content/uploads/2018/01/W3A5833-Copy.jpg" /> 
                </div>
                </div>
                <div className='  marginLeft'>
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
