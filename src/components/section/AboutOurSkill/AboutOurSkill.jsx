import React from 'react'
import './AboutOurSkill.css';
import {homeCards} from './../../../Data/HomeCards.js';
import {CardItem} from './../../container/index';
function AboutOurSkill() {
  return (
    <>
      <div className="row mx-0 py-5">
        {homeCards.map((item)=>
          { return  <div className="col-md-3 " key={item.id}>
                      <CardItem item={item} >
                      </CardItem>
                    </div>
          }
                        )
          } 
      </div> 


    </>
  )
}

export default AboutOurSkill
