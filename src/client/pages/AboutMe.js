import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { PageContainer, PageContentBox } from '../style-components/components/Containers';
import { MainHeading, Paragraph } from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import AboutMeData from '../Data/aboutme.data.json';

const AboutMe = () => {
  const { data, seo } = AboutMeData;

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
        <MainHeading fontSize="5rem" type="main" margin="0 0 1rem 0">
          {data.heading}
        </MainHeading>
        {data.paragraphs.map((paragraphContent, key) => {
          return (
            <Paragraph margin="0 0 1.5rem 0" key={key}>
              {paragraphContent}
            </Paragraph>
          );
        })}

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
  component: AboutMe,
};
