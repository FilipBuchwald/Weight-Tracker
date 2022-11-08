import './App.css';
// import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
// import DatePicker from "react-datepicker";
import { Container } from './Container/styled';
import Form from './Form';

function App() {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <Form />
    </Container>
  );


}

export default App;
