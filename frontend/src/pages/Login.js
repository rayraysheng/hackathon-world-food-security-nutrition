import React from 'react';

function Login() {
  const handleLogin = (type) => {
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => handleLogin('research')}>Economic Researcher</button>
      <button onClick={() => handleLogin('gov')}>Government Representative</button>
    </div>
  );
}

export default Login;
