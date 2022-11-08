import { Button, Input, StyledForm, Title } from "./styled";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';

const Form = () => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(` Twoja waga w dniu ${startDate.toLocaleDateString()} wynosi ${weight} kg`);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [weight, setWeight] = useState("");

  const onInputChange = ({target}) => setWeight(target.value);

  return (

    <StyledForm onSubmit={onFormSubmit}>
      <Title>Data</Title>
      <DatePicker 
      selected={startDate} 
      onChange={(date) => setStartDate(date)} 
      />
      <Title>Waga</Title>
      <Input
        type="number"
        min="0"
        step="0.1"
        value={weight}
        onChange = {onInputChange}
        placeholder="Wpisz swoją aktualną wagę"
      ></Input>

      <Button> Dodaj Pomiar </Button>
    </StyledForm>

  );
};



export default Form;