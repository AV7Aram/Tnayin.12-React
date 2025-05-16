import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Users = ({ users }) => {
    return (
        <div className={style.section}>
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

