import styled from 'styled-components';
import { colorBlack, colorPrimary, colorShadow, colorWhite } from '../constants';
import { device } from '../base/mediaQuery';

export const ToolsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 0 5%;
`;

export const ToolsContainerItems = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  justify-items: baseline;
  margin: 1rem 0;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const ToolsContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 5px;
  padding: 3rem;
  width: 100%;
  background-color: ${colorWhite};
  color: ${colorPrimary};
`;

export const ToolsContainerItemText = styled.p`
  font-size: 2rem;
  background-color: ${colorWhite};
  color: ${colorPrimary};
`;

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  margin: 2rem 5%;
`;

export const ExperienceContainerItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const ExperienceContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 2rem;
  background-color: ${colorWhite};
  color: ${colorPrimary};
  margin: 1rem 0;
`;

export const ExperienceContainerItemText = styled.p`
  font-size: 2rem;
  color: ${colorPrimary};
`;

export const ProjectContent = styled.div`
  width: 100%;
  display: grid;
  gap: 3rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  a {
    text-decoration: none;
  }

  @media ${device.phone} {
    grid-template-columns: none;
  }
`;

export const ProjectContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
