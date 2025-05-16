import { albums } from '../../db/db'
import { Card } from '../Card/Card'
import '../Sections/Section.css'

export const Albums = () => {
    return (
        <div className="section">
            <h3>Albums</h3>
            {albums.map(album => (
                <Card key={album.id}>
                    <p>{album.title}</p>
                </Card>
            ))}
        </div>
    )
}

