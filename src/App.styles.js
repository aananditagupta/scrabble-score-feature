import styled, { css } from "styled-components";

const BaseInputButton = css`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
`;

export const AppContainer = styled.div`
  text-align: center;
  font-family: "Arial", sans-serif;
  background-color: #f5f5dc;
  padding: 20px;
  min-height: 100vh;
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  ${BaseInputButton}
  margin-right: 10px;
  border: 2px solid #333;
`;

export const Button = styled.button`
  ${BaseInputButton}
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: none;

  &:hover {
    background-color: #555;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

export const Table = styled.table`
  width: 60%;
  margin: 20px auto;
  border-collapse: collapse;
  background-color: #f0e68c;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
  background-color: #d8bfd8;
  color: #333;
  padding: 16px;
  text-align: center;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 16px;
  text-align: center;
  background-color: ${(props) => (props.isOddRow ? "#fff" : "#fafad2")};
  position: relative;
  color: #333;
  box-shadow: inset 0 -3px 0 #d8bfd8;

  &:after {
    content: attr(data-value);
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    color: #333;
  }
`;

export const WordTile = styled.span`
  align-content: center;
  display: inline-block;
  margin: 5px;
  width: 50px;
  height: 50px;
  line-height: 25px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  border: 2px solid #333;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

  &::after {
    content: attr(data-value);
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 12px;
    color: #333;
  }
`;
