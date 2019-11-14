import styled from 'styled-components';

import colors from '../../theme/colors';

export const FormStyled = styled.form`
  padding: 0 5px 16px;
  border-bottom: solid 1px ${colors.primary[700]};
  margin-bottom: 20px;
`;

export const SearchStyled = styled.label`
  color: ${colors.primary[900]};
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

export const InputStyled = styled.input`
  background-color: transparent;
  border: none;
  color: ${colors.primary[300]};
  display: block;
  font-size: 48px;
  font-weight: bold;
  height: 50px;
  margin-top: 10px;
  width: 100%;
`;
