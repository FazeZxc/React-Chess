import viteLogo from '/vite.svg'
import './App.css'
import { Board } from './components/Board'
import { NormalChess } from './pages/NormalChess'
import { Timer } from './components/Timer'
import { ResultPopUp } from './components/ResultPopUp'
import { PopUpStartWithWhichPiece } from './components/PopUpStartWithWhichPiece'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

function App() {
    return (
        <div className='bg-slate-600'>
            <BrowserRouter>
                <Routes>
                    <Route loader={<Loader />} path='/' element={<PopUpStartWithWhichPiece />} />
                    <Route path='/play' element={<NormalChess />} />
                    <Route path='/result' element={<ResultPopUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
