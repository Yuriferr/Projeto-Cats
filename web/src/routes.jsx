import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cats from './pages/Cats'
import Erro from './pages/Erro'

import Header from './components/Header'

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cat/:id' element={<Cats/>}/>

                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}