import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = styled.div`
  min-width: ${({ theme }) => theme.sizes.addFormMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.addFormMax};
  padding: ${({ theme }) => theme.space[5]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};

  transform: ${({ shouldShown }) => (shouldShown ? 'scale(1)' : 'scale(2)')};

  transition: ${({ theme }) => theme.transitions.opacity},
    ${({ theme }) => theme.transitions.transform};
`;

export const FormTitle = styled.h2`
  margin: ${({ theme }) => theme.space[0]};
  margin-bottom: ${({ theme }) => theme.space[5]};

  font-size: ${({ theme }) => theme.fontSizes.l};
  text-align: center;
  text-transform: uppercase;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormFieldContainer = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.addFormFieldW};
  height: ${({ theme }) => theme.sizes.addFormFieldH};

  margin-bottom: ${({ theme }) => theme.space[5]};
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[5]};

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  outline: transparent;

  transition: ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.boxShadow};

  &:hover,
  &:focus {
    border: ${({ theme }) => theme.borders.genericHovered};
    box-shadow: ${({ theme }) => theme.shadows.genericHovered};
  }
`;

export const FormFieldLabel = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => `${parseInt(theme.space[5]) + 2}px`};

  color: ${({ theme }) => theme.colors.lightText};

  pointer-events: none;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.font};

  ${FormField}:not(:placeholder-shown) + & {
    padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};

    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.whiteBG};

    transform: translate(-20px, -26px);
  }
`;
