import React from "react";
import "./DetailScreen.css";
import { ReviewsProps } from "../../components/Reviews/ReviewsProps";

export const DetailScreen = ({ name, text, date, comment, stars }) => {
  return (
    <div class="detailScreen_Container">
      <ReviewsProps {...name} {...text} {...date} {...comment} {...stars} />
    </div>
  );
};
