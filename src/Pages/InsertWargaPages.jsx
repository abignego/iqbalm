import { useState } from "react";
import axios from "axios";

function InsertWargaPages() {
  const [values, setValues] = useState({
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:8081/tb_datainduk", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="ContentIWP">
      <form onSubmit={handleSubmit}>
        <div className="BodyIn">
          <div className="ContainerIn">
            <span>
              {" "}
              <h3>Register</h3>
            </span>
            <form action="">
              <div className="row">
                <div className="column">
                  <label htmlFor="">Masukan Nama</label>
                  <input
                    className="Inputed"
                    type="text"
                    placeholder="Masukan Nama"
                    name="name"
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>

                <div className="column">
                  <label htmlFor="">Jenis Kelamin</label>

                  <br />
                  <select id="jenis kelamin" name="JK" className="Inputed">
                    <option value="" placeholder="Nama">
                      --Pilih Jenis Kelamin--{" "}
                    </option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>{" "}
                  </select>
                </div>
                <div className="column">
                  <label htmlFor="">NIK</label>
                  <input
                    className="Inputed"
                    type="text"
                    placeholder="Masukan Nik"
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label htmlFor="">Tempat Lahir</label>
                  <input
                    className="Inputed"
                    type="text"
                    placeholder="Masukan Nama"
                  />
                </div>
                <div className="column">
                  <label htmlFor="">Tanggal Lahir</label>
                  <input className="Inputed" type="date" id="" />
                </div>
                <div className="column">
                  <span htmlFor=""> Asal Ranting </span>
                  <br />
                  <select id="cars" name="cars" className="Inputed">
                    <option value="" placeholder="Nama">
                      --Pilih Ranting--{" "}
                    </option>
                    <option value="Ranting Gondrong">Ranting Gondrong</option>
                    <option
                      value="Ranting Cipondoh"
                      onChange={(e) =>
                        setValues({ ...values, a_ranting: e.target.value })
                      }
                    >
                      Ranting Cipondoh
                    </option>
                    <option value="Ranting Poris">Ranting Poris</option>
                    <option value="Ranting Ketapang">Ranting Ketapang</option>
                  </select>
                </div>
              </div>
              {/* <div className="row">
                <div className="column">
                  <label htmlFor="">Alamat</label>
                  <textarea
                    onChange={(e) =>
                      setValues({ ...values, alamat: e.target.value })
                    }
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
              </div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InsertWargaPages;
