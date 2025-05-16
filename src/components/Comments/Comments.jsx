import { comments } from '../../db/db'
import { Card } from '../Card/Card'
import '../Sections/Section.css'

export const Comments = () => {
    return (
        <div className="section">
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
