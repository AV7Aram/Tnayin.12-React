import { posts } from '../../db/db'
import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Posts = () => {
    return (
        <div className={style.section}>
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


