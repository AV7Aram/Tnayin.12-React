import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>404</h1>
            <p>Page not found.</p>
            <Link to="/" className="back-btn">Go Home</Link>
        </div>
    )
}

export default NotFound
