import { Button, Input, StyledForm, Title } from "./styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';

const Form = () => {
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  const [startDate, setStartDate] = useState(new Date());

  return (

    <StyledForm onSubmit={onFormSubmit}>
      <Title>Data</Title>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <Title>Waga</Title>
      <Input type="number" min="0" step="0.1"></Input>
      
      <Button> Dodaj Pomiar </Button>
    </StyledForm>

  );
};

//placeholderText="Click to select a date"

export default Form;