import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Divider } from "rsuite";
import {
  PageContainer,
  PageContentBox,
} from "style-components/components/Containers";
import {
  MainHeading,
  SecondarySubheading,
  Paragraph,
} from "style-components/base/typography";
import { StyledButton } from "style-components/components/Button";
import {
  VentureCardGroup,
  VentureCard,
  VentureCardContent,
} from "style-components/components/Cards";
import VenturesData from "Data/ventures.data.json";

const Ventures = () => {
  const { data, seo } = VenturesData;

  return (
    <PageContainer>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <PageContentBox>
        <MainHeading type="main" margin="0 0 1rem 0">
          {data.heading}
        </MainHeading>
        <VentureCardGroup>
          {data.cards.map((ventureCardData, key) => {
            return (
              <VentureCard key={key}>
                <MainHeading type="main">{ventureCardData.title}</MainHeading>
                <SecondarySubheading margin="0 0 1rem 0" type="secondary">
                  {ventureCardData.subtitle}
                </SecondarySubheading>
                <Divider />
                <VentureCardContent>
                  {ventureCardData.text.map((text, key) => {
                    return (
                      <Paragraph margin="1rem 0" key={key}>
                        {text}
                      </Paragraph>
                    );
                  })}
                </VentureCardContent>
              </VentureCard>
            );
          })}
        </VentureCardGroup>

        <Link href="/skills">
          <StyledButton size="large" margin="3rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default Ventures;