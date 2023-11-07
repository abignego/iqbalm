

const InsertWargaPages = () => {
  return (
    <form action="#">

  
        <div className="FormInputData" >
            <h4>Masukan Data Diri !!!</h4> 
      <div className="ContainerIn">
      <div className="input-box">
        <span >Nama Lengkap</span>
        <input onInvalid={"Masukan nma"} className="Inputed" type="text" name="" id="" placeholder="Masukan Nama" />
      </div>
      <div className="input-box">
        <span >NIK</span>
        <input onInvalid={"Masukan nma"} className="Inputed" type="text" name="" id="" placeholder="Masukan Nik" />
      </div>
      <div className="input-box">
        <span >Tempat</span>
        <input onInvalid={"Masukan nma"} className="Inputed" type="text" name="" id="" placeholder="Masukan Nik" />
      </div>
      <div className="input-box">
        <span >Tanggal Lahir</span>
        <input onInvalid={"Masukan nma"} className="Inputed" type="date" name="" id="" placeholder="Masukan Nik" />
      </div>
      <div className="input-radio">
        <span >Ranting</span>
        <select name="ranting" id="ranting">
    <option value="Ranting Gondrong">Ranting Gondrong</option>
    <option value="Ranting Petir">Ranting Petir</option>
    <option value="Ranting Cipondoh">Ranting Cipondoh</option>
    <option value="Ranting Ketapang">Ranting Ketapang</option>
    <option value="Ranting Kenanga">Ranting Kenanga</option>
    <option value="Ranting Poris">Ranting Poris</option>
  </select>
       
      </div>

      <div className="button">

      <input type="submit" className="btn btn-primary" value="Register"/>
      </div>
        </div> 
    </div>
    </form>
      
  )
}

export default InsertWargaPages
