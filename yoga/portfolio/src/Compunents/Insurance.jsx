import { Button, Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
// import '../Style/Insurance.css'
import axios from "axios";

const Insurance = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selecte, setSelected] = useState("");
  const [Option, setOption] = useState("");
  const [selec, setSelec] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChangeSecond = (event) => {
    setSelected(event.target.value);
  };
  const handleOptionChangeThird = (event) => {
    setOption(event.target.value);
  };
  const handleOptionChangeFourth = (event) => {
    setSelec(event.target.value);
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="px-12 sm:px-20">
      <div className=" px-8 sm:px-16 md:px-28 lg:px-20 grid grid-cols-1  sm:grid-cols-2 gap-4 md:gap-6 xl:grid-cols-5  m-auto shadow-md py-6  ">
        <Grid item>
          <select
            className="w-full py-2 px-1 bg-white border-b-2 outline-none"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {selectedOption === "" ? (
              <option value="" disabled hidden>
                For
              </option>
            ) : null}
            <option className=" mt-4" value="option1">
              Single
            </option>
            <option value="option2">Family</option>
          </select>
        </Grid>
        <Grid item>
          <select
            className="w-full py-2 px-1 bg-white border-b-2"
            value={selecte}
            onChange={handleOptionChangeSecond}
          >
            {selecte === "" ? (
              <option value="" disabled hidden>
                Destination
              </option>
            ) : null}
            <option className="hover:bg-red-200 mt-4" value="option1">
              Option 1
            </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </Grid>
        <Grid item>
          <select
            className="w-full  py-2 px-1 bg-white border-b-2"
            value={Option}
            onChange={handleOptionChangeThird}
          >
            {Option === "" ? (
              <option value="" disabled hidden>
                Country
              </option>
            ) : null}
            {/* <option className="hover:bg-red-200 mt-4" value="option1"> */}
            
        {countries.map((country) => (
          <option className="h-40" key={country.alpha2Code}>
            
          {country.name} <br/></option>
        ))}
      
            {/* </option> */}
            {/* <option value="option2">Option 2</option>
            <option value="option3">Option 3</option> */}
          </select>
        </Grid>
        <Grid item>
          <select
            className="w-full py-2 px-1 bg-white border-b-2 text-sm "
            value={selec}
            onChange={handleOptionChangeFourth}
          >
            {selec === "" ? (
              <option value="" disabled hidden>
                Duration
              </option>
            ) : null}
            <option className="hover:bg-red-200 mt-4" value="option1">
              Option 1
            </option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </Grid>
        <Grid item>
          <Button className="w-full" variant="contained">
            Insurance
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Insurance;
