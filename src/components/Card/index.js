import styles from './Card.module.css';

function Card({ id }) {
    return (
        <section className={styles.card}>
            <a>
                <img src={`/images/movie-photo-${id}.jpg`} alt="Dois doidões em Hardvard" />
            </a>
        </section>
    );
}

export default Card;