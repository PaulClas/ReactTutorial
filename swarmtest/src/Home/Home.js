import '../App.css';
//import {Header} from "../Components/Common/Header.js"
import {Footer} from "../Components/Footer/Footer.js"
import {Navbar} from "../Components/Navbar/Navbar.js"
import {Main} from "../Components/Main/Main.js"

export function Home() {
    document.title="Swarm Robotics";
    return (
        <div>
            <Navbar currentActive="home"/>
            <main>
                <article>
                    <Main/>
                </article>
            </main>
            <Footer/>
        </div>
    );

}