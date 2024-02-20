import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Table } from "react-bootstrap";
import {
  Chart as ChartJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

ChartJs.register(
  LineElement,
  BarElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const HomePages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const date = {
    labels: ["Gondrong", "Petir", "Cipondoh", "Ketapang", "Kenanga", "Poris"],
    datasets: [
      {
        label: "Penambahan Data Tiap Bulan",
        data: [30, 33, 54, 34, 66, 32],
        borderColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        tension: 0.4,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {};
  const columns = [
    {
      name: "Nama",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Nik",
      selector: (row) => row.nik,
    },
    {
      name: "Tempat Lahir",
      selector: (row) => row.tept,
    },

    {
      name: "Tanggal Lahir",
      selector: (row) => row.tgllhr,
    },
    {
      name: "Asal Ranting",
      selector: (row) => row.asal,
    },
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name
        .toLowerCase()
        .includes(
          event.target.value.toLowerCase(),
          row.nik
            .toLocaleLowerCase()
            .includes(event.target.value.toLocaleLowerCase())
        );
    });
    setRecords(newData);
  }

  return (
    <div className="Homepages">
      <div className="chart">
        <Line data={date} options={options} />
      </div>
      <div className="row-hp">
        <div className="col-hp ">
          Ranting Gondrong
          <h1>76</h1>
        </div>
        <div className="col-hp">
          Ranting Cipondoh
          <h1>61</h1>
        </div>
        <div className="col-hp">
          Ranting Petir
          <h1>53</h1>
        </div>
        <div className="col-hp">
          Ranting Ketapang
          <h1>12</h1>
        </div>
        <div className="col-hp">
          Ranting Kenanga
          <h1>35</h1>
        </div>
        <div className="col-hp">
          Ranting Poris Jaya
          <h1>38</h1>
        </div>
      </div>
      <div className="ContentData">
        <h2> DATA BASE WARGA MUHAMMADIYAH</h2>
        <div className="text-end">
          <a href="/TambahDataJamaah" className="btn btn-primary">
            +
          </a>
          <input
            className="Search"
            placeholder="Cari By Nama
            
            
            "
            onChange={handleFilter}
            type="text"
          />
        </div>

        <Table
          bgcolor="dark"
          striped
          border
          hover
          id="datatable"
          className="table"
        >
          <thread>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Nik</th>
              <th>Jenis Kelamin</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Asal Ranting</th>
              <th>Action</th>
            </tr>
            <tbody>
              {data.map((dbmu, index) => {
                return (
                  <tr key={index}>
                    <td>{dbmu.id}</td>
                    <td>{dbmu.nama}</td>
                    <td>{dbmu.nik}</td>
                    <td>{dbmu.jk}</td>
                    <td>{dbmu.temp_lhr}</td>
                    <td>{dbmu.tgl_lhr}</td>
                    <td>{dbmu.a_ranting}</td>
                    <td>
                      <button className="btn btn-primary">edit</button>
                      <button className="btn btn-danger">delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </thread>
        </Table>

        {/* <DataTable
          columns={columns}
          data={data}
          selectableRows
          fixedHeader
          pagination
        ></DataTable> */}
      </div>
    </div>
  );
};

export default HomePages;
