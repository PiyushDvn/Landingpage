import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
                <Link to="/">Home </Link>
                <Link to="/Layouts">Layouts </Link>
                <Link to="/Elements">Elements</Link>
                <Link to="/Signup">Sign Up </Link>
        </nav>
    );
}


export default Navbar;