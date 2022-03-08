import React, { useState, useEffect } from 'react'
import { useData } from "../hook/useData"
import MUIDataTable from "mui-datatables";
import { useStyle } from "../assest/style";

function UsersList(props) {

  const classes = useStyle();
  const [data, setData] = useData([]);

  const users = data?.user_list?.users

  const columns = [
    {
      name: "created",
      label: "Created",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "contact_name",
      label: "Contact Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "mail",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];


  console.log("user >>>", users)

  return (
    <div>
      <MUIDataTable title={"Lista de Usuarios"} data={users} columns={columns} />
    </div>
  );
}

export default UsersList;