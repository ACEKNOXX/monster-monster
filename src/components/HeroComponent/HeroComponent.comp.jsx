import React from 'react';

import {
  HeroSectionContainer,
  ContentContainer,
  Heading,
  Description,
  Button,
  ImageContainer,
  Image,
  HeroFlexer,
  HeroFlexItem,
  BlockDiver
} from './HeroComponent.styles';

import HeroImage from './../../assets/hero_image.png';

const HeroComponent = () => {
  return (
    <div>
      <HeroSectionContainer>
        <BlockDiver/>

        <ContentContainer>
          <Heading>Redifining Sports Fandom</Heading>
          <Description>
            Decentralised, Incentivized, Tokenized. <br /> Join the Whitelist
            Public Sale lottery + Airdrop
          </Description>
          <Button to='/pre-sale'>Join the MONSTER Pre-sale</Button>
        </ContentContainer>
        <ImageContainer>
          <Image src={HeroImage} alt='' draggable={false} />
        </ImageContainer>
      </HeroSectionContainer>
      
    </div>
  );
};

export default HeroComponent;
