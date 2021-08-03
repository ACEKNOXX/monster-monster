import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from './../../globalStyles';

export const PartnersContainer = styled.div`
-ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction:column;
  align-items:center;
  border-bottom:2px solid #333;
  padding: 5rem 3rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content:center;
`;

export const Image = styled.img`
  width: 200px;
  height: 100px;
  margin: 10px 5px;
  border-radius:20px;
  @media screen and (max-width: 900px) {
    height: 100%;
    width: 50%;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.4rem;
  align:center;
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;
