// Card.tsx
import React from 'react';
import styled from 'styled-components';

export interface CardProps {
  title: string;
  description: string;
  imageurl: string;
  disabled?: boolean;
  backgroundColor?: string;
  testId?: string;
}

const CardContainer = styled.div<{ disabled?: boolean , backgroundColor?: string;}>`
  background: ${props => (props.disabled ? 'grey' : props.backgroundColor || 'white')};
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
`;

const Card = ({ title, description, imageurl, disabled, backgroundColor, testId }: CardProps) => {
  return (
    <CardContainer data-testid={testId} disabled={disabled} backgroundColor={backgroundColor}>
      <CardImage src={imageurl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
