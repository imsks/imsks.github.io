import styled from 'styled-components';
import { colorBlack, colorWhite, colorDanger, colorPrimary, colorShadow } from '../constants';
import { device } from '../base/mediaQuery';

// For Buttons
export const StyledButton = styled.button`
  background-color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'primary':
        return `${colorPrimary}`;

      case 'danger':
        return `${colorDanger}`;
      case 'light':
        return `${colorShadow}`;

      default:
        break;
    }
  }};

  color: ${(props) => {
    const param = props.type;
    if (param === 'primary' || param === 'success' || param === 'danger') {
      return `${colorWhite}`;
    }

    return `${colorBlack}`;
  }};

  padding: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.5rem 3rem';

      case 'medium':
        return '1.2rem 2rem';

      case 'small':
        return '1rem 1.5rem';

      default:
        break;
    }
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  border-radius: ${(props) => {
    return props.borderRadius;
  }};

  font-size: ${(props) => {
    switch (props.size) {
      case 'large':
        return '1.8rem';

      case 'medium':
        return '1.6rem';

      case 'small':
        return '1.4rem';

      default:
        break;
    }
  }};

  width: ${(props) => {
    return props.width;
  }};

  z-index: ${(props) => {
    return props.zIndex;
  }};

  position: ${(props) => {
    return props.position;
  }};

  height: ${(props) => {
    return props.height;
  }};

  top: ${(props) => {
    return props.top;
  }};

  left: ${(props) => {
    return props.left;
  }};

  right: ${(props) => {
    return props.right;
  }};

  bottom: ${(props) => {
    return props.bottom;
  }};

  text-decoration: none;
  box-shadow: ${({ theme }) => theme.buttonShadow};
  transition: all 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 5px;

  :hover {
    opacity: 0.9;
    transform: scale(0.95);
  }

  @media ${device.phone} {
    font-size: 1.6em;
  }

  @media ${device.phone} {
    font-size: 1.4em;
  }
`;

export const StyledButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 0;
`;
