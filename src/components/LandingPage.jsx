import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LandingPage = () => {
  const [exams, setExams] = useState([]);
  const { authenticated } = useAuth();

  useEffect(() => {
    fetch('https://mocki.io/v1/d08a663e-cd83-4753-9f6d-837db3c67ffe')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExams(data);
      });
  }, []);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ marginTop: '50px' }}>
          Available Exams's
        </Typography>
      </Container>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {exams.map((exam) => (
          <Grid item key={exam.id} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ maxWidth: '250px', margin: '0 auto', marginBottom: '20px' }}>
              <CardMedia
                component="img"
                style={{ height: '100px', objectFit: 'cover' }}
                image="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="
                alt="Exam"
              />
              <CardContent>
                <Typography variant="h5">{exam.name}</Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  Date: {exam.date}
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '5px' }}>
                  Duration: {exam.duration} minutes
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Link to="/mcq">
                  <Button size="medium" variant="contained" color="primary">
                    Practice
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LandingPage;
