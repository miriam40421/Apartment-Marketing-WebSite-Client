import '../style.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useState } from "react"
import { creatCat } from '../api';
import swal from "sweetalert";

export const AddCategory = () => {

    const [newCat, setNewCat] = useState({})

    const save = () => {


        creatCat(newCat)
            .then(x => {
                console.log(newCat);
                swal("הוספה", "הקטגוריה התוספה בהצלחה", "success")
            })
            .catch(
                x => {
                    swal("אין אפשרות", "  אינך רשאי", "error")

                }
            )



    }


    return <>
        <br></br>
        <div id="alladdcar"><br></br>
            <h1>נא להכניס את פרטי הקטגוריה:</h1><br></br>

            <div id="addcar">
                <TextField id="outlined-basic" label="הכנס שם" variant="outlined" onBlur={(e) => setNewCat({ ...newCat, nameCategory: e.target.value })} />
                <p></p>
                <Button className="buto" onClick={() => save()} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </div>
        </div>


    </>
}