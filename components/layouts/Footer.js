import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaMediumM,
  FaDribbble,
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialConnectContainer,
  CreditsContainer,
  CreditsContainerSubheading,
  SocialLinksContainer,
  SocialLinksContainerItem,
} from 'style-components/components/Containers';
import {
  SecondaryHeading,
  SecondarySubheading,
  Paragraph,
} from 'style-components/base/typography';

import FooterData from 'Data/footer.data.json';

const Footer = () => {
  const { data } = FooterData;
  const { facebook, instagram, twitter, linkedin, medium, dribbble, github } = data.social_link;
  return (
    <FooterContainer>
      <SocialConnectContainer>
        <SecondaryHeading type="main" fontSize="1.8rem" margin="2rem 0">
          {data.title}
        </SecondaryHeading>
        <SocialLinksContainer>
          {linkedin && (
            <SocialLinksContainerItem href={linkedin} target="_blank">
              <FaLinkedin />
            </SocialLinksContainerItem>
          )}

          {github && (
            <SocialLinksContainerItem href={github} target="_blank">
              <FaGithub />
            </SocialLinksContainerItem>
          )}

          {facebook && (
            <SocialLinksContainerItem href={facebook} target="_blank">
              <FaFacebook />
            </SocialLinksContainerItem>
          )}

          {instagram && (
            <SocialLinksContainerItem href={instagram} target="_blank">
              <FaInstagram />
            </SocialLinksContainerItem>
          )}

          {twitter && (
            <SocialLinksContainerItem href={twitter} target="_blank">
              <FaTwitter />
            </SocialLinksContainerItem>
          )}

          {medium && (
            <SocialLinksContainerItem href={medium} target="_blank">
              <FaMediumM />
            </SocialLinksContainerItem>
          )}

          {dribbble && (
            <SocialLinksContainerItem href={dribbble} target="_blank">
              <FaDribbble />
            </SocialLinksContainerItem>
          )}
        </SocialLinksContainer>
      </SocialConnectContainer>
      <CreditsContainer>
        <CreditsContainerSubheading>{data.credits}</CreditsContainerSubheading>
        <Paragraph>{data.copyright + new Date().getFullYear()}</Paragraph>
      </CreditsContainer>
    </FooterContainer>
  );
};

export default Footer;
