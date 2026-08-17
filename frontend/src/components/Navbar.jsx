import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div className="flex justify-center p-2">
            <div className="flex items-center p-4 bg-gray-800 text-white justify-between rounded-2xl w-260 shadow-pink-200 shadow-lg hover:shadow-pink-400">
                <h1 className="text-emerald-200">Navbar</h1>

                <div className="flex gap-5">
                    <Link to="/about">About</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar;