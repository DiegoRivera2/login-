import React, { useState } from 'react';


function App() {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [users, setUsers] = useState([
  { email: 'user1@example.com', password: 'password1' },
  { email: 'user2@example.com', password: 'password2' },
 ]);

 const handleSignUp = (e) => {
  e.preventDefault();
  const newUser = { email, password };
  setUsers([...users, newUser]);
  console.log('Nuevo usuario:', newUser);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    validateCredentials();
    console.log('Email:', email);
    console.log('Password:', password);
 };

 const validateCredentials = () => {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
     alert('Inicio de sesión exitoso');
  } else {
     alert('Correo electrónico o contraseña incorrecta');
  }
 };


 return (
    <div className="App">
      <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit}>
  <label>
      Correo electrónico:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label>
      Contraseña:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <button type="submit">Iniciar sesión</button>
  </form>
  <br />
  <form onSubmit={handleSignUp}>
  <label>
      Correo electrónico:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <br />
  <label>
      Contraseña:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
  <br />
  <button type="submit">Registrarse</button>
  </form>
  </div>
 );
}

export default App;