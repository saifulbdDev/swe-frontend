import React from 'react';
import { ButtonStyled } from './styled';
import { gameConfig } from '../../config/game-config';
import { TestElement } from '../../enums/TestElement';

export const StartButton = () => {
  const onStartGame = () => {
    alert('You will learn to develop JS games after you join with us! For now, best of luck!');
  };

  return (
    <ButtonStyled data-testid={TestElement.START_BUTTON} onClick={onStartGame}>
      {gameConfig.startButton.buttonText}
    </ButtonStyled>
  );
};
