import { useEffect, useState } from "react";
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
  // const url = "https://fakestoreapi.com/products";
  const url = "http://localhost:8001/forming";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const dataUsers = await response.json();
    setUsers(dataUsers);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <div className="Homepages">
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
              {users.map((data, index) => (
                <tr key={index + 1}>
                  <td>{data?.id}</td>
                  <td>{data?.nama}</td>
                  <td>{data?.nik}</td>
                  <td>{data?.jk}</td>
                  <td>{data?.tempat}</td>
                  <td>{data?.tanggal}</td>
                  <td>{data?.ranting}</td>
                </tr>
              ))}
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
