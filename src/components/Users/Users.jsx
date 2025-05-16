import { users } from '../../db/db'
import { Card } from '../Card/Card'
import '../Sections/Section.css'

export const Users = () => {
    return (
        <div className="section">
            <h3>Users</h3>
            {users.map(user => (
                <Card key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </Card>
            ))}
        </div>
    )
}

