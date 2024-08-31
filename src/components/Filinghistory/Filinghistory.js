import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AgCharts } from "ag-charts-react";
import "./Filinghistory.scss";
import { Button } from "@mui/material";

const Filinghistory = ({ filinghistory }) => {
  const buttonKey = Object.keys(filinghistory);
  const [rowData, setRowData] = useState(filinghistory["2019"].filingStatus[0]);
  const [colDefs, setColDefs] = useState([
    { field: "taxp" },
    { field: "mof" },
    { field: "fy" },
    { field: "dof" },
    { field: "rtntype" },
    { field: "arn" },
    { field: "status" },
  ]);
  const [options, setOptions] = useState({});

  const onHandleHistory = (buttonKey, filinghistory) => {
    let result = [];
    for (let key of buttonKey) {
      let obj = {
        year: key,
        filingNo: filinghistory[key].filingStatus[0].length,
        filingStatus: filinghistory[key].status,
      };
      result.push(obj);
    }
    setOptions({
      data: result,
      series: [{ type: "line", xKey: "year", yKey: "filingNo" }],
    });
  };

  useEffect(() => {
    onHandleHistory(buttonKey, filinghistory);
  }, []);

  const onHandleYear = (year) => {
    setRowData(filinghistory[year].filingStatus[0]);
  };
  return (
    <div className="filinghistory-container">
      <div className="table-data">
        <div
          style={{ height: 250, maxWidth: "100%", overflow: "auto" }}
          className={"ag-theme-quartz"}
        >
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
        <div className="filinghistory-footer">
          {buttonKey.map((item) => (
            <Button key={item} onClick={() => onHandleYear(item)}>
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="filinghistory-graph">
        <AgCharts options={options} />
      </div>
    </div>
  );
};

export default Filinghistory;
