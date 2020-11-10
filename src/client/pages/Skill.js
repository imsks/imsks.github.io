import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageContainer,
  PageContentBox,
  PrimaryContentBox,
  PrimaryTextContentBox,
} from '../style-components/components/Containers';
import {
  MainHeading,
  MainSubheading,
  SecondaryHeading,
  SecondarySubheading,
} from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import { SkillCardMetaContent, ProjectCard } from '../style-components/components/Cards';
import {
  ToolsContainer,
  ToolsContainerItems,
  ToolsContainerItem,
  ToolsContainerItemText,
  ExperienceContainer,
  ExperienceContainerItems,
  ExperienceContainerItem,
  ExperienceContainerItemText,
  ProjectContent,
} from '../style-components/pages/Skill';
import SkillsData from '../Data/skills.data.json';

const Skill = () => {
  const { data } = SkillsData;
  const [currentSkill, setCurrentSkill] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window === 'object') {
      setCurrentSkill(window.location.pathname.split('/')[2]);
    }
  }, []);

  return (
    <PageContainer>
      <PageContentBox>
        <SecondarySubheading fontSize="2rem">{data.heading}</SecondarySubheading>

        {data.cards.map((skill, key) => {
          if (skill.slug === currentSkill) {
            return (
              <PrimaryContentBox key={key}>
                <PrimaryTextContentBox>
                  <MainHeading type="main">{skill.title}</MainHeading>
                  <SecondaryHeading fontSize="2.5rem">{skill.subtitle}</SecondaryHeading>
                </PrimaryTextContentBox>

                <SkillCardMetaContent>
                  <ToolsContainer>
                    <SecondaryHeading fontSize="1.8rem" type="sub">
                      {skill.data.specialized_in.text}
                    </SecondaryHeading>
                    <ToolsContainerItems>
                      {skill.data.specialized_in.items.map((item, key) => {
                        return (
                          <ToolsContainerItem>
                            <ToolsContainerItemText>{item}</ToolsContainerItemText>
                          </ToolsContainerItem>
                        );
                      })}
                    </ToolsContainerItems>
                  </ToolsContainer>

                  <ExperienceContainer>
                    <SecondaryHeading fontSize="1.8rem" type="sub">
                      {skill.data.experience_data.text}
                    </SecondaryHeading>
                    <ExperienceContainerItems>
                      {skill.data.experience_data.items.map((item, key) => {
                        return (
                          <ExperienceContainerItem>
                            <ExperienceContainerItemText>{item}</ExperienceContainerItemText>
                          </ExperienceContainerItem>
                        );
                      })}
                    </ExperienceContainerItems>
                  </ExperienceContainer>
                </SkillCardMetaContent>

                <PrimaryTextContentBox margin="2rem 0">
                  <MainHeading type="main">{skill.project.title}</MainHeading>
                  <SecondarySubheading fontSize="2rem">
                    {skill.project.subtitle}
                  </SecondarySubheading>
                </PrimaryTextContentBox>
                <ProjectContent>
                  {skill.project.item.map((project, key) => {
                    return (
                      <Link
                        to={`/skills/${currentSkill}/${project.slug}`}
                        key={key}
                        style={{ width: '100%', height: 'auto' }}
                      >
                        <ProjectCard>
                          <MainSubheading>{project.title}</MainSubheading>
                          <SecondarySubheading>{project.subtitle}</SecondarySubheading>
                        </ProjectCard>
                      </Link>
                    );
                  })}
                </ProjectContent>
              </PrimaryContentBox>
            );
          }
        })}

        <Link to="/connect">
          <StyledButton size="large" margin="4rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default {
  component: Skill,
};
