import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "./HSN.scss";

const HSN = ({ bzsdtls }) => {
  const [rowData, setRowData] = useState(bzsdtls);
  const [colDefs, setColDefs] = useState([
    { field: "saccd" },
    { field: "sdes" },
  ]);

  return (
    <div className="hsn-container">
      <div
        style={{ height: "100%", maxWidth: 400, overflow: "auto" }}
        className={"ag-theme-quartz"}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default HSN;
