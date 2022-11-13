import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center; 
`;

export const Input = styled.input`
  width: 180px;
  height: 34px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 10px;
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: #d9ba32;
`;

export const Title = styled.h3`
  margin: 0px 10px;
  font-weight: 700;
  font-size: 12px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const Item = styled.li`
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.span`
  font-size: 14px;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-bottom: 1px solid #ddd;
`;
