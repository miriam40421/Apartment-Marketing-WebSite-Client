import axios from "axios"

const baseUrl = `http://localhost:3001`
//advertise
export const getAllAd = () => {
    return axios.get(`${baseUrl}/Advertiser`)
}
export const c=()=>{
return axios.get(`https://jsonplaceholder.typicode.com/todos`)}


export const createAd = (newAd) => {
    return axios.post(`${baseUrl}/Advertiser`, newAd)

}

export const login = (newAd) => {
    return axios.post(`${baseUrl}/Advertiser/login`, newAd)

}
export const sign_in = (newAd) => {
    return axios.post(`${baseUrl}/Advertiser/sign`, newAd)

}
//apartment
export const getAllAp = () => {
    return axios.get(`${baseUrl}/Apartment`)
}
export const getcost= () => {
    return axios.get(`${baseUrl}/Apartment/getWhereCost/:min/:max`)
}
export const getBed = () => {
    return axios.get(`${baseUrl}/Apartment/getWhereBed/:min/:max`)
}
export const getByAdd = (e) => {
    return axios.get(`${baseUrl}/Apartment/getbyAdd/${e}`)
}
export const getByCity = (e) => {
    return axios.get(`${baseUrl}/Apartment/getbyCity/${e}`)
}
export const getByCat= (e) => {
    return axios.get(`${baseUrl}/Apartment/getbyCat/${e}`)
}
export const getById = (id) => {
    return axios.get(`${baseUrl}/Apartment/getbyid/${id}`)
}
export const remove = (id,codeadvertiser) => {
    return axios.delete(`${baseUrl}/Apartment/${id}/${codeadvertiser}`)
}
export const create= (apartment) => {
    const headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
    }
    return axios.post(`${baseUrl}/Apartment`, apartment, { headers})


}
export const update = (id,codeadvertiser,apartment) => {
    return axios.patch(`${baseUrl}/Apartment/${id}/${codeadvertiser}`,apartment)
}


//city
export const getAllCity = () => {
    return axios.get(`${baseUrl}/City`)
}
 export const creatCity = (newAd) => {
    const h={
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }  
     return axios.post(`${baseUrl}/City`, newAd,{headers:h})

}
//category
export const getAllCat = () => {
    return axios.get(`${baseUrl}/Category`)
}
 export const creatCat = (newCat) => {
    const h={
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }  
     return axios.post(`${baseUrl}/Category`, newCat,{headers:h})

}





