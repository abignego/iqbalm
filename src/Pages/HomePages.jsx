<<<<<<< HEAD
const HomePages = () => {
  return <div>HomePages</div>;
};

=======
import { Table, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const HomePages = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Masukan Data Diri Anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <label htmlFor="">Isikan Nama </label>
              <input type="text" placeholder=" Isi Nama" />
            </li>
            <button>a</button>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <hr />
      <div className="ContentData">
        <h2> DATA BASE WARGA MUHAMMADIYAH</h2>{" "}
        <Button variant="primary" onClick={handleShow}>
          Tambah Data
        </Button>
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
                <button className="btn btn-secondary"> Ubah</button>
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
    </>
  );
};

>>>>>>> 8c90d0d (test)
export default HomePages;
