<template>
  
  <div class="row">
    <center>
    <img align="center" src="@/assets/logo.png" >
    
    </center>
    <h1 align="CENTER">Software Request PT Pertamina Retail</h1>
  </div>
  <hr>

  <form class="form-horizontal" ref="form_asset">
    
    <div class="work-experiences">
      <div class="row">
        <div class="row">
       
        <div class="col-md-4">
          <label>
            Nama Pegawai 
          </label>
          <input type="text" class="form-control" :name="name" v-model="name" required>
          <!-- <small id="emailHelp" class="form-text text-muted">Nama BUH Huruf Besar semua. Contoh : SLAMED </small> -->
        </div>
        <div class="col-md-4">
          <label>
            NIP (Nomer Induk Pegawai)
          </label>
          <input type="text" class="form-control" :name="nip" v-model="nip" required>
          <small id="emailHelp" class="form-text text-muted">Silahkan Di input No induk pegawai </small>
        </div>
         <div class="col-md-4">
          <label>
            Fungsi
          </label>
          <input type="text" class="form-control" :name="fungsi" v-model="fungsi" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : ICT/PAM/BPD/HR/SAM</small>

        </div>
        <div class="col-md-4">
          <label>
            Area
          </label>
          <select v-model="area" class="form-select">
            <option disabled value="">Please select one</option>
            <option value="HEAD_OFFICE">HEAD OFFICE</option>
            <option value="SAM_1">SAM 1</option>
            <option value="SAM_2">SAM 2</option>
            <option value="SAM_3">SAM 3</option>
            <option value="SAM_4">SAM 4</option>
            <option value="SAM_5">SAM 5</option>
          </select>
        </div>
        </div>
        
     
       
      </div>
      <hr>
      <h3>
      Data Software {{ unit_business }}
      </h3>

      <div class="row">
      

       <!--  <div class="col-6 ">
          <h5>Cara Pengisian</h5>
          <p>
           <h4> <strong> <a href="https://bit.ly/Cara_pengisian_form" target="_blank">Link Cara Pengisian</a></strong></h4>
            
          </p>
        </div>   -->
        </div>

      <div class="row" v-for="(value,key) in dataAsset" :key="key">

              <div class="col-md-4">
                <label>
                  Nama Software
                </label>
                  <select v-model="value.software" :name="`dataAsset[${key}][software]`" class="form-select">
                  <option disabled value="">Please select one</option>
                  <option value="teamviewer">Team Viewer</option>
                  <option value="thinkcell">Think Cell</option>
                  <option value="office_365">Office 365</option>
                  <option value="adobe_photoshop">Adobe Photoshop</option>
                  <option value="adobe_illustrator">Adobe Illustrator</option>
                  <option value="adobe_after_effect">Adobe After Effect</option>
                  <option value="adobe_light_room">Adobe Lightroom</option>
                  <option value="sketchup">Sketchup</option>
                  <option value="msproject">MS Project</option>
                  <option value="corel_draw">Corel Draw</option>
                  <option value="Kapersky">Kapersky</option>
                  <option value="foxit">Foxit</option>
                  <option value="autocad">Autocad</option>
                  <option value="lainnya">Lainnya</option>

                  </select>
              </div>
               <div class="col-md-4">
              <label>
                Detail Keterangan
              </label>
              <input :name="`dataAsset[${key}][keterangan]`" v-model="value.keterangan" type="text" class="form-control" placeholder="">
               <small id="emailHelp" class="form-text text-muted">Tujuan</small>
           </div>

            <!--   <div class="col-4">
                <label>
                  Tanggal Expired
                </label>
                <input type="text" class="form-control" :name="`dataAsset[${key}][expired_date]`" v-model="value.expired_date" required>
               <small id="emailHelp" class="form-text text-muted">Format YYYY-MM-DD, Contoh Pengisian : 2022-05-10 </small>

              </div> -->
              <div class="col-md-4">
                <label>Delete</label><br>
                 <button @click="removeExperience(key)" type="button" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
              </div>
      </div>
    </div>
    
    <div class="row">
      <p style="text-align:right"><i><strong>Tanda <i style="color:red">*</i> Wajib di isi</strong></i> </p> 

      <div class="form-group">
       <p style="text-align:right"> <button @click="addExperience" type="button" class="btn btn-small btn-success">Add Software<i class="bi bi-file-earmark-plus"></i></button></p>
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


