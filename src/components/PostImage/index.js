import React from 'react';
import { ImageContainer, Img } from './style';

export default function PostImage({ image }) {
  return (
    <ImageContainer>
      <Img src={image} />
    </ImageContainer>
  );
}