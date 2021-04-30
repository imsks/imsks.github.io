import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  PageContainer,
  PageContentBox,
} from "style-components/components/Containers";
import { MainHeading, Paragraph } from "style-components/base/typography";
import { StyledButton } from "style-components/components/Button";
import AboutMeData from "Data/aboutme.data.json";

const AboutMe = () => {
  const { data, seo } = AboutMeData;

  return (
    <PageContainer>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <PageContentBox>
        <MainHeading fontSize="5rem" type="main">
          {data.heading}
        </MainHeading>
        {data.paragraphs.map((paragraphContent, key) => {
          return (
            <Paragraph margin="0 0 1.5rem 0" key={key}>
              {paragraphContent}
            </Paragraph>
          );
        })}

        <Link href="/ventures">
          <StyledButton size="large" margin="2rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default AboutMe;
