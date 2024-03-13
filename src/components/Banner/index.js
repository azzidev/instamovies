import styles from "./Banner.module.css";

function Banner(){
    return (
        <div className={styles.banner}>
            <div className="background-overlay">
                <span>Dois doidões em Harvard</span>
                <a>Assistir</a>
            </div>
        </div>
    );
}

export default Banner;