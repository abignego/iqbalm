import { Table } from "react-bootstrap";



const HomePages = () => {

  return (
    <div className="Homepages">
   

      <div className="ContentData">
        <h2> DATA BASE WARGA MUHAMMADIYAH</h2>{" "}
      
       
        <a href="/TambahDataJamaah" className="btn btn-primary"> Tambah Data</a>
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
