import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

const Flight = () => {
  const [age, setAge] = useState("");
  const [countries,setCountries]=useState([]);

  useEffect(()=>{
    axios.get('https://restcountries.com/v2/all').then((response)=>{
      setCountries(response.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[])



  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="">
      <div className="bg-white w-[80%] h-[20%] flex justify-center m-auto shadow-md py-4 mt-10 ">
   
        <div className="w-full flex flex-wrap items-center justify-around">
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                For
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                // sx={{ textAlign: "left", color: "red", fontSize: "12px" }}
                label="Age"
              >
                <MenuItem
                  value={"Single"}
                  // sx={{ textAlign: "center", color: "red" }}
                >
                  Single
                </MenuItem>
                <MenuItem value={"Family"}>Family</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Destination
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
           
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Countries
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10}>
                  {
                    countries?.map((country)=>{
                      <div key={country.alpha2Code}>{country?.name}</div>
                    })
                  }
                </MenuItem>
                 <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Duration
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button variant="contained">Submit</Button>   
        </div>
      </div>
    </div>
  );
};

export default Flight;