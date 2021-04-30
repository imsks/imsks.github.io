import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  PageContainer,
  PageContentBox,
  PrimaryContentBox,
  PrimaryTextContentBox,
} from "style-components/components/Containers";
import {
  ConnectCardGrid,
  ConnectCardItem,
} from "style-components/components/Cards";
import {
  MainHeading,
  MainSubheading,
  SecondarySubheading,
} from "style-components/base/typography";
import { StyledButton } from "style-components/components/Button";
import Footer from "components/layouts/Footer";
import ConnectData from "Data/connect.data.json";

const Connect = () => {
  const { data, seo } = ConnectData;

  return (
    <PageContainer>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
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

        <Link href="/">
          <StyledButton size="medium" margin="4rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default Connect;
