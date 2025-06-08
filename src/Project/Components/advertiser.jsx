import React from "react";
import { getAllAd } from "../api"
import { useEffect, useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";
export const Advertiser = () => {
    const nav = useNavigate()
    const [listAd, setListAd] = useState([])

    useEffect(() => {
        getAllAd()
            .then(x => {
                setListAd(x.data)
                console.log(listAd);
            })

            .catch(
                x => {
                    console.log(x.message);

                }
            )
    }, [])
    return <>
        <div id="all">
            {listAd && listAd.map((item, index) =>
                <div key={index} index={index} >
                    <div
                        id="alladdcar">
                        <h2> שם:{item.name}</h2>
                        <h2> מייל:{item.email}</h2>
                        <h2> טלפון:{item.phone}</h2>
                        <h2> פלא נוסף:{item.anotherPhone}</h2>
                    </div>
                </div >

            )
            }
        </div>
    </>

}