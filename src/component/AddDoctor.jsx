import React,{useState} from "react";
import {TextField,Button,Grid } from "@mui/material"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export const AddDoctor=()=>{
  const [name,setName]=useState("")
  const[spl,setSpl]= useState("")

  const navigate =useNavigate()
  const handleSubmit= async()=>{
       const isActive = true
       const payload ={
        name,
        spl,
        isActive
       }
     await  axios.post("http://localhost:1010/adddoctor",payload)
      navigate("/")
    } 



    return(
    <Grid container spacing={2}>

        <Grid item xs={4}>
    <TextField onChange={(e)=>setName(e.target.value)} 
    variant="outlined" fullWidth label="Name of Doctor" />

     <TextField onChange={(e)=> setSpl(e.target.value)}
     variant="outlined" fullWidth label="Specializtion" />
  
        </Grid>

        <Grid item xs={4}>
            <Button onClick={handleSubmit} sx={{height:55}}
             variant="contained" fullWidth >
                Submit
            </Button>

        </Grid>
       
    </Grid>
    )
}