import React from 'react';
import { CardItem } from '../../container/index.js';
import {HomeHero,HomeSec2,HomeAlbum} from '../../section/index';
import {homeCards} from './../../../Data/HomeCards.js';

import './Page1.css';
import HomeLatest from '../../section/HomeLatest/HomeLatest.jsx';
const Page1=()=> {
 
  return (
    <div>
      <HomeHero />
      <div className="row mx-0 my-2 py-5">

        {homeCards.map((item)=>
          { return  <div className="col-md-3 p-1" key={item.id}>
                      <CardItem item={item} >
                      </CardItem>
                    </div>
          }
                        )
          } 

      </div> 
      <HomeSec2 />
      <HomeLatest />
      <HomeAlbum />
      
    </div> 
  )
}

export default Page1
