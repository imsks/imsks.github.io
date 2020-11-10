import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';
import {
  PageContainer,
  PageContentBox,
  PrimaryContentBox,
  PrimarySectionContainer,
  PrimaryTextContentBox,
  PrimaryImagesGrid,
  PrimaryImagesContainer,
  ImageContainer,
} from '../style-components/components/Containers';
import { MainHeading, SecondarySubheading } from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import ProjectData from '../Data/skills.data.json';

const Project = () => {
  const { data } = ProjectData;
  const [currentSkill, setCurrentSkill] = useState('');
  const [currentProject, setCurrentProject] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window === 'object') {
      setCurrentSkill(window.location.pathname.split('/')[2]);
      setCurrentProject(window.location.pathname.split('/')[3]);
    }
  }, []);

  return (
    <PageContainer>
      <PageContentBox>
        {data.cards.map((skill, key) => {
          if (skill.slug === currentSkill) {
            return (
              <PrimaryContentBox key={key}>
                <SecondarySubheading fontSize="1.5rem">{skill.project.heading}</SecondarySubheading>
                {skill.project.item.map((project, key) => {
                  if (project.slug === currentProject) {
                    return (
                      <PrimarySectionContainer key={key}>
                        <PrimaryTextContentBox>
                          <MainHeading type="main">
                            {project.title + ' in '}
                            {skill.title}
                          </MainHeading>
                          <SecondarySubheading>{project.subtitle}</SecondarySubheading>
                        </PrimaryTextContentBox>

                        {project.about[0] !== null ? (
                          <PrimaryTextContentBox margin="3rem 0 1rem 0">
                            {project.about.map((item, key) => {
                              return (
                                <SecondarySubheading margin="0.5rem 0" key={key}>
                                  {item}
                                </SecondarySubheading>
                              );
                            })}
                          </PrimaryTextContentBox>
                        ) : (
                          ''
                        )}

                        <PrimaryImagesContainer margin="2rem 0 0 0">
                          <PrimaryImagesGrid>
                            {project.images.map((image, key) => {
                              return <ImageContainer src={image} key={key} margin="0 0 2rem 0" />;
                            })}
                          </PrimaryImagesGrid>
                        </PrimaryImagesContainer>

                        {project.link ? (
                          <Link to={project.link}>
                            <StyledButton size="medium" margin="1rem 0" type="primary">
                              Project Link
                            </StyledButton>
                          </Link>
                        ) : (
                          ''
                        )}
                      </PrimarySectionContainer>
                    );
                  }
                })}
              </PrimaryContentBox>
            );
          }
        })}

        <Divider />
        <Link to="/ventures">
          <StyledButton size="large" margin="2rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default {
  component: Project,
};
