import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Albums = ({ albums }) => {
    return (
        <div className={style.section}>
            <h3>Albums</h3>
            {albums.map(album => (
                <Card key={album.id}>
                    <p>{album.title}</p>
                </Card>
            ))}
        </div>
    )
}

