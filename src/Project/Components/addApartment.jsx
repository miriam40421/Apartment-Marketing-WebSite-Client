import '../style.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { getAllCat, getAllCity, create } from "../api"
import { useEffect, useState } from "react"
import { useSelector } from 'react-redux';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';

export const AddApartment = () => {
    const currentUser = useSelector(x => x.CurrentUser)
    const [newAp, setNewAp] = useState({})
    const [listCategory, setListCategory] = useState([])
    const [listCity, setListCity] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        getAllCat()
            .then(x => {
                setListCategory(x.data)
                console.log(listCategory);
            })

            .catch(
                x => {
                    console.log(x.message);

                }
            )
    }, [])

    useEffect(() => {
        getAllCity()
            .then(x => {
                setListCity(x.data)
                console.log(listCity);
            })
            .catch(
                x => {
                    console.log(x.message);

                }
            )
    }, [])
    useEffect(() => {
        setNewAp({ ...newAp, codeadvertiser: currentUser._id })

    }, [])


    const save = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        const formData = new FormData();
        formData.append('name', event.target[0].value);
        formData.append('description', event.target[1].value);
        formData.append('adress', event.target[2].value);
        formData.append('numBed', event.target[3].value);
        formData.append('price', event.target[4].value);
        formData.append('more', event.target[5].value);
        formData.append('image', event.target[6].files[0]);
        formData.append('codeCity', event.target[7].value);
        formData.append('codeCategory', event.target[8].value);
        formData.append('codeadvertiser', currentUser._id);
        create(formData).then(x => {
            swal("הדירה נוספה בהצלחה", "בהצלחה רבה", "success")
            nav('/apartment')
        }

        ).catch(
            x => {
                swal("שגיאה", "המערכת נתקלה בבעיה", "error")
            }
        )

    }


    return <>
        <div className="login"><br></br>
            <h1>פרטי הדירה</h1><br></br>
            <form form id="uploadForm" enctype="multipart/form-data" onSubmit={(e) => { save(e) }}>
                <label> שם דירה:</label>
                <br></br>
                <input></input>
                <br></br>
                <label>תאור:</label><br></br>
                <input></input>
                <br></br>
                <label>כתובת:</label><br></br>
                <input></input>
                <br></br>
                <label>מספר מיטות:</label><br></br>
                <input></input>
                <br></br>
                <label>מחיר:</label><br></br>
                <input></input>
                <br></br>
                <label>עוד:</label><br></br>
                <input></input>
                <br></br>
                <label>תמונה:</label><br></br>
                <input id="file" type="file"></input>
                <br></br> <br></br>
                <select className="select">
                    <option disabled selected>בחר איזור</option>
                    {listCity && listCity.map((x, i) =>
                        <option index={i} key={i} value={x._id} >{x.namecity}</option>)}
                </select>
                <select className="select">
                    <option disabled selected>בחר קטגוריה</option>
                    {listCategory && listCategory.map((x, i) =>
                        <option index={i} key={i} value={x._id} >{x.nameCategory}</option>)}
                </select>
                <br></br>
                <button>הוספה</button>
            </form>
        </div>


    </>
}