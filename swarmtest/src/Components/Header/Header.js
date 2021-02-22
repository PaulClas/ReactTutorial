import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import './Header.css'
export function Header(prop) {
    const currentActive = prop.currentActive;
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img alt="logo" src={logo} title="Minimal Swarm Drone Navigation System" />
                    </Link>
                    <h1>Hello</h1>
                </div>
                <nav>
                    <ul>
                        <li className={currentActive === "Tutorial" ? "active" : ""}><Link to="/tutorial">Tutorial</Link></li>
                        <li className={currentActive === "User manual" ? "active" : ""}><Link to="/user-manual">User manual</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}