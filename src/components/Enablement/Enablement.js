import React from "react";
import "./Enablement.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Enablement = ({ enablement }) => {
  const { einvoiceEnable, tradeNm, einvoiceStatus, legalNm, gstin, type } =
    enablement;
  return (
    <Card className="enablement-container">
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {einvoiceEnable}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>{tradeNm}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{legalNm}</Typography>
        <Typography variant="body2">
          Einvoice Status: {einvoiceStatus}
        </Typography>
        <Typography variant="body2">GSTIN: {gstin}</Typography>
        <Typography variant="body2">Type: {type}</Typography>
      </CardContent>
    </Card>
  );
};

export default Enablement;
