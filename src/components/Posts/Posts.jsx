import { posts } from '../../db/db'
import { Card } from '../Card/Card'
import '../Sections/Section.css'

export const Posts = () => {
    return (
        <div className="section">
            <h3>Posts</h3>
            {posts.map(post => (
                <Card key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </Card>
            ))}
        </div>
    )
}


