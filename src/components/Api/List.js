import React from "react";
import {FaEdit,FaTrash} from 'react-icons/fa'
import styles from '../Projects/Projects.module.css'
const List = ({items}) => {
    const icone = localStorage.getItem('@welcome-app/icone');
    return(
        <div className="container">
            {items.map((item) => {
                const {id,title,image} = item;
                return(
                    <ul key={id} >
                        <li className={styles.ApiBox}>
                            {/* Aqui fica o Titúlo */}
                            <img className={styles.icone} src={icone} alt="" />
                            <h1>{title}</h1>
                            <img className={styles.ImageApiB} src={image} />
                        </li>
                        <br />
                    </ul>
                )
            })}
        </div>
    )
}

export default List