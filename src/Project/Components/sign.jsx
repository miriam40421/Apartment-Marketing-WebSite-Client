import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from "react-router-dom";
import { SetCurrentUser } from "../Redux/Action.js";
import { useState } from "react";
import { sign_in } from '../api';
export const Sign = () => {
    const nav = useNavigate()
    const dispach = useDispatch()
    const params = useParams();
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({ email: params.email, password: params.password });

    const checkPhone1 = (value) => {
        const nRegex = /^[0-9]{7,10}$/
        if (value.length > 7 && value.length < 10 || value.length < 7 && value.length > 10 || !value.match(nRegex)) {
            setErrors({ ...errors, phone1: 'טלפון חייב להכיל 10 או 7 ספרות  ' })
        }
        else {
            setErrors({ ...errors, phone1: '' })
        }
    }

    const checkPhone2 = (value) => {
        const nRegex = /^[0-9]{7,10}$/
        if (value.length > 7 && value.length < 10 || value.length < 7 && value.length > 10 || !value.match(nRegex)) {
            setErrors({ ...errors, phone2: 'טלפון חייב להכיל 10 או 7 ספרות  ' })
        }
        else {
            setErrors({ ...errors, phone2: '' })
        }
    }
    const send = () => {
        if (user.name && user.phone && user.anotherPhone) {

            sign_in(user)
                .then(x => {
                    swal("ברוך הבא", "ההרשמה בוצעה בהצלחה", "success");
                    localStorage.setItem('token', x.data.token)
                    dispach(SetCurrentUser(x.data.advertiser))
                    nav(`/apartment`)
                })
                .catch(err => {
                    swal("!!!!שגיאה ", `ערך לא תקין`, "error");
                })


        }
    }
    return <>
        <div className='login'>
            <h2 id="h4">הצטרפות</h2>
            <TextField id="outlined-basic" label=" הכנס שם" variant="outlined" onBlur={(e) => setUser({ ...user, name: e.target.value })} />
            <p></p>
            <TextField id="outlined-basic" label=" הכנס טלפון" variant="outlined" onBlur={(e) => setUser({ ...user, phone: e.target.value })} onChange={(e) => checkPhone1(e.target.value)} />
            <p className="error">{errors.phone1}</p>
            <TextField id="outlined-basic" label=" הכנס טלפון נוסף" variant="outlined" onBlur={(e) => setUser({ ...user, anotherPhone: e.target.value })} onChange={(e) => checkPhone2(e.target.value)} />
            <p className="error">{errors.phone2}</p>
            <Button className='buto' onClick={send} variant="contained" endIcon={<SendIcon />}>
                שליחה
            </Button>


        </div>

    </>
}