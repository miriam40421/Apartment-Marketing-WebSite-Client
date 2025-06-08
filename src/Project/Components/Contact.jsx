import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import swal from 'sweetalert'

export const Contact = () => {
    const nav = useNavigate()
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const checMail = (value) => {
        const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!value.match(mailRegex)) {
            setError('הכנס כתובת  מייל תקינה')
        }
        else {
            setError('')
        }

    }
    const send = () => {
        if (error != '')
            swal("שגיאה", "הכנס כתובת מייל תקינה", "error")

        else if (name != '') {
            swal("הפניה התקבלה במערכת", "נשתדל לחזור אליכם בהקדם", "success")
            nav(`/home`)
        }
        else
            swal("אופססס", "?לאיפה נחזיר תגובה", "info")

    }
    return <>
        <div id="con">
            <img className="n" id="mylogo" src="logo5.png"></img>
            <div className='mylogin'>

                <h2 id="h4">ליצירת קשר</h2>
                <TextField id="outlined-basic" label=" הכנס כתובת מייל" variant="outlined" className="text" onBlur={e => setName(e.target.value)} onChange={e => { checMail(e.target.value) }} />
                <p className="error">{error}</p>
                <textarea placeholder="הערות והארות" id="t"></textarea>
                <br></br>
                <Button className='buto' variant="contained" onClick={() => { send() }}>
                    אישור
                </Button>
            </div>
        </div>
    </>
}