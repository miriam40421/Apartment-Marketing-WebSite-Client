import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
 import { SetCurrentUser } from "../Redux/Action.js";
import { useState } from "react";
import { login } from '../api.js';

export const Login = () => {
    const nav = useNavigate()
     const dispach = useDispatch()
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});


    const checkemail = (value) => {
        const nRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!value.match(nRegex)) {
            setErrors({ ...errors, email: 'מייל לא תקין  ' })
        }
        else {
            setErrors({ ...errors, email: '' })
        }
    }
    const cheksisma = (value) => {
        if (value.length < 5 || value.length > 10) {
            setErrors({ ...errors, sisma: 'על הסיסמה להיות בין 5 ל10 תוים ' })
        }
        else {
            setErrors({ ...errors, sisma: '' })
        }
    }

    const send = () => {
        if (user.email && user.password) {
            login(user)
                .then(  x => {
                    swal("ברוך הבא", "", "success");
                    localStorage.setItem('token',x.data.token)
                    nav(`/apartment`)
                    dispach(SetCurrentUser(x.data.advertiser))
                    console.log(user);
                    
                })
                .catch(async x => {
                    if ( x.status == 404) {
                         await swal("!!!!הרשמה ", `אינך רשום במערכת,   הינך מועבר להרשמה  `, "info");
                         nav(`/sign/${user.email}/${user.password}`)
                    
                    }


                })
        }
        else {
            swal("!!!!שגיאה ", "מלא את כל השדות", "error");
        }
    }

    return <>
        <div className='login'>
            <h2 id="h4">הצטרפות</h2>
            <TextField id="outlined-basic" label=" הכנס מייל" variant="outlined" onBlur={(e) => setUser({ ...user, email: e.target.value })} onChange={(e) => checkemail(e.target.value)} />
            <p className="error">{errors.email}</p>

            <TextField id="outlined-basic" label=" הכנס סיסמה" variant="outlined" onBlur={(e) => setUser({ ...user, password: e.target.value })} onChange={(e) => cheksisma(e.target.value)} />
            <p className="error">{errors.sisma}</p>
            <Button className='buto' onClick={send} variant="contained" endIcon={<SendIcon />}>
                שליחה
            </Button>
        </div>

    </>
}
