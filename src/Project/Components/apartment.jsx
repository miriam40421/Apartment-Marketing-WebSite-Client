
import { useEffect, useState } from "react"
import { getAllAp, getByAdd, getByCity, getByCat, getAllCat, getAllCity, getAllAd, remove } from "../api"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Tooltip } from '@mui/material';
import { useNavigate } from "react-router-dom";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import swal from "sweetalert";
import { Contact } from "./Contact";
import "../style.css"
import { useSelector } from "react-redux";
export const Apartment = () => {
    const [listAp, setListAp] = useState([])
    const [listCategory, setListCategory] = useState([])
    const [listCity, setListCity] = useState([])
    const [listAd, setListAd] = useState([])
    const [listFilter, setlistFilter] = useState([])
    const nav = useNavigate()

    const getApartment = () => {
        getAllAp()
            .then(x => {
                setListAp(x.data)
                setlistFilter(x.data)
                console.log(listFilter);
            })
            .catch(
                x => {
                    console.log(x.message);

                }
            )
    }
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

    useEffect(() => {
        getApartment()
    }, [])

    const filterCat = (e) => {
        getByCat(e)
            .then(x => {
                setlistFilter(x.data)

            })

            .catch(
                x => {
                    console.log(x.message);
                    setlistFilter([])


                }
            )
    }

    const filterCity = (e) => {
        getByCity(e)
            .then(x => {
                setlistFilter(x.data)
                console.log(listFilter);
            })
            .catch(
                x => {
                    console.log(x.message);
                    setlistFilter([])


                }
            )

    }
    const filterAd = (e) => {
        getByAdd(e)
            .then(x => {
                setlistFilter(x.data)
                console.log(listFilter);
            })
            .catch(
                x => {
                    console.log(x.message);
                    setlistFilter([])


                }
            )
    }
    const currentUser = useSelector(x => x.CurrentUser)
    const del = (id) => {
        remove(id, currentUser._id).then(x => {
            getApartment()
        })
            .catch(e => {
                if (e.response.status == 404) {
                    swal("שגיאה", "אינך רשאי", "error");
                };

                swal("שגיאה", "אינך רשאי", "error");

            })
    }
    const baseUrl = `http://localhost:3001`

    return <>
        <br></br><br></br>
        <Tooltip title="הוספה">
            <AddBusinessIcon id="Ho" onClick={() => nav(`/addApartment`)}></AddBusinessIcon>
        </Tooltip>
        <select className="select"
            onChange={(e) => filterCat(e.target.value)}>
            <option disabled selected>סנן לפי קטגוריה</option>
            {listCategory && listCategory.map((item, index) =>
                <option key={index} index={index} value={item._id}>{item.nameCategory}</option>
            )}
        </select>
        <select className="select"
            onChange={(e) => filterCity(e.target.value)} >
            <option disabled selected>סנן לפי עיר</option>
            {listCity && listCity.map((item, index) =>
                <option key={index} index={index} value={item._id}>{item.namecity}</option>
            )}
        </select>

        <select className="select"
            onChange={(e) => filterAd(e.target.value)}>
            <option disabled selected>סנן לפי מפרסם</option>
            {listAd && listAd.map((item, index) =>
                <option key={index} index={index} value={item._id}>{item.name}</option>)}
        </select>
        <button id="cancel" onClick={() => setlistFilter(getApartment())}>בטל סינונים</button><br></br><br></br>
        <div id="all">

            {listFilter && listFilter.map((item, index) =>
                <div key={index} index={index} id="cardiv">
                    {item.image && <div>
                        <img src={`${baseUrl}/${item.image.substring(8)}`} id="img"></img> </div>}
                    <h2> שם:{item.name}</h2>
                    <h2 >מספר מקומות: {item.description}</h2>
                    <h2 >כתובת:{item.adress}</h2>
                    <h2 >מספר מיטות:{item.numBed}</h2>
                    <h2 >עוד...: {item.more}</h2>
                    <h2 >מחיר:{item.price}</h2>
                    <Tooltip title="מחיקה">
                        <DeleteForeverIcon id="Ho" onClick={() => del(item._id)}></DeleteForeverIcon>
                    </Tooltip>

                    <Tooltip title="עדכון">
                        <ChangeCircleIcon id="Ho" onClick={() => nav(`/update/${item._id}`)}></ChangeCircleIcon>
                    </Tooltip>
                </div>
            )
            }
        </div>
        <Contact></Contact>

    </>
}
