import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Comments = ({ comments }) => {
    return (
        <div className={style.section}>
            <h3>Comments</h3>
            {comments.map(comment => (
                <Card key={comment.id}>
                    <h4>{comment.name} — <span>{comment.email}</span></h4>
                    <p>{comment.body}</p>
                </Card>
            ))}
        </div>
    )
}
