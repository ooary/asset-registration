<template>
<div id="app" class="container-fluid">
  <div class="row">
    <center>
    <img align="center" src="@/assets/logo.png" >
    
    </center>
    <h1 align="CENTER">Asset Registration PT Pertamina Retail</h1>
  </div>
  <hr>
  <form class="form-horizontal" ref="form_asset">
    
    <div class="work-experiences">
      <div class="row">
        <div class="col-4">
          <label>
            Unit Business
          </label>

          <select v-model="unit_business" class="form-select" required>
            <option disabled value="">Please select one</option>
            <option >SPBU</option>
            <option >SPKLU</option>
            <option>SPBKLU</option>
            <option>Bright Store</option>
            <option>Bright Cafe</option>
            <option>DC LPG</option>
            <option>Head Office</option>
          </select>
        </div>
        <div class="col-4">
          <label>
            Nama BUH
          </label>
          <input type="text" class="form-control" :name="name" v-model="name" required>
        </div>
        <div class="col-4">
          <label>
            Kode SPBU
          </label>
          <input type="text" class="form-control" :name="kode_spbu" v-model="kode_spbu" required>
          <small id="emailHelp" class="form-text text-muted">kode SPBU tanpa titik. Contoh : 3117105 </small>
        </div>
        <div class="col">
          <label>
            Lokasi
          </label>

          <input type="text" class="form-control" :name="lokasi" v-model="lokasi" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : SPBU BOGOR JONGGOL </small>

        </div>
        <div class="col">
          <label>
            Alamat
          </label>
          <input type="text" class="form-control" :name="alamat" v-model="alamat" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : Perum Citra Indah, Jl. Raya Cileungsi - Jonggol, Kec.Cileungsi Kab.Bogor 16830</small>

        </div>
        <div class="col">
          <label>
            SAM
          </label>
          <select v-model="sam" class="form-select">
            <option disabled value="">Please select one</option>
            <option>SAM 1</option>
            <option>SAM 2</option>
            <option>SAM 3</option>
            <option>SAM 4</option>
            <option>SAM 5</option>
          </select>
        </div>
      </div>
      <hr>
      <h3>
      Data IT Asset / Devices {{ unit_business }}
      </h3>
      <small id="emailHelp" class="form-text text-muted">Format Pengisian <strong>Delivery Date dan Expired Date : Bulan - Tahun ( 05-2022 ) </strong></small>

      <div class="row">
        
        <table class="table table-bordered table-responsive table-striped table-highlight">
          <thead>
            <tr>
              <th>Jenis Devices</th>
              <th>MERK</th>
              <th>SERVICE TAG</th>
              <th>QTY</th>
              <th>STATUS KEPEMILIKAN</th>
              <th>DELIVERY DATE</th>
              <th>EXPIRED DATE</th>
              <th>CONDITION</th>
              <th>DIGUNAKAN/TIDAK</th>
              <th>LABEL ASSET</th>
              <th>KETERANGAN</th>
            </tr>
          </thead>
          
          <tbody>
            <tr v-for="(experience, index) in dataAsset" :key="index">
              <td>
                <div class="col-mx-3">
                  <select v-model="experience.device" class="form-select">
                    <option disabled value="">Please select one</option>
                    <option>Laptop</option>
                    <option>PC</option>
                    <option>EDC</option>
                    <option>PRINTER</option>
                    <option>UPS</option>
                    <option>MONITOR</option>
                    <option>KEYBOARD</option>
                    <option>PROBE</option>
                    <option>ATG-CONSOLE</option>
                    <option>ENABLER</option>
                    <option>CONSOLE SELF SERVICE</option>
                    <option>CCTV</option>
                    <option>MODEM</option>
                    <option>ROUTER</option>
                    <option>LAINNYA</option>
                  </select>
                </div>
                
                
              </td>
              <td>
                
                <input v-model="experience.merk" :name="`dataAsset[${index}][merk]`" type="text" class="form-control" >
                
              </td>
              <td>
                
                <input v-model="experience.service_tag" :name="`dataAsset[${index}][service_tag]`" type="text" class="form-control">
                
              </td>
              <td>
                
                <input v-model="experience.qty" :name="`dataAsset[${index}][qty]`" type="number" class="form-control" required >
                
              </td>
              <td>
                
                <select v-model="experience.status_kepemilikan" :name="`dataAsset[${index}][status_kepemilikan]`" class="form-select" required>
                  <option disabled value="">Please select one</option>
                  <!--    <option v-for="(owner,key) in ownership" :value="owner.value" :key="key">
                    {{owner.text}}
                  </option> -->
                  
                  <option>Sewa</option>
                  <option>Asset</option>
                  <option>Manage Services</option>
                </select>
                
              </td>
              <td>
                
                <input v-model="experience.delivery_date" :name="`dataAsset[${index}][delivery_date]`" type="text" class="form-control" placeholder="delivery_date">
                
              </td>
              <td>
                
                <input v-model="experience.expired_date" :name="`dataAsset[${index}][expired_date]`" type="text" class="form-control" placeholder="expired_date">
                
              </td>
              <td>
                
                <select v-model="experience.condition" :name="`dataAsset[${index}][condition]`" class="form-select">
                  <option disabled value="">Please select one</option>
                  <option>Baik</option>
                  <option>Rusak</option>
                  
                </select>
                
              </td>
              <td>
                <select v-model="experience.utilize" class="form-select" :name="`dataAsset[${index}][condition]`" >
                  <option>digunakan</option>
                  <option>Tidak di gunakan</option>
                  
                </select>
                
              </td>
              <td>
                
                <select v-model="experience.label_asset" class="form-select">
                  <option disabled value="">Please select one</option>
                  <option>Ada</option>
                  <option>Tidak ada</option>
                  
                </select>
                
              </td>
              <td>
                
                <input v-model="experience.keterangan" :name="`dataAsset[${index}][keterangan]`" type="text" class="form-control" placeholder="keterangan">
                
              </td>
              <td>
                
                <button @click="removeExperience(index)" type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
                
              </td>
            </tr>
            
            
          </tbody>
        </table>
        
        
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <button @click="addExperience" type="button" class="btn btn-small btn-success">Add Device<i class="bi bi-plus"></i></button>
      </div>
    </div>
    <hr>
    <table class="table table-white">
      <div v-for="(datas,index) in spbu_data">
        <thead>
          <tr>
            <th scope="col">{{datas.values[0][1]}}</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        
        <tbody>
          
          <tr v-for="x in datas.values">
            <td scope="col">{{x[1]}}</td>
            <td>{{x[2]}}</td>
            <td>{{x[3]}}</td>
          </tr>
        </tbody>
        
      </div>
      
    </table>
    
    
    <div class="row">
      <div class="form-group">
        <button @click="submit" type="button" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</div>
