import React from "react";
import "./Home.scss";
import data from "../data/data.json";
import Enablement from "../components/Enablement/Enablement";
import HSN from "../components/HSN/HSN";
import Liabilityhistory from "../components/Liabilityhistory/Liabilityhistory";
import Filinghistory from "../components/Filinghistory/Filinghistory";

const Home = () => {
  const {
    enablement,
    liabilityhistory,
    filinghistory,
    HSN: { bzsdtls },
  } = data;
  return (
    <div className="home-container">
      <div className="home-first-row">
        <Enablement enablement={enablement} />
        <HSN bzsdtls={bzsdtls} />
        <Liabilityhistory liabilityhistory={liabilityhistory} />
      </div>
      <div className="home-second-row">
        <Filinghistory filinghistory={filinghistory} />
      </div>
    </div>
  );
};

export default Home;
