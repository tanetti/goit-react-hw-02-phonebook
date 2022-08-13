import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';

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

export const FormField = styled(Field)`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  padding-left: ${({ theme }) => theme.space[5]};

  color: ${({ theme }) => theme.colors.darkText};

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

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

export const FormFieldContainer = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes.addFormFieldW};
  height: ${({ theme }) => theme.sizes.addFormFieldH};

  color: ${({ isError, isFilled, theme }) => {
    if (isError) return theme.colors.errorText;
    if (isFilled) return theme.colors.addButtonBG;
  }};

  margin-bottom: ${({ theme }) => theme.space[5]};

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.transform};

  &:focus-within {
    color: ${({ theme }) => theme.colors.darkText};

    transform: scale(1.05);
  }

  ${FormField} {
    border-color: ${({ isError, isFilled, theme }) => {
      if (isError) return theme.colors.errorText;
      if (isFilled) return theme.colors.addButtonBG;
    }};
  }
`;

export const FormFieldLabel = styled.label`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => `${parseInt(theme.space[5]) + 2}px`};

  pointer-events: none;

  transform: translateY(-50%);

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.transform},
    ${({ theme }) => theme.transitions.font};

  ${FormField}:not(:placeholder-shown) ~ & {
    padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[2]};

    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};

    background-color: ${({ theme }) => theme.colors.whiteBG};

    transform: translate(-20px, -28px);
  }

  ${FormField}:not(:placeholder-shown):hover ~ & {
    color: ${({ theme }) => theme.colors.darkText};
  }

  ${FormField}:placeholder-shown:hover ~ & {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const UserFieldIcon = styled(FaUserAlt)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[3]};

  fill: currentColor;

  transform: translateY(-50%);
`;

export const NumberFieldIcon = styled(FaPhoneAlt)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.space[3]};

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

  padding: ${({ theme }) => theme.space[3]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.cancelButton};
  background-color: ${({ theme }) => theme.colors.whiteBG};

  cursor: pointer;

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  transition: ${({ theme }) => theme.transitions.color},
    ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.boxShadow},
    ${({ theme }) => theme.transitions.transform};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.cancelButtonHovered};
    background-color: ${({ theme }) => theme.colors.lightBG};

    box-shadow: ${({ theme }) => theme.shadows.genericHovered};

    transform: scale(1.1);
  }
`;

export const AddButton = styled.button`
  display: block;

  padding: ${({ theme }) => theme.space[3]};

  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  color: ${({ theme }) => theme.colors.whiteText};
  background-color: ${({ theme }) => theme.colors.addButtonBG};

  cursor: pointer;

  border: ${({ theme }) => theme.borders.generic};
  border-radius: ${({ theme }) => theme.radii.generic};

  box-shadow: ${({ theme }) => theme.shadows.generic};

  transition: ${({ theme }) => theme.transitions.backgroundColor},
    ${({ theme }) => theme.transitions.boxShadow},
    ${({ theme }) => theme.transitions.transform};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkBG};

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBG};

      box-shadow: ${({ theme }) => theme.shadows.generic};

      transform: scale(1);
    }
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.addButtonHoveredBG};

    box-shadow: ${({ theme }) => theme.shadows.genericHovered};

    transform: scale(1.1);
  }
`;

export const ErrorMessageField = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.sizes.addFormFieldH};

  width: 100%;
  padding: ${({ theme }) => theme.space[1]};

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: right;

  color: ${({ theme }) => theme.colors.errorText};

  opacity: ${({ isError }) => (isError ? 1 : 0)};

  transition: ${({ theme }) => theme.transitions.opacity};
`;
