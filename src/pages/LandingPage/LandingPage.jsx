import React, { useState } from 'react';

import {
  LandingPageContainer,
  Header,
  LogoContainer,
  LogoIcon,
  LogoImage,
  Navbar,
  NavUl,
  NavListItem,
  MenuImage,
  CloseImage,
  AllocationContainer,
  AllocationHeader,
  AllocationImage,
  FlexWrapContainer,
  AllocatedContainer,
  AllocatedPill,
  Allocated,
  AllocatedPercentage,
  Footer,
  FooterHeader,
  BinanceLogo,
  Alink
} from './LandingPage.styles';

import HeroComponent from '../../components/HeroComponent/HeroComponent.comp';
import AboutMonster from './../../components/AboutMonsterComponent/AboutMonster.comp';
import Roadmap from './../../components/RoadmapComponent/Roadmap.comp';

import MonsterIcon from './../../assets/monster_logo.png';
import MonsterTitle from './../../assets/monster_title_logo.png';
import Allocation from './../../assets/3.jpeg';
import Binance from './../../assets/binance_logo.png';
import MenuIcon from './../../assets/menu.svg';
import CloseIcon from './../../assets/cancel.svg';
import Partners from '../../components/Partners/Partners';

const LandingPage = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <LandingPageContainer>
      <Header>
        <LogoContainer>
          <LogoIcon src={MonsterIcon} alt='' draggable={false} />
          <LogoImage src={MonsterTitle} alt='' draggable={false} />
        </LogoContainer>
        <MenuImage
          onClick={() => setOpenNav(true)}
          src={MenuIcon}
          alt=''
          draggable={false}
        />
        <CloseImage
          onClick={() => setOpenNav(false)}
          src={CloseIcon}
          alt=''
          draggable={false}
          open={openNav}
        />
        <Navbar open={openNav}>
          <NavUl>
           
            <NavListItem>
              <Alink href="#about">
                  About
              </Alink>
            </NavListItem>
            <NavListItem>
              <Alink href="#monster-ecosystem">
                MONSTER Ecosystem
              </Alink>
            </NavListItem>
            <NavListItem>
              <Alink href="#roadmap">
                Roadmap
              </Alink>
            </NavListItem>
            <NavListItem>
              <Alink href="#token-allocation">
                Token Allocation
              </Alink>
            </NavListItem>
            <NavListItem active>
              <Alink active
               href="https://drive.google.com/file/d/17YzW1HocEyHFRXf-4wIWUk84tnK3B7c0/view?ts=60d9e1c4" target="_blank">
                Playbook
               </Alink>
            </NavListItem>
          </NavUl>
        </Navbar>
      </Header>

      <HeroComponent />
      
      <AboutMonster />
      <Roadmap />

      <AllocationContainer id="token-allocation">
        <AllocationHeader>Token Allocation</AllocationHeader>
        <AllocationImage src={Allocation} alt='' draggable={false} />
        <br/>
        <FlexWrapContainer>
          <AllocatedContainer>
            <AllocatedPill seed />
            <Allocated>Liquidity</Allocated>
            <AllocatedPercentage>73.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill priv />
            <Allocated>Marketing</Allocated>
            <AllocatedPercentage>5.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill pub />
            <Allocated>Partnership</Allocated>
            <AllocatedPercentage>5.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill dex />
            <Allocated>Team</Allocated>
            <AllocatedPercentage>10.0%</AllocatedPercentage>
          </AllocatedContainer>

          <AllocatedContainer>
            <AllocatedPill marketing />
            <Allocated>intial</Allocated>
            <AllocatedPercentage>6.7%</AllocatedPercentage>
          </AllocatedContainer>

        </FlexWrapContainer>
      </AllocationContainer>
      <Partners />
      <Footer>
        <FooterHeader>Powered By:</FooterHeader>
        <BinanceLogo src={Binance} alt='' draggable={false} />
      </Footer>
    </LandingPageContainer>
  );
};

export default LandingPage;
