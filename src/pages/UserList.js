import React from "react";
import { useData } from "../hook/useData"
import MUIDataTable from "mui-datatables";
import { useStyle } from "../assest/style";

function UsersList(props) {

    const [data, setData] = useData();

    console.log("data >>", data)

    const example = [
      {
        "id": 1,
        "name": "delectus aut autem",
        "last-name": "false"
        },
        {
        "id": 2,
        "name": "quis ut nam facilis et officia qui",
        "last-name": "false"
        },
        {
        "id": 3,
        "name": "fugiat veniam minus",
        "last-name": "false"
        },
        {
        "id": 4,
        "name": "et porro tempora",
        "last-name": "true"
        },
        {
        "id": 5,
        "name": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "last-name": "false"
        },

    ]

  
    const columns = [
        {
          name: "id",
          label: "Usuario Id",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "name",
          label: "Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "last-name",
          label: "Last Name",
          options: {
            filter: true,
            sort: true,
          },
        },
      ];

    const classes = useStyle();

    return (
        <div>
            <MUIDataTable title={"Tabla"} data={example} columns={columns} />
        </div>
    );
}

export default UsersList;