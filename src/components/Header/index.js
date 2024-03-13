import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <span>InstaFlix</span>
            <nav>
                <a>Início</a>
                <a>Buscar</a>
            </nav>
        </header>
    );
}

export default Header;