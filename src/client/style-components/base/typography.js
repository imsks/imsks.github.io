import styled from 'styled-components';
import { device } from './mediaQuery';
import { colorPrimary, colorWhite, fontGlobal, colorGrey } from '../constants';

export const MainHeading = styled.h1`
  display: block;
  text-decoration: none;
  transition: 0.3s all;
  overflow: hidden;

  font-family: ${fontGlobal} !important;

  margin: ${(props) => {
    return props.margin;
  }};

  height: ${(props) => {
    return props.height;
  }};

  color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'main':
        return `${colorPrimary}`;

      case 'sub':
        return `${colorWhite}`;

      default:
        return `${colorGrey}`;
    }
  }};

  font-size: 4rem;

  font-weight: 600;

  text-align: ${(props) => {
    return props.align;
  }};

  @media ${device.tabPort} {
    font-size: 3.5rem;
  }

  @media ${device.phone} {
    font-size: 2.5rem;
  }
`;

export const MainSubheading = styled.h2`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'main':
        return `${colorPrimary}`;

      case 'sub':
        return `${colorWhite}`;

      default:
        return `${colorGrey}`;
    }
  }};

  font-size: 2.6rem;

  font-weight: 500;

  @media ${device.tabPort} {
    font-size: 2.2rem;
  }
`;

export const SecondaryHeading = styled.h3`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'main':
        return `${colorPrimary}`;

      case 'sub':
        return `${colorWhite}`;

      default:
        return `${colorGrey}`;
    }
  }};

  font-size: 2.4rem;

  font-weight: 500;

  @media ${device.tabPort} {
    font-size: 2rem;
  }

  @media ${device.phone} {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const SecondarySubheading = styled.h4`
  display: block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  width: ${(props) => {
    return props.width;
  }};

  margin: ${(props) => {
    return props.margin;
  }};

  color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'main':
        return `${colorPrimary}`;

      case 'sub':
        return `${colorWhite}`;

      default:
        return `${colorGrey}`;
    }
  }};

  font-size: 2rem;

  font-weight: 400;

  @media ${device.tabPort} {
    font-size: 1.8rem;
  }
`;

export const Paragraph = styled.p`
  display: inline-block;
  transition: 0.3s all;
  font-family: ${fontGlobal} !important;

  color: ${(props) => {
    const param = props.type;

    switch (param) {
      case 'main':
        return `${colorPrimary}`;

      case 'sub':
        return `${colorWhite}`;

      default:
        return `${colorGrey}`;
    }
  }};

  font-size: 1.6rem;
  font-weight: 400;

  @media ${device.tabLand} {
    font-size: 1.4rem;
  }
`;
