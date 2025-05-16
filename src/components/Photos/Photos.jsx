import { Card } from '../Card/Card'
import style from '../Sections/Section.module.css'

export const Photos = ({ photos }) => {
    return (
        <div className={style.section}>
            <h3>Photos</h3>
            {photos.map(photo => (
                <Card key={photo.id}>
                    <img src={photo.url} alt={photo.title} width="150" />
                    <p>{photo.title}</p>
                </Card>
            ))}
        </div>
    )
}
