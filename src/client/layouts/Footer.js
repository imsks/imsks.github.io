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
  SocialLinksContainer,
  SocialLinksContainerItem,
} from '../style-components/components/Containers';
import { SecondaryHeading, SecondarySubheading } from '../style-components/base/typography';

import FooterData from '../Data/footer.data.json';

const Footer = () => {
  const { data } = FooterData;
  const { facebook, instagram, twitter, linkedin, medium, dribbble, github } = data.social_link;
  return (
    <FooterContainer>
      <SocialConnectContainer>
        <SecondaryHeading type="main" fontSize="2.2rem" margin="1rem 0">
          {data.title}
        </SecondaryHeading>
        <SocialLinksContainer>
          {linkedin ? (
            <SocialLinksContainerItem href={linkedin} target="_blank">
              <FaLinkedin />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {github ? (
            <SocialLinksContainerItem href={github} target="_blank">
              <FaGithub />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {facebook ? (
            <SocialLinksContainerItem href={facebook} target="_blank">
              <FaFacebook />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {instagram ? (
            <SocialLinksContainerItem href={instagram} target="_blank">
              <FaInstagram />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {twitter ? (
            <SocialLinksContainerItem href={twitter} target="_blank">
              <FaTwitter />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {medium ? (
            <SocialLinksContainerItem href={medium} target="_blank">
              <FaMediumM />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}

          {dribbble ? (
            <SocialLinksContainerItem href={dribbble} target="_blank">
              <FaDribbble />
            </SocialLinksContainerItem>
          ) : (
            ''
          )}
        </SocialLinksContainer>
      </SocialConnectContainer>
      <CreditsContainer>
        <SecondarySubheading fontSize="2rem">{data.credits}</SecondarySubheading>
        <SecondarySubheading fontSize="1.5rem">
          {data.copyright + new Date().getFullYear()}
        </SecondarySubheading>
      </CreditsContainer>
    </FooterContainer>
  );
};

export default Footer;