</template>

<script type="text/javascript">
const unique_id = 'ptpr_'+Math.floor(Math.random()*1000)+1
import axios from "axios"
export default {
  name: "SoftwareRegistration",
  mounted(){
   // this.getData(this.base_uri)
   // this.wrangling(this.spbu_data)
     
  },
  data: () => ({
    spbu_data:[],
    dataAsset: [
      {
        software: "",
        // expired_date: "",
        keterangan:"",
        unique_id:unique_id
      }
    ],
    errors:[],
    name:"",
    base_uri: 'https://sheets.googleapis.com/v4/spreadsheets/1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ/values:batchGet?ranges=A1%3AF100&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE',
    spreadsheetId:'1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ',
    API_KEY:'AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE',
    spreadsheetIdInput:'1zVlWTlCFuRNBOZDmQ73xk1F0iKTbpNi2HcCdU5bmULk',
    post_uri:'https://sheets.googleapis.com/v4/spreadsheets/1pzT1k6Or9mBTLC8-X5DkgfBEv2C1h_IP19v6n-sXwTQ/values:batchUpdate?ranges=A1%3AF100&valueRenderOption=FORMATTED_VALUE&key=AIzaSyBesotaNgSaTUIhrSKjEaExdi-ksKInhoE'
  }),
  methods: {
    addExperience () {
      this.dataAsset.push({
        software:"",
        keterangan:"",
        unique_id:unique_id
      })
    },
    removeExperience(index){
      this.dataAsset.splice(index,1);
    },
    submit () {
        this.errors=[];
        
        if (!this.name) {
          this.errors.push('Nama Harus di isi');
          return alert(this.errors)
        }
       
        if (!this.nip) {
          this.errors.push('NIP Harus di isi');
          return  alert(this.errors)
        }
        if (!this.fungsi) {
          this.errors.push('Fungsi Harus di isi');
          return  alert(this.errors)
        }
        if (!this.area) {
          this.errors.push('Area Harus di isi');
          return  alert(this.errors)
        }
        // console.log(this.dataAsset[])
        // if (!this.dataAsset[0]) {
        //   this.errors.push('Jenis Device Harus di isi');
        //   return  alert(this.errors)
        // }
        // if (!this.dataAsset[3]) {
        //   this.errors.push('Quantity Harus di isi');
        //   return  alert(this.errors)
        // }
        // if (!this.condition) {
        //   this.errors.push('Kondisi Harus di isi');
        //   return  alert(this.errors)
        // }
        // if (!this.utilize) {
        //   this.errors.push('Digunakan/Tidak Harus di isi');
        //   return  alert(this.errors)
        // }
        // if (!this.label_asset) {
        //   this.errors.push('Label Harus di isi');
        //   return  alert(this.errors)
        // }


       

      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      

      const data_x = {
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
      // https://sheet.best/api/sheets/f7ac5551-002d-497e-89b8-9334334d7c54 > Expired
      // https://sheet.best/api/sheets/71faa9b4-940e-479c-8c09-29ba0b768196
      // https://sheetdb.io/api/v1/cdzdyqt2zlamw > Fresh API
      axios.post('https://sheetdb.io/api/v1/eplyi1wyjkkv9',{sheet:'data_software', data: [{
        "data_software": this.dataAsset,
        "nama_pegawai": this.name,
        "nip": this.nip,
        "fungsi": this.fungsi,
        "area": this.area,
        "submitted_date": date,
        "unique_id" : unique_id
        } ]
      }).then((res)=>{
        console.log(res)
      }).catch(errors=>{
        console.log(errors.response)
        alert(JSON.stringify(errors.response))
      })
       // alert(JSON.stringify(data, null, 2))
       alert("Data Sudah Sukses terinput ! Terima Kasih")
       location.reload();  

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