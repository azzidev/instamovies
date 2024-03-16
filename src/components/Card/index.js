import styles from './Card.module.css';

function Card({ id, name }) {
    return (
        <section className={styles.card}>
            <a>
                <img src={`/images/movie-photo-${id}.jpg`} alt={name} />
                <div className='name-box'>
                    <span>{name}</span>
                </div>
            </a>
        </section>
    );
}

export default Card;