import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Input, StyledForm, Title, List, Item, Content, Wrapper } from "./styled";
import { Container } from '../Container/styled';
import { Header } from '../Header';

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    saveResult(startDate, weight);
    setWeight("");
  };

  const saveResult = (startDate, weight) => {
    setResult(result => [
      ...result,
      {
        date: startDate,
        weight: weight,
        id: uuidv4(),
      }
    ])
  };

  const onInputChange = ({ target }) => setWeight(target.value);

  return (
    <Container>
      <Header />
      <StyledForm
        onSubmit={onFormSubmit}
      >
        <Wrapper>
          <Title>data</Title>
          <DatePicker
            className="data"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Title>waga</Title>
          <Input
            type="number"
            min="0"
            step="0.1"
            value={weight}
            onChange={onInputChange}
            placeholder="Wpisz swoją aktualną wagę"
          />
        </Wrapper>
        <Button> Dodaj Pomiar </Button>
        <List>
          {result.map(({ id, date, weight }) => (
            <Item key={id}>
              <Content>
                Twoja waga w dniu {date.toLocaleDateString()} wyniosła {weight} kg
              </Content>
            </Item>
          ))}
        </List>
      </StyledForm>
    </Container>
  );
};

export default Form;
