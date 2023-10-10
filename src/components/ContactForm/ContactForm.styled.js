import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 10px;
  margin: 30px 0;
`;

export const StyledLabelName = styled.span`
  display: inline-block;
  margin-right: 20px;
`;

export const StyledField = styled(Field)``;
