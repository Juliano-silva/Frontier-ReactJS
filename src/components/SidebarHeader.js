import styles from './SidebarHeader.module.css'
export default function SidebarHe(){
    return(
        <div>
        <div className={styles.Header}>
            <h1>Sidebar e Header</h1>
        </div>
        <div className={styles.Sidebar}>
            <a href="#">Home</a>
            <a href="#">Login</a>
            <a href="#">Adicionar</a>
            <a href="#">Perfil</a>
            <a href="#">@JSA</a>
            </div>
        </div>
    )
}