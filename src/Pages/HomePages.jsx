import { Table } from "react-bootstrap";
import { PieChart, Cell, Pie } from "recharts";

const HomePages = () => {
  const data = [
    { name: "Ranting Gondrong", value: 1002 },
    { name: "Ranting Petir", value: 1002 },
    { name: "Ranting Ketapang", value: 1002 },
    { name: "Ranting Kenanga", value: 1002 },
    { name: "Ranting Cipondoh", value: 100 },
    { name: "Ranting Poris", value: 100 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="Homepages">
      <div className="chartkiri">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="chart-kanan">
        <span>
          <h3>RANTING GONDRONG {}</h3>
          <h3>RANTING Petir {}</h3>
        </span>
      </div>

      <div className="ContentData">
        <h2> DATA BASE WARGA MUHAMMADIYAH</h2>{" "}
        <a href="/TambahDataJamaah" className="btn btn-primary">
          {" "}
          Tambah Data
        </a>
        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>NIK</th>
              <th>NAMA</th>
              <th>TEMPAT</th>
              <th>TANGGAL LAHIR</th>
              <th>ALAMAT</th>
              <th>RANTING ASAL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>367100000001</td>
              <td>Opet</td>
              <td>Tangerang</td>
              <td>04-08-1999</td>
              <td>Jl Kihajar Dewantoro</td>
              <td>Gondrong</td>
              <td>
                <a href="/faq">as</a>
                <button className="btn btn-secondary" id="">
                  {" "}
                  Ubah
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>367100000001</td>
              <td>Nano</td>
              <td>Tangerang</td>
              <td>04-08-1999</td>
              <td>Jl Kihajar Dewantoro</td>
              <td>Gondrong</td>
              <td>
                <button className="btn btn-secondary"> Ubah</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>367100000001</td>
              <td>Loren</td>
              <td>Tangerang</td>
              <td>04-08-1999</td>
              <td>Jl Kihajar Dewantoro</td>
              <td>Gondrong</td>
              <td>
                <button className="btn btn-secondary"> Ubah</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default HomePages;
