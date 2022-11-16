import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";
// import Data from "../Data";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const changeInput = (event) => {
    const data = event.target.value;
    setValue(data);
  };
  return (
    <>
      <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon" />
        <input
          type="text"
          placeholder="Search your fashion"
          value={value}
          onChange={changeInput}
        />
      </div>

      {/* <div className="json">
        {Data.filter((curr) => {
          if (value === "") {
            return curr;
          } else if (curr.type.toLowerCase().includes(value.toLowerCase())) {
            return curr;
          }
        }).map((curr, index) => {
          return <div key={curr.id}>{curr.type}</div>;
        })}
      </div> */}
    </>
  );

  // const [text, setText] = useState("");
  // return (
  //     <>
  //         <div className="container">
  //             <input
  //                 type="text"
  //                 placeholder="Search...."
  //                 onChange={(event) => setText(event.target.value)}
  //             />
  //         </div>
  //         <div className="json">
  //             {JSONDATA.filter((curr) => {
  //                 if (text === "") {
  //                     return curr;
  //                 } else if (
  //                     curr.first_name
  //                         .toLowerCase()
  //                         .includes(text.toLowerCase())
  //                 ) {
  //                     return curr;
  //                 }
  //             }).map((curr, index) => {
  //                 return <div key={curr.id}>{curr.first_name}</div>;
  //             })}
  //         </div>
  //       </>
  //   );
  // };
};

export default SearchBar;
