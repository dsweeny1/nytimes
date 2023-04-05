import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return(
        <nav>
            <NavLink to='home'>
                Home
            </NavLink>
            <NavLink to='business'>
                Business
            </NavLink>
            <NavLink to='fashion'>
                Fashion
            </NavLink>
            <NavLink to='food'>
                Food
            </NavLink>
            <NavLink to='health'>
                Health
            </NavLink>
            <NavLink to='arts'>
                Arts
            </NavLink>
            <NavLink to='movies'>
                Movies
            </NavLink>
            <NavLink to='opinion'>
                Opinion
            </NavLink>
            <NavLink to='politics'>
                Politics
            </NavLink>
            <NavLink to='sports'>
                Sports
            </NavLink>
            <NavLink to='sundady-review'>
                Sunday Review
            </NavLink>
            <NavLink to='technology'>
                Technology
            </NavLink>
            <NavLink to='theater'>
                Theater
            </NavLink>
            <NavLink to='science'>
                Science
            </NavLink>
            <NavLink to='us'>
                US
            </NavLink>
            <NavLink to='world'>
                World
            </NavLink>
        </nav>
    )
}

export default NavBar