import React from 'react';
import { GlobalStyle } from './global';
import { GameBox } from '../components/game-box/GameBox';
import { CampaignBanner } from '../components/campaign-banner/CampaignBanner';
import { StartButton } from '../components/start-button/StartButton';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <GameBox>
        <CampaignBanner />
        <StartButton />
      </GameBox>
    </>
  );
};
