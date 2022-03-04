import { useEffect, useState } from "react";
import axios from 'axios'

export const useData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        const name = 'proves_frontend'
        const pass = 'prova1234'

        await axios
            .get(`https://api.lleida.net/admin/v2/?provider=${name}&password=${pass}&request=info`)
            .then((result) => {
                setData(result.data)
            }).catch(error => {
                alert(`Ocurrio un error desconocido: ${error}`);
            })
    }
    return [data]

}