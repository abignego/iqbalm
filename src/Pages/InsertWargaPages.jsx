const InsertWargaPages = () => {
  return (
    <form action="#">
      <div className="FormInputData">
        <div className="ContainerIn">
          <div className="input-box">
            <h3 className="">REGISTER</h3>
            <hr />
            <span>Nama Lengkap</span>
            <input
              onInvalid={"Masukan nma"}
              className="Inputed"
              type="text"
              name=""
              id=""
              placeholder="Masukan Nama"
            />
          </div>
          <div className="input-box">
            <span>NIK</span>
            <input
              onInvalid={"Masukan nma"}
              className="Inputed"
              type="text"
              name=""
              id=""
              placeholder="Masukan Nik"
            />
          </div>
          <div className="input-box">
            <span>Tempat Lahir</span>
            <input
              onInvalid={"Masukan nma"}
              className="Inputed"
              type="text"
              name=""
              id=""
              placeholder="Masukan Tempat Lahir"
            />
          </div>
          <div className="input-box">
            <span>Tanggal Lahir</span>
            <input
              onInvalid={"Masukan nma"}
              className="Inputed"
              type="date"
              name=""
              id=""
              placeholder=""
            />
          </div>
          <div className="input-select">
            <span>Asal Ranting</span>
            <select name="ranting" id="ranting" className="Selection">
              <option value="Ranting Gondrong">Ranting Gondrong</option>
              <option value="Ranting Petir">Ranting Petir</option>
              <option value="Ranting Cipondoh">Ranting Cipondoh</option>
              <option value="Ranting Ketapang">Ranting Ketapang</option>
              <option value="Ranting Kenanga">Ranting Kenanga</option>
              <option value="Ranting Poris">Ranting Poris</option>
            </select>
          </div>

          <div className="button">
            <input type="submit" className="btn btn-primary" value="Register" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InsertWargaPages;
