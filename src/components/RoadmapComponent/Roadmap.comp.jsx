import React from 'react';

import {
  RoadmapContainer,
  RoadmapHeader,
  ContentContainer,
  DayTodoContainer,
  DayContainer,
  Day,
  Dayy,
  TodoContainer,
  Todo,
} from './Roadmap.styles';

const Roadmap = () => {
  return (
    <div id="roadmap">

    <RoadmapContainer>
      <RoadmapHeader>Roadmap</RoadmapHeader>

      <ContentContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q2 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>$MNSTRS</span>Token Launch<br/>
            </Todo>
            <Todo>Private Sale</Todo>
            <Todo>Pre Sales</Todo>
            <Todo>
              <span>MONSTERPools</span> & <span>MONSTERFarms</span>
            </Todo>
            <Todo>TechRate Audit</Todo>
            {/* <Todo>Listing on PancakeSwap</Todo>
            <Todo>Listing on Coingecko</Todo> */}
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q3 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              Partnerships
            </Todo>
            <Todo>
              Team Expansion
            </Todo>
            <Todo>
              <span>MNSTRSx</span>Launch
            </Todo>
            <Todo>
              <span>MonsterBet</span>: Daily Fantasy Sports betting introduced
            </Todo>
           
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q4 2021</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              <span>MonsterPad:</span>Participate in pre-sales of new tokens First IDO 
            </Todo>
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer>
            <Day>Q1 2022</Day>
          </DayContainer>
          <TodoContainer>
            <Todo>
              UX/UI Redesign and Tech Overhaul 
            </Todo>
            <Todo>Certik Audit</Todo>

          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer >
            <Dayy>Q2 2022</Dayy>
          </DayContainer>
          <TodoContainer>
            <Todo>
              Partnerships
            </Todo>
            <Todo>Automated Airdrop Distribution System for BSC</Todo>
            <Todo>(BEP20) token</Todo>
          </TodoContainer>
        </DayTodoContainer>
        <DayTodoContainer>
          <DayContainer not>
            <Dayy>Q3 2022</Dayy>
          </DayContainer>
          <TodoContainer>
            <Todo><span>MONSTERScout</span> Launch</Todo>
          </TodoContainer>
        </DayTodoContainer>

      </ContentContainer>
    </RoadmapContainer>
    </div>

  );
};

export default Roadmap;
