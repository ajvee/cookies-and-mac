import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Nav from './Components/Nav'
import Shop from './Components/Shop'
import Gallery from './Components/Gallery'
import NotFound from './Components/NotFound'
import Flavors from './Components/Flavors'
import Home from './Components/Home'



function Container() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/About' element={ <About/> } />
                <Route path='/Nav' element={ <Nav/> } />
                <Route path='/Shop' element={ <Shop/> } />
                <Route path='/Gallery' element={ <Gallery/>} />
                <Route path='/Flavors' element={ <Flavors/>} />
                <Route path='*' element={ <NotFound/>} />
             </Routes>

        </div>
    )
}

export default Container