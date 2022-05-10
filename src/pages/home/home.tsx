import { VFC } from "react";
import { Reviews } from "./reviews";
import { SplitWithImage } from "./split_with_image";
import { ThreeInfo } from "./three_info";

export const Home: VFC = () => {
  return (
    <>
      <SplitWithImage />
      <ThreeInfo />
      <Reviews />
    </>
  );
};
