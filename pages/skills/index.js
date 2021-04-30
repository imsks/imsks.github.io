import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  PageContainer,
  PageContentBox,
} from "style-components/components/Containers";
import { MainHeading, Paragraph } from "style-components/base/typography";
import { StyledButton } from "style-components/components/Button";
import {
  SkillCardGroup,
  SkillCard,
} from "style-components/components/Cards";
import SkillsData from "Data/skills.data.json";

const Skills = () => {
  const { data, seo } = SkillsData;

  return (
    <PageContainer>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <PageContentBox>
        <MainHeading fontSize="5rem" type="main" margin="0 0 1rem 0">
          {data.heading}
        </MainHeading>
        <SkillCardGroup>
          {data.cards.map((line, key) => {
            return (
              <Link
                href={`/skills/${line.slug}`}
                style={{ width: "100%" }}
                key={key}
              >
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

        <Link href="/connect">
          <StyledButton size="large" margin="4rem 0" type="primary">
            {data.next_cta_text}
          </StyledButton>
        </Link>
      </PageContentBox>
    </PageContainer>
  );
};

export default Skills;
