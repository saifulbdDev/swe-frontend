import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ButtonStyled = styled.button(
  (): CSSObject => ({
    backgroundColor: '#34d399',
    color: '#022c22',
    position: 'absolute',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: '0.3s ease-in-out',
    fontWeight: 'bold',
    top: gameConfig.startButton.offsetTop,
    borderRadius: gameConfig.startButton.borderRadius,
    height: gameConfig.startButton.height,
    width: gameConfig.startButton.width,
    fontSize: gameConfig.startButton.fontSize,

    ':hover': {
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      transform: 'translateY(-4px)',
    },
    ':active': {
      transform: 'translateY(0px)',
    },
  }),
);
