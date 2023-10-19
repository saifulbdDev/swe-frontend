import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    top: gameConfig.campaignBanner.offsetTop,
    borderRadius: gameConfig.campaignBanner.borderRadius,
    width: gameConfig.campaignBanner.width,
    padding: gameConfig.campaignBanner.padding,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,
  }),
);