</template>



<script>
import axios from "axios"
export default {
  name: "App",
  mounted(){
   // this.getData(this.base_uri)
   // this.wrangling(this.spbu_data)
  },

  data: () => ({
    spbu_data:[],
    dataAsset: [
      {
        merk: "",
        device: "",
        spbu:"",
        qty:"",
        service_tag:"",
        condition:"",
        utilize:"",
        keterangan:"",
        label_asset:"",
        status_kepemilikan:"",

      }
    ],
    name:"",
    ownership: [
      { value:"sewa",text:"sewa" },
      { value:"asset",text:"Asset" },
      { value:"Manage_services",text:"Manage Services" }
    ],
    base_uri: 'https://sheets.googleapis.com/v4/spreadsheets/1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ/values:batchGet?ranges=A1%3AF100&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE',
    spreadsheetId:'1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ',
    API_KEY:'AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE',
    spreadsheetIdInput:'1zVlWTlCFuRNBOZDmQ73xk1F0iKTbpNi2HcCdU5bmULk',
    post_uri:'https://sheets.googleapis.com/v4/spreadsheets/1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ/values:batchUpdate?ranges=A1%3AF100&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE'
  }),
  methods: {
    addExperience () {
      this.dataAsset.push({
        merk: "",
        device: "",
        spbu:"",
        qty:"",
        service_tag:"",
        condition:"",
        utilize:"",
        keterangan:"",
        label_asset:"",
        status_kepemilikan:"",
      })
    },
    removeExperience(index){
      this.dataAsset.splice(index,1);
    },
    submit () {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

      const data = {
        data_asset: this.dataAsset,
        nama_buh: this.name,
        unit_business:this.unit_business,
        alamat:this.alamat,
        sam:this.sam,
        kode_spbu:this.kode_spbu,
        lokasi:this.lokasi,
        submitted_date: date
        }
      // https://sheetdb.io/api/v1/cz16jbo7bahwt
      // https://sheet.best/api/sheets/f7ac5551-002d-497e-89b8-9334334d7c54
      
      axios.post('https://sheet.best/api/sheets/f7ac5551-002d-497e-89b8-9334334d7c54',data).then((res)=>{
        console.log(res)
      })
       // alert(JSON.stringify(data, null, 2))
       alert("Data Sudah Sukses terinput ! Terima Kasih")
         window.location.reload();

    },
    getData(apiUrl) {
            axios.get(apiUrl).then((res) => {
                this.spbu_data = res.data.valueRanges                
                // console.log(this.spbu_data)
            });
            // .catch(error => console.log(error));
        }
  }
};
</script>

<style>
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}

</style>
