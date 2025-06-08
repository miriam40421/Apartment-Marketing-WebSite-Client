import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getAllAp, getByAdd, getByCity, getByCat, remove, getById, update } from "../api"
import { useState } from 'react';
import { SetCurrentUser } from "../Redux/Action";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export const Update = () => {
  const currentUser = useSelector(x => x.CurrentUser)
  const params = useParams();



  const [a, seta] = useState({})
  const [updateAp, setupdateAp] = useState({})


  useEffect(() => {
    getById(params.id)
      .then(x => {
        seta(x.data.Apartment)
        setupdateAp(x.data.Apartment)
        console.log(a);
      })
      .catch(
        x => {
          console.log(x.message);

        }
      )
  }, [])


  const nav = useNavigate();

  const save = (res, req) => {
    console.log(a);
    console.log(updateAp);

    update(params.id, currentUser._id, updateAp).then(x => {
      nav('/apartment')
    })
      .catch(x => {

      })
  }
  return <>
    {currentUser && <p>{currentUser.email}</p>}
    <div className="login">
      {a &&
        <div>
          <input placeholder='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, name: e.target.value })}></input>

          <h3>תאור: {a.description}</h3>
          <input placeholder='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, description: e.target.value })}></input>

          <h3>תמונה:{a.Apartmentimg}</h3>
          <input type='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, img: e.target.value })}></input>

          <h3>שם דירה {a.codeCategory}</h3>
          <h3>שם דירה: {a.codeCity}</h3>
          <h3>כתובת: {a.adress}</h3>
          <h3>מספר מיטות: {a.numBed}</h3>
          <input placeholder='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, numBed: e.target.value })}></input>
          <h3>עוד...: {a.more}</h3>
          <input placeholder='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, more: e.target.value })}></input>
          <h3>מחיר: {a.price}</h3>
          <input placeholder='שינוי' onBlur={(e) => setupdateAp({ ...updateAp, price: e.target.value })}></input>
        </div>}
      <Button className='buto' onClick={() => save()} variant="contained" endIcon={<SendIcon />}>
        עדכון הדירה
      </Button>
    </div>

  </>
}