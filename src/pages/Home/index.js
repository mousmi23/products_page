import React from "react";
import SearchBar from "../../components/Home/SearchBar";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import "./style.css";
import Navbar from "../../components/Common/Navbar/Navbar";

export const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel />
        </div>
        <div className="home_list-wrap">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
