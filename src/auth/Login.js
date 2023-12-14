import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulated authentication logic
    if (username === 'demo' && password === 'password') {
      setError('');
      login();
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
    >
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
        {error && (
          <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
            {error}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
