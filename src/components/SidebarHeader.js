import React,{Component} from 'react';
import styles from './SidebarHeader.module.css'
import { Link } from 'react-router-dom'
// É só o getItem para importar 
class Log extends Component {
    render() {
        const username = localStorage.getItem('@welcome-app/username');
        const icone = localStorage.getItem('@welcome-app/icone');
        if (username !== null) {
          return (
            <div className={styles.SideICone}>
              <img src={icone} />
              <h1>{username}</h1>
            </div>
          );
        }
    }
  }
export default function SidebarHe(){
    return(
        <div>
        <div className={styles.Header}>
            <h1>Frontier</h1>
        </div>
        <div className={styles.Sidebar}>
        <Log/>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Comentário">Comentário</Link>
            <a href="https://github.com/Juliano-silva" target="_blank">@JSA</a>
            </div>
        </div>
    )
}