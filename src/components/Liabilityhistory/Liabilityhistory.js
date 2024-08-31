import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import "./Liabilityhistory.scss";
import { Button } from "@mui/material";

const Liabilityhistory = ({ liabilityhistory }) => {
  const { curdtls, curfy, prevdtls, prevfy, curtotal, prevtotal } =
    liabilityhistory;
  const [options, setOptions] = useState({
    data: curdtls,
    series: [{ type: "bar", xKey: "taxperiod", yKey: "liab_pct" }],
  });

  const onHandleLH = (year) => {
    if (year === curfy) {
      setOptions({
        data: curdtls,
        series: [{ type: "bar", xKey: "taxperiod", yKey: "liab_pct" }],
      });
    } else {
      setOptions({
        data: prevdtls,
        series: [{ type: "bar", xKey: "taxperiod", yKey: "liab_pct" }],
      });
    }
  };

  return (
    <div className="liability-container">
      <AgCharts options={options} />
      <div className="liability-footer">
        <Button onClick={() => onHandleLH(prevfy)}>{prevfy}</Button>
        <Button onClick={() => onHandleLH(curfy)}>{curfy}</Button>
      </div>
    </div>
  );
};

export default Liabilityhistory;
