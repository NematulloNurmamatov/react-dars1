import { Fragment } from "react";
import Avatar from "../images/Avatar.png";
import "../style/navbar.css"

function Navbar() {

    return (
        <Fragment>
            <nav>
                <div className="logo">
                    <h1 className="news">News</h1>
                    <h1>Portal</h1>
                </div>
                <ul>
                    <li>News</li>
                    <li>Blog</li>
                    <li><img src={Avatar} alt="" /></li>
                </ul>
            </nav>
            <hr className="hr" />
            <div className="sahifa">
                <p>Home</p>
                <p>Breaking news</p>
                <p>Regular news</p>
                <p>International news</p>
                <p>Sports</p>
                <p>Entertainment</p>
                <p>Culture</p>
                <p>Arts</p>
                <p>All news</p>
            </div>
            <div className="category">
                <h2>4 items found for category Entertainment</h2>
            </div>
                <div className="sort">
                    <div className="left">
                        <p>Sort By View:</p>
                        <select name="" id="">
                            <option value="Default">Default</option>
                            <option value="Default">Default</option>
                            <option value="Default">Default Default</option>
                        </select>
                    </div>
                    <div className="right">
                        <button>Today’s Pick</button>
                        <button>Trending</button>
                    </div>
                </div>
        </Fragment>
    )
}

export default Navbar;