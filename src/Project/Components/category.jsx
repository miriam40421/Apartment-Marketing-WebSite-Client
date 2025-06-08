import React from "react";
import { getAllCat } from "../api"
import { useEffect, useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { AddBox } from '@mui/icons-material';

import { Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";
export const Category = () => {
    const nav = useNavigate()
    const [listCategory, setListCategory] = useState([])

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
    return <>
        <Tooltip title="הוספה">
            <AddBox onClick={() => nav(`/addCategory`)}></AddBox>
        </Tooltip>
        <div id="all">
            {listCategory && listCategory.map((item, index) =>
                <div key={index} index={index} id="alladdcar">

                    <div
                    >
                        <h2> שם:{item.nameCategory}</h2>
                        <p>{item.arrApartment.length}  :מספר הדירות הקימות בקטגוריה זו</p>
                    </div>
                </div >

            )
            }
        </div>
    </>

}