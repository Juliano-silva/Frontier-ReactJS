import React, { Component } from 'react'
import styles from './Projects.module.css'
class Log extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault(); 
    const username = e.target.elements.username.value;
    localStorage.setItem('@welcome-app/username', username);
    const bio = e.target.elements.bio.value;
    localStorage.setItem('@welcome-app/bio', bio);
    const icone = e.target.elements.icone.value;
    localStorage.setItem('@welcome-app/icone', icone);
    window.location.reload();
  }

  handleLogout = () => {
    localStorage.removeItem('@welcome-app/username');
    localStorage.removeItem('@welcome-app/icone');
    localStorage.removeItem('@welcome-app/bio');
    window.location.reload();
  }

  render() {
    const username = localStorage.getItem('@welcome-app/username');
    const icone = localStorage.getItem('@welcome-app/icone');
    const bio = localStorage.getItem('@welcome-app/bio');
    if (username !== null) {
      return (
        <div className={styles.TelaLog}>
          <h1>Olá <span>{username}</span></h1>
          <img src={icone}/>
          <p>{bio}</p>
          <button onClick={this.handleLogout}>Sair</button>
          <br />
        </div>
      );
    }
    return (
      <div>
      <form onSubmit={this.handleSubmit} className={styles.Login}>
        <h1>Login</h1>
        <label>Nome do Usuário</label>
        <input type="text" name="username" required /> 
        <label>Icone</label>
        <input type="text" name="icone" required />
        <label>Bio</label>
        <input type="text" name="bio" required />
        <button type="submit">Entrar</button>
      </form>
      <br />
      </div>
    );
  }
}
export default Log;