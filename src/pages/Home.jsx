import MainMenu from "../components/MainMenu"   

export default function Home() {
    return(
        <>
            <header>
                <div className="logo">Logo</div>
                <MainMenu />
            </header>
            <main>
                <h1>Home Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, quis explicabo, tempore quod modi iste harum molestias mollitia similique veritatis quidem exercitationem a officia rem commodi. Sed saepe ut eum!</p>
            </main>

            <footer>
                <p>copyright 2024</p>
            </footer>
        </>
    )
}