
<template>

<div id="app" class="container-fluid">
 
  <div class="row">
    <center>
    <img align="center" src="@/assets/logo.png" >
    
    </center>
    <h1 align="CENTER">IT Devices Registration PT Pertamina Retail</h1>
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
            <option value="spbu">SPBU</option>
            <option value="spklu">SPKLU</option>
            <option value="spbklu">SPBKLU</option>
            <option value="bright_store">Bright Store</option>
            <option value="bright_cafe">Bright Cafe</option>
            <option value="dc_lpg">DC LPG</option>
            <option value="head_office">Head Office</option>
          </select>
        </div>
        <div class="col-4">
          <label>
            Nama BUH
          </label>
          <input type="text" class="form-control" :name="name" v-model="name" required>
          <small id="emailHelp" class="form-text text-muted">Nama BUH Huruf Besar semua. Contoh : SLAMED </small>

        </div>
        <div class="col-4">
          <label>
            Kode Unit Business/SPBU
          </label>
          <input type="text" class="form-control" :name="kode_spbu" v-model="kode_spbu" required>
          <small id="emailHelp" class="form-text text-muted">Kode Unit Business/SPBU tanpa titik. Contoh : 3117105 </small>
        </div>
        <div class="col">
          <label>
            Lokasi
          </label>

          <input type="text" class="form-control" :name="lokasi" v-model="lokasi" required>
          <small id="emailHelp" class="form-text text-muted">Contoh Pengisian Lokasi : SPBU BOGOR JONGGOL </small>

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
            <option value="SAM_1">SAM 1</option>
            <option value="SAM_2">SAM 2</option>
            <option value="SAM_3">SAM 3</option>
            <option value="SAM_4">SAM 4</option>
            <option value="SAM_5">SAM 5</option>
          </select>
        </div>
      </div>
      <hr>
      <h3>
      Data IT Asset / Devices {{ unit_business }}
      </h3>

      <div class="row">
      
        <div class="col-6 text-muted">
          <p>
            <strong>Delivery Date dan Expired Date : </strong> Bulan - Tahun ( 05-2022 ) 
           <p> <strong> Status Kepemilikan Managed Services :</strong> Secara Perangkat tidak sewa, Hanya Saja Pelayanannya yang PTPR Sewa. Contoh  : Modem Pepwave Emagic</p>  
          </p>
        </div>
        <div class="col-6 ">
          <h5>Cara Pengisian</h5>
          <p>
            <a href="https://bit.ly/Cara_pengisian_form" target="_blank">Link Cara Pengisian</a>
            
          </p>
        </div>  
        </div>

      <div class="row">
        
        <table class="table table-bordered table-responsive table-striped table-highlight">
          <thead>
            <tr>
              <th><i style="color:red">*</i> Jenis Devices</th>
              <th>MERK</th>
              <th>SERVICE TAG/SN</th>
              <th><i style="color:red">*</i> QTY</th>
              <th>STATUS KEPEMILIKAN</th>
              <th>DELIVERY DATE</th>
              <th>EXPIRED DATE</th>
              <th><i style="color:red">*</i> CONDITION</th>
              <th><i style="color:red">*</i> DIGUNAKAN/TIDAK</th>
              <th><i style="color:red">*</i> LABEL ASSET</th>
              <th>KETERANGAN</th>
              <th>Action</th>
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
                
                <input v-model="experience.qty" :name="`dataAsset[${index}][qty]`" type="text" class="form-control" required >
                
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
                
                <input v-model="experience.delivery_date" :name="`dataAsset[${index}][delivery_date]`" type="text" class="form-control">
                
              </td>
              <td>
                
                <input v-model="experience.expired_date" :name="`dataAsset[${index}][expired_date]`" type="text" class="form-control">
                
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
      <p style="text-align:right"><i><strong>Tanda <i style="color:red">*</i> Wajib di isi</strong></i> </p> 

      <div class="form-group">
       <p style="text-align:right"> <button @click="addExperience" type="button" class="btn btn-small btn-success">Add Device<i class="bi bi-file-earmark-plus"></i></button></p>
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
       <center> <button @click="submit" type="button" class="btn col-12 btn-block btn-lg btn-primary">Submit</button></center>
      </div>
    </div>
  </form>
</div>
</template>



<script>
const unique_id = 'ptpr_'+Math.floor(Math.random()*1000)+1
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
        qty:"",
        service_tag:"",
        condition:"",
        utilize:"",
        keterangan:"",
        label_asset:"",
        status_kepemilikan:"",
        keterangan:"",
        unique_id:unique_id

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
        qty:"",
        service_tag:"",
        condition:"",
        utilize:"",
        keterangan:"",
        label_asset:"",
        status_kepemilikan:"",
        keterangan:"",
        unique_id:unique_id
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
        submitted_date: date,
        unique_id : unique_id

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
