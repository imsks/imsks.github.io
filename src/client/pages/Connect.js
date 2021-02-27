import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  PageContainer,
  PageContentBox,
  PrimaryContentBox,
  PrimaryTextContentBox,
} from '../style-components/components/Containers';
import { ConnectCardGrid, ConnectCardItem } from '../style-components/components/Cards';
import {
  MainHeading,
  MainSubheading,
  SecondarySubheading,
} from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import Footer from '../layouts/Footer';
import ConnectData from '../Data/connect.data.json';

const Connect = () => {
  const { data, seo } = ConnectData;
  const head = () => {
    return (
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      {head()}
      <PageContentBox>
        <PrimaryContentBox>
          <PrimaryTextContentBox>
            <SecondarySubheading>{data.subheading}</SecondarySubheading>
            <MainHeading type="main">{data.heading}</MainHeading>
          </PrimaryTextContentBox>
        </PrimaryContentBox>

        <ConnectCardGrid>
          {data.cards.map((contact, key) => {
            return (
              <ConnectCardItem key={key}>
                <MainSubheading type="main">{contact.title}</MainSubheading>
                <a href={contact.link} target="_black">
                  <StyledButton size="medium" margin="2rem 0" type="primary">
                    {contact.cta_text}
                  </StyledButton>
                </a>
              </ConnectCardItem>
            );
          })}
        </ConnectCardGrid>

        <Footer />

        <Link to="/">
          <StyledButton size="medium" margin="4rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default {
  component: Connect,
};
