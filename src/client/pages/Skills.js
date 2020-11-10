import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageContainer, PageContentBox } from '../style-components/components/Containers';
import {
  MainHeading,
  SecondaryHeading,
  SecondarySubheading,
} from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import { SkillCardGroup, SkillCard } from '../style-components/components/Cards';
import SkillsData from '../Data/skills.data.json';

const Skills = () => {
  const { data, seo } = SkillsData;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const head = () => {
    return (
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
    );
  };

  return (
    <PageContainer>
      {head()}
      <PageContentBox>
        <MainHeading fontSize="5rem" type="main">
          {data.heading}
        </MainHeading>
        <SkillCardGroup>
          {data.cards.map((line, key) => {
            return (
              <Link to={`/skills/${line.slug}`} style={{ width: '100%' }}>
                <SkillCard key={key}>
                  <SecondaryHeading fontSize="4rem" type="main">
                    {line.title}
                  </SecondaryHeading>
                  <SecondarySubheading fontSize="1.5rem" margin="1rem 0">
                    {line.subtitle}
                  </SecondarySubheading>
                </SkillCard>
              </Link>
            );
          })}
        </SkillCardGroup>

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
  component: Skills,
};
