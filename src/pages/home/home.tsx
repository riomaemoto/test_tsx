import { Slider } from "../../components/slider";
import { VFC } from "react";
import { SplitWithImage } from "./split_with_image";
import { ThreeInfo } from "./three_info";

export const Home: VFC = () => {
  return (
    <>
      <Slider />
      <SplitWithImage />
      <ThreeInfo />
    </>
  );
};
