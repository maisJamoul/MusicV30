
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home,About,Page1,Login,Contact } from './components/pages/index';
import {Songs} from './components/pages/index'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Bar,Song} from './components/container/index';

import {Footer} from './components/section/index';
function App() {

  return (
  <div className="App mx-0"> 

      <BrowserRouter>
        <Bar/>
          <Routes>
            <Route  element={<Home/>}    >

              <Route path='/' element={<Page1/>}   />
              <Route path='/about' element={<About />}    />
              <Route path='/contact' element={<Contact />}    />
              <Route  path='/songs/:id' element={<Song />} />
               <Route  path='/songs' element={<Songs />} />
            </Route>
            <Route path='/login' element={<Login />}    />

          </Routes>
          <Footer />
      </BrowserRouter>
    
      {/* <Songs /> */}

  </div> 
  ); 
}

export default App;
