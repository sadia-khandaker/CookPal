import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CookPalLogo from '../../pics/CookPal.svg';
import '../assets/AuthForm.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  }, []);

  const handleLogin = useCallback(
      (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
          setError('Please fill in all fields.');
        } else {
          setError('');
          alert('Login successful!');
          navigate('/categories');
        }
      },
      [formData, navigate]
  );

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
      <div className="auth-container">
        <div className="auth-wrapper">
          <img src={CookPalLogo} alt="CookPal Logo" className="auth-logo" />
          <h1 className="auth-title">Login</h1>
          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="auth-input-group">
              <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="auth-input"
                  aria-label="Email address"
              />
            </div>
            <div className="auth-input-group">
              <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="auth-input"
                  aria-label="Password"
              />
            </div>

            <button type="submit" className="auth-btn auth-btn-primary">
              Login
            </button>

            <div className="auth-separator">OR</div>
            <p className="auth-text">Don't have an account?</p>
            <button
                type="button"
                className="auth-btn auth-btn-secondary"
                onClick={handleRegisterRedirect}
            >
              Register
            </button>
          </form>
        </div>
      </div>
  );
};

export default Login;