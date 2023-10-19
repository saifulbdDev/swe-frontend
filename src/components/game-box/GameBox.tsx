import React, { ReactNode } from 'react';
import { ContainerStyled } from './styled';
import { TestElement } from '../../enums/TestElement';

interface Props {
  children: ReactNode;
}
export const GameBox = ({ children }: Props) => {
  return <ContainerStyled data-testid={TestElement.GAME_BOX}>{children}</ContainerStyled>;
};
