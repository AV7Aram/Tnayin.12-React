import { todos } from '../../db/db'
import { Card } from '../Card/Card'
import '../Sections/Section.css'

export const Todos = () => {
    return (
        <div className="section">
            <h3>Todos</h3>
            {todos.map(todo => (
                <Card key={todo.id}>
                    <p>{todo.title}</p>
                    <p>Status: {todo.completed ? '✅ Completed' : '❌ Not completed'}</p>
                </Card>
            ))}
        </div>
    )
}

