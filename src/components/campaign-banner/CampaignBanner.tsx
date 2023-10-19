import React from 'react';
import { BannerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

export const CampaignBanner = () => {
  return (
    <BannerStyled data-testid={TestElement.CAMPAIGN_BANNER}>
      Score 200 points and get 10% discount on your next mobile Recharge!
    </BannerStyled>
  );
};
