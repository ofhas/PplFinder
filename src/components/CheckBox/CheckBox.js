import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";
import { useState, useEffect } from "react";




const CheckBox = ({ isChecked, onChange, label, value }) => {
  
  
  const handleChange = (event) => {
    onChange && onChange(value, !isChecked);
    
  
   
      
  };



  
  return (
    
    <S.CheckBox>
      
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleChange} color="primary" />}
        label={label}
        
        
      />
      
    </S.CheckBox>
    // </SelectedCountrysContext.Provider>
    
  );
};

export default CheckBox;
