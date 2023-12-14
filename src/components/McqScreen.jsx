import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSelectedOption, setCurrentQuestion, setPendingAction } from '../redux/actions';
import {
  Typography,
  Button,
  Container,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
  LinearProgress,
} from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const MCQScreen = ({
  currentQuestion,
  selectedOption,
  setSelectedOption,
  setCurrentQuestion,
  setPendingAction,
}) => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const { authenticated } = useAuth();

  const mcqData = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Iron', 'Silver'],
      correctAnswer: 'Oxygen',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'South Korea', 'Japan', 'Thailand'],
      correctAnswer: 'Japan',
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
      correctAnswer: 'Canberra',
    },
    {
      question: 'In what year did the Titanic sink?',
      options: ['1905', '1912', '1920', '1931'],
      correctAnswer: '1912',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the currency of Brazil?',
      options: ['Peso', 'Real', 'Rupee', 'Dollar'],
      correctAnswer: 'Real',
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Won', 'Dollar', 'Euro'],
      correctAnswer: 'Yen',
    },
    {
      question: 'Who is the author of "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'George Orwell', 'F. Scott Fitzgerald'],
      correctAnswer: 'Harper Lee',
    },
    // Add more questions as needed
  ];

  const isValidQuestion = currentQuestion >= 0 && currentQuestion < mcqData.length;
  const isLastQuestion = currentQuestion === mcqData.length - 1;

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null && isValidQuestion) {
      const isCorrect = selectedOption === mcqData[currentQuestion].correctAnswer;

      if (isCorrect) {
        setCorrectCount((prevCount) => prevCount + 1);
      }

      if (isLastQuestion) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      }
    } else {
      alert('Select One Option');
    }
  };

  const summary = (
    <div style={{ textAlign: 'center', position: 'relative', marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Quiz Completed!
      </Typography>
      <CircularProgress
        variant="determinate"
        value={(correctCount / mcqData.length) * 100}
        size={80}
        thickness={4}
        style={{ marginTop: '16px', color: '#2196F3' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '66%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'black',
          fontWeight: 'bold',
        }}
      >
        {`${correctCount}/${mcqData.length}`}
      </div>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '16px' }}
        >
          Return to Home
        </Button>
      </Link>
    </div>
  );

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      {!quizCompleted ? (
        <>
          <>
            <Typography variant="h5" gutterBottom>
              {isValidQuestion ? mcqData[currentQuestion].question : ''}
            </Typography>
            <RadioGroup
              value={selectedOption}
              onChange={(e) => handleOptionSelect(e.target.value)}
            >
              {isValidQuestion &&
                mcqData[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
            </RadioGroup>
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNextQuestion}
                >
                  {isLastQuestion ? 'Submit' : 'Next Question'}
                </Button>
              </Grid>
            </Grid>
            <LinearProgress
              variant="determinate"
              value={(currentQuestion / mcqData.length) * 100}
              style={{ marginTop: '16px' }}
            />
          </>
        </>
      ) : (
        summary
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentQuestion: state.mcq.currentQuestion,
  selectedOption: state.mcq.selectedOption,
});

const mapDispatchToProps = {
  setCurrentQuestion,
  setSelectedOption,
  setPendingAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MCQScreen);
