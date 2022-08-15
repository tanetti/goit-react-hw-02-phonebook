import styled from 'styled-components';
import { Form, Field } from 'formik';
import { BiUser, BiPhone } from 'react-icons/bi';

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: ${({ theme }) => theme.sizes.addFormMin};
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.addFormMax};
  padding: ${({ theme }) => theme.space[5]};

  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accentTransparent};
  border-radius: ${({ theme }) => theme.radii.generic};

  opacity: ${({ shouldShown }) => (shouldShown ? 1 : 0)};

  pointer-events: ${({ shouldShown }) => (shouldShown ? 'initial' : 'none')};

  transform: translate(-50%, -50%)
    scale(${({ shouldShown }) => (shouldShown ? 1 : 2)});

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

export const FormField = styled(Field)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  padding-left: ${({ theme }) => theme.space[6]};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.darkText};
  background-color: ${({ theme }) => theme.colors.lightBG};

  border-width: 0;
  border-bottom: ${({ theme }) => theme.borders.light};

  outline: transparent;

  transition: ${({ theme }) => theme.transitions.borderColor},
    ${({ theme }) => theme.transitions.backgroundColor};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border-bottom: ${({ theme }) => theme.borders.dark};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border-bottom: ${({ theme }) => theme.borders.accent};
  }
`;

export const FormFieldLabel = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[6]};

  font-size: ${({ theme }) => theme.fontSizes.m};

  color: ${({ theme }) => theme.colors.placeholder};

  pointer-events: none;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.font};

  ${FormField}:not(:placeholder-shown) ~ &,
  ${FormField}:focus ~ & {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    transform: translateY(-39px) translateX(-62px);
  }
`;

export const FormFieldContainer = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.addFormFieldW};
  height: ${({ theme }) => theme.sizes.addFormFieldH};

  color: ${({ theme }) => theme.colors.placeholder};

  margin-bottom: ${({ theme }) => theme.space[5]};

  transition: ${({ theme }) => theme.transitions.color};

  &:focus-within,
  &:hover {
    color: ${({ theme }) => theme.colors.darkText};
  }

  ${FormField} {
    border-color: ${({ isError, isFilled, theme }) => {
      if (isError && isFilled) return theme.colors.error;
      if (isFilled) return theme.colors.success;
    }};
  }
`;

export const UserFieldIcon = styled(BiUser)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[4]};

  fill: currentColor;

  transform: translateY(-50%);
`;

export const NumberFieldIcon = styled(BiPhone)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[4]};

  fill: currentColor;

  transform: translateY(-50%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CancelButton = styled.button`
  display: block;

  min-width: ${({ theme }) => theme.sizes.addContactMinW};
  height: ${({ theme }) => theme.sizes.filterFieldH};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  color: ${({ theme }) => theme.colors.mainAccent};
  background-color: ${({ theme }) => theme.colors.whiteBG};

  border: ${({ theme }) => theme.borders.accent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.borderColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.error};

    border: ${({ theme }) => theme.borders.error};
  }
`;

export const AddButton = styled.button`
  display: block;

  min-width: ${({ theme }) => theme.sizes.addContactMinW};
  height: ${({ theme }) => theme.sizes.filterFieldH};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[4]};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.mainAccent};

  border: ${({ theme }) => theme.borders.accent};
  border-radius: ${({ theme }) => theme.radii.roundSide};

  cursor: pointer;

  transition: ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.borderColor};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkBG};

    border: ${({ theme }) => theme.borders.accentTransparent};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBG};

      border: ${({ theme }) => theme.borders.accentTransparent};
    }
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.success};

    border: ${({ theme }) => theme.borders.success};
  }
`;

export const ErrorMessageField = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.addFormFieldH};
  left: 0;

  width: 100%;
  padding: ${({ theme }) => theme.space[1]};

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: right;

  color: ${({ theme }) => theme.colors.error};

  opacity: ${({ isError, isFilled }) => (isError && isFilled ? 1 : 0)};

  transition: ${({ theme }) => theme.transitions.opacity};
`;
