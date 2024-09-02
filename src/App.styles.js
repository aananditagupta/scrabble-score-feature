import styled from "styled-components";

// Styled component for the main app container
export const AppContainer = styled.div`
  text-align: center;
`;

// Styled component for the form
export const Form = styled.form`
  margin-bottom: 20px;
`;

// Styled component for text input fields
export const Input = styled.input.attrs({ type: "text" })`
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
`;

// Styled component for buttons
export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
`;

// Styled component for error messages
export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

// Styled component for the table
export const Table = styled.table`
  width: 50%;
  margin: 0 auto;
  border-collapse: collapse;
`;

// Styled component for table headers and cells
export const TableHeader = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

// Styled component for table cells
export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

// Styled component for table rows with hover effect
export const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;
