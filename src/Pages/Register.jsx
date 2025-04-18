import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CookPalLogo from '../../pics/CookPal.svg';
import '../assets/AuthForm.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  }, []);

  const handleRegister = useCallback(
      (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        if (!email || !password || !confirmPassword) {
          setError('Please fill in all fields.');
        } else if (password !== confirmPassword) {
          setError('Passwords do not match.');
        } else {
          setError('');
          alert('Registration successful!');
          navigate('/categories');
        }
      },
      [formData, navigate]
  );

  return (
      <div className="auth-container">
        <div className="auth-wrapper">
          <img src={CookPalLogo} alt="CookPal Logo" className="auth-logo" />
          <h1 className="auth-title">Create a New Account</h1>

          <form onSubmit={handleRegister}>
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
            <div className="auth-input-group">
              <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="auth-input"
                  aria-label="Confirm Password"
              />
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-btn auth-btn-primary">
              Register
            </button>

            <div className="auth-text-container">
              <p className="auth-text">Already have an account?</p>
              <Link to="/" className="auth-text-link">Login</Link>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Register;
