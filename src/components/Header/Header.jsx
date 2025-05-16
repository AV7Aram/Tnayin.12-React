import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/posts', label: 'Posts' },
        { path: '/comments', label: 'Comments' },
        { path: '/albums', label: 'Albums' },
        { path: '/photos', label: 'Photos' },
        { path: '/todos', label: 'Todos' },
        { path: '/users', label: 'Users' }
    ]

    return (
        <header className="header">
            {navItems.map(({ path, label }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                    {label}
                </NavLink>
            ))}
        </header>
    )
}

export default Header
