import React, { useState } from "react";
import { FormControlLabel, Box, Switch } from "@mui/material";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch checked={checked} onChange={handleChange} color="success" />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
