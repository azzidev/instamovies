import styles from "./Banner.module.css";

function Banner({ image_movie }){
    return (
        <div 
            className={styles.banner}
            style={{ backgroundImage: `url('/images/movie-photo-${image_movie}.jpg')` }}
        >
            <div className="background-overlay">
                <span>Dois doidões em Harvard</span>
                <a>Assistir</a>
            </div>
        </div>
    );
}

export default Banner;