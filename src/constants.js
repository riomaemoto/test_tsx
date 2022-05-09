import abs from "./img/abs.jpg";
import absgirl from "./img/absgirl.jpg";
import absmen from "./img/absmen.jpg";
import back from "./img/back.jpg";
import talk from "./img/talk.jpg";
import thigh from "./img/thigh.jpg";
import main from "./img/sideplank_edit.jpg";
import looking from "./img/looking.jpg";
import assdenki from "./img/assdenki.jpg";
import diet from "./img/diet.jpg";
import pemf from "./img/PEMF.jpg";
import machine from "./img/machinezoomin.jpg";
import protein from "./img/protein.jpg";
import pull from "./img/pull.jpg";

export {
  abs,
  absgirl,
  absmen,
  back,
  talk,
  thigh,
  main,
  looking,
  assdenki,
  diet,
  pemf,
  machine,
  protein,
  pull,
};

export const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]


export const AllDays = (props) => {
  return (
    <>
      {props.aaa.map((item) => {
        return (
          <li key={item}>{item}</li>
        )
      })}
    </>
  )
}
export const TimeList = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((item) => {
        return (
          <li key={item}>(9:00 - 21:00)</li>
        )
      })}
    </>
  )
}
