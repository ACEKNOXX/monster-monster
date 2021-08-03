import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from './../../globalStyles';


export const HeroSectionContainer = styled.div`
  height: 42.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 9px solid ${theme.primaryColor};
  margin-top: 6rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }

  
  @media screen and (min-width: 1920px) {
    // border:10px dashed tomato;
    justify-content:center;

    margin:0px auto !important;
  }

`;
export const BlockDiver = styled.div`
  display:none;
  @media screen and (min-width: 1920px) {
    // display:block;
    width:300px;height:300px; 
    background:violet;
    border:5px dashed tomato;
    margin:0px auto !important;
  }
`;
export const ContentContainer = styled.div`
  margin-top: 15rem;
  margin-left: 15rem;

  @media screen and (max-width: 1200px) {
    margin-left: 10rem;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 7rem;
  }

  @media screen and (max-width: 900px) {
    margin-top: 0rem;
    margin-left: 0rem;
    padding: 0 2rem;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.4rem;

  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  margin-bottom: 5rem;
  line-height: 2.5rem;

  @media screen and (max-width: 600px) {
    text-align: center;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const Button = styled(Link)`
  border-radius: 30px;
  padding: 9px 3.9rem;
  font-weight: 600;
  background: ${theme.primaryColor};
  box-shadow: 0 0px 6px 1px ${theme.primaryColor};
  color: ${theme.textColor};
  font-size: 2.4rem;
  border: 0;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
    padding: 9px 1.5rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Image = styled.img`
  width: 100%;
  height: 41rem;

  @media screen and (max-width: 900px) {
    height: 100%;
    width: 50%;
  }
`;

export const HeroFlexer = styled.div`
-ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction:column;
  align-items:center;
  border:2px dashed teal;
  
`;

export const HeroFlexItem = styled.div`
min-height:300px;
width:1330px;
text-align:left;
@media screen and (max-width: 900px) {
  width:90%;
  border:5px dashed tomato;
  
}
`;