import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';
import { PageContainer, PageContentBox } from '../style-components/components/Containers';
import {
  MainHeading,
  SecondaryHeading,
  SecondarySubheading,
} from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import {
  VentureCardGroup,
  VentureCard,
  VentureCardContent,
} from '../style-components/components/Cards';
import VenturesData from '../Data/ventures.data.json';

const Ventures = () => {
  const { data, seo } = VenturesData;

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
        <VentureCardGroup>
          {data.cards.map((line, key) => {
            return (
              <VentureCard key={key}>
                <SecondaryHeading fontSize="4rem" type="main">
                  {line.title}
                </SecondaryHeading>
                <SecondarySubheading fontSize="1.5rem" margin="1rem 0" type="secondary">
                  {line.subtitle}
                </SecondarySubheading>
                <Divider />
                <VentureCardContent>
                  {line.text.map((text, key) => {
                    return (
                      <SecondarySubheading fontSize="2rem" margin="1rem 0" key={key}>
                        {text}
                      </SecondarySubheading>
                    );
                  })}
                </VentureCardContent>
              </VentureCard>
            );
          })}
        </VentureCardGroup>

        <Link to="/skills">
          <StyledButton size="large" margin="4rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default {
  component: Ventures,
};
