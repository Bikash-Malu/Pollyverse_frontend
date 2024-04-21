import { SlAnimatedImage } from '@shoelace-style/shoelace';
import React from 'react'

const Videoview = () => {
    const css = `
  .animated-image-custom-control-box::part(control-box) {
    top: auto;
    right: auto;
    bottom: 1rem;
    left: 1rem;
    background-color: deeppink;
    border: none;
    color: pink;
  }
`;
  return (
    <div><SlAnimatedImage
    className="animated-image-custom-control-box"
    src="https://shoelace.style/assets/images/walk.gif"
    alt="Animation of untied shoes walking on pavement"
  />

  <style>{css}</style></div>
  )
}

export default Videoview