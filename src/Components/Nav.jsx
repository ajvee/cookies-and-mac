import { Link } from 'react-router-dom'

function Nav () {
    return (
        <header>
            <h3>Testing Main Page</h3>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/About'>
                    <li>About</li>
                </Link>

                <Link to='/Gallery'>
                    <li>Gallery</li>
                </Link>

                <Link to='/Flavors'>
                    <li>Flavors</li>
                </Link>

                <Link to='/Shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </header>
    )

}

export default Nav