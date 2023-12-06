import MYCARD from "../../components/myCard/myCardX";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MYTEXT from "../../components/myText/myText.js";
import DataTable from "react-data-table-component";
import { getAllPizzas } from "../../middleware/pizzas/pizzas.js";
function menu() {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    /*
    const apiUrl = `${import.meta.env.VITE_SOME_KEY}/pizzas/readPizza`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });


    */
    const allPizzas = await getAllPizzas();

    setData(allPizzas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      name: "SKU",
      selector: (row) => row.sku,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
  ];

  return (
    <>
      <MYTEXT name="Menu" />
      <DataTable columns={columns} data={Data} />
    </>
  );
}

export default menu;

/*     {Data.map((pizza) => (
        <MYCARD name={pizza.name} description={pizza.price} />
      ))}
        */
