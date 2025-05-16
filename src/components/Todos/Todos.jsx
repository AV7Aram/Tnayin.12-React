import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Todos = ({ todos }) => {
    return (
        <div className={style.section}>
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

