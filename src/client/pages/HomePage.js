import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Modal } from 'rsuite';
import { HomepageContainer, PageContentBox } from '../style-components/components/Containers';
import { MainHeading, SecondarySubheading, Paragraph } from '../style-components/base/typography';
import { StyledButton } from '../style-components/components/Button';
import {
  QuickNavigationModalCard,
  QuickNavigationModalContainer,
  QuickNavigationModalCardItem,
} from '../style-components/components/Cards';

import HeroData from '../Data/homepage.data.json';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, seo } = HeroData;

  const head = () => {
    return (
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
    );
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <HomepageContainer>
      {head()}
      <PageContentBox>
        <MainHeading type="main">{data.heading}</MainHeading>
        <SecondarySubheading>{data.subheading}</SecondarySubheading>
        <Link to="/about">
          <StyledButton size="large" margin="2rem 0 1rem 0" type="primary">
            {data.cta_text}
          </StyledButton>
        </Link>

        <StyledButton
          size="small"
          margin="1rem 0"
          type="light"
          borderRadius="5px"
          onClick={openModal}
        >
          {data.cta_modal_text}
        </StyledButton>
      </PageContentBox>

      <Modal show={showModal} onHide={closeModal}>
        <QuickNavigationModalContainer padding="5rem">
          <Modal.Header>
            <Paragraph>{data.modal.title}</Paragraph>
          </Modal.Header>
          <Modal.Body>
            {data.modal.links.map((link) => {
              return (
                <QuickNavigationModalCard key={link}>
                  <QuickNavigationModalCardItem href={link.slug}>
                    {link.text}
                  </QuickNavigationModalCardItem>
                </QuickNavigationModalCard>
              );
            })}
          </Modal.Body>
        </QuickNavigationModalContainer>
      </Modal>
    </HomepageContainer>
  );
};

export default {
  component: HomePage,
};
