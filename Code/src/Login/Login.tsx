import { useState } from "react";

interface LoginProps {
  onLogin: () => void;
}

/**
 * The Login component is a form that takes a username and password as input.
 * When the form is submitted, it checks if the username and password are correct.
 * If they are, it calls the onLogin prop function.
 * If they are not, it displays an error message.
 * 
 * @param LoginProps 
 * @returns A login page.
 */
function Login({ onLogin }: LoginProps) {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  /**
   * Checks if the username and password are correct and calls onLogin if they are.
   * @param e The form submission event.
   */
  const validateLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (username === "Thaakir" && password === "1234") {
      setError("");
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h2>Welcome to...</h2>
        <h1>CodeX</h1>
        <form>
          <input 
          className="username-input" 
          type="username" 
          placeholder="Username" 
          value = {username}
          onChange={(e) => setUsername(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        {error && <p className="error-message">{error}</p>}
        <button className="login-button" onClick={validateLogin}>"Hello World"</button>
      </div>
      
    </div>
  );
}

export default Login;