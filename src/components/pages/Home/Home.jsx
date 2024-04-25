

import {Subscribe,Footer} from '../../section/index';
import './Home.css';
import { Outlet } from 'react-router-dom';

const Home=()=>{

  return (
    <>
      
      
      <Outlet />
    
      {/* <Explore /> */}
      <Subscribe />
   

    </>
  )
}

export default Home
