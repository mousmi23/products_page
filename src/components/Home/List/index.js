import React from "react";
import Card from "./ListItem/Cards";
import Data from "../Data";

const index = () => {
  return (
    <div>
      {Data.map((val) => {
        return (
          <Card
            imageURL={val.imageURL}
            name={val.name}
            currency={val.currency}
            price={val.price}
          />
        );
      })}
    </div>
  );
};

export default index;
