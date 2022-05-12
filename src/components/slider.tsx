/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { absgirl, main, looking, thigh, pull, abs } from "../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Slider: FC = () => {
  const ImgSize = css`
    img {
      max-height: 900px;
    }
  `;
  return (
    <Carousel
      css={ImgSize}
      autoPlay
      infiniteLoop
      showThumbs={false}
      stopOnHover={false}
    >
      <img src={main} alt="main" />
      <img src={looking} alt="looking" />
      <img src={absgirl} alt="absgirl" />
      <img src={pull} alt="pull" />
      <img src={thigh} alt="thigh" />
      <img src={abs} alt="abs" />
    </Carousel>
  );
};
