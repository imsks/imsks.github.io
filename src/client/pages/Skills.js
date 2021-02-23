import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageContainer, PageContentBox } from '../style-components/components/Containers';
import { MainHeading, SecondaryHeading, Paragraph } from '../style-components/base/typography';
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
        <SecondaryHeading fontSize="5rem" type="main" margin="0 0 1rem 0">
          {data.heading}
        </SecondaryHeading>
        <SkillCardGroup>
          {data.cards.map((line, key) => {
            return (
              <Link to={`/skills/${line.slug}`} style={{ width: '100%' }} key={key}>
                <SkillCard key={key}>
                  <MainHeading type="main">{line.title}</MainHeading>
                  <Paragraph fontSize="1.5rem" margin="1rem 0">
                    {line.subtitle}
                  </Paragraph>
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
