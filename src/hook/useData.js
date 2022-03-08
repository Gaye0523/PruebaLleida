import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

export const useData = () => {
    const [data, setData] = useState([]);

    const { name } = useParams()
    const { password} = useParams()

    useEffect(() => {
        getData(name, password)
    }, [name, password]);
    const getData = async (username, password) => {

        console.log("username", username)
        console.log("password", password)

        await axios
            .post(`https://api.lleida.net/admin/v2/?provider=${username}&password=${password}&request=list`)
            .then((result) => {
                setData(result.data)
            }).catch(error => {
                alert(`Ocurrio un error desconocido: ${error}`);
            })
    }
    return [data]

}
