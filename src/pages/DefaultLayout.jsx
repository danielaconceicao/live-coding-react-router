import {Outlet} from 'react-router-dom'
import MainMenu from '../components/MainMenu'

export default function DefaultLayout(){
    return(
        <>
            <header>
                <div className="logo">Logo</div>
                <MainMenu />
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>copyright 2024</p>
            </footer>
        </>
    )
}