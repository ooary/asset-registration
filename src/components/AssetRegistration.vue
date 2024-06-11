<template>
  
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 text-center">
                <img src="@/assets/logo.png" class="img-fluid" alt="Logo">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12">
                <h1 class="text-center">IT Devices Registration PT Pertamina Retail</h1>
            </div>
        </div>
    </div>
  <hr>
  <form class="form-horizontal" ref="form_asset">
    
    <div class="work-experiences">
      <div class="row">
        <div class="col-md-4">
          <label>
            <i style="color:red">*</i> Unit Business
          </label>
          <select v-model="unit_business" class="form-select" required>
            <option disabled value="">Please select one</option>
            <option value="spbu">SPBU</option>
            <option value="spbu">SPBG</option>
            <option value="spklu">SPKLU</option>
            <option value="spbklu">SPBKLU</option>
            <option value="bright_store">Bright Store</option>
            <option value="bright_cafe">Bright Cafe</option>
            <option value="dc_lpg">DC LPG</option>
            <option value="head_office">Head Office</option>
          </select>
        </div>
        <!-- <div class="col-md-4">
          <label>
            Nama BUH
          </label>
          <input type="text" class="form-control" :name="name" v-model="name" required>
          <small id="emailHelp" class="form-text text-muted">Nama BUH Huruf Besar semua. Contoh : SLAMED </small>

        </div> -->
        <div class="col-md-4">
          <label>
            <i style="color:red">*</i> Kode SPBU / Branch ID Bright/DC LPG
          </label>
          <input type="text" class="form-control" :name="kode_spbu" v-model="kode_spbu" required>
          <small id="emailHelp" class="form-text text-muted">Kode Unit Business/SPBU tanpa titik. Contoh : 3117105 </small>
        </div>
        <!-- <div class="col-md-4">
          <label>
            Lokasi
          </label>

          <input type="text" class="form-control" :name="lokasi" v-model="lokasi" required>
          <small id="emailHelp" class="form-text text-muted">Contoh Pengisian Lokasi : SPBU BOGOR JONGGOL </small>

        </div> -->
        <!-- <div class="col-md-4">
          <label>
            Alamat
          </label>
          <input type="text" class="form-control" :name="alamat" v-model="alamat" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : Perum Citra Indah, Jl. Raya Cileungsi - Jonggol, Kec.Cileungsi Kab.Bogor 16830</small>
        </div> -->
        <div class="col-md-4">
          <label>
            <i style="color:red">*</i> SAM
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
      
        <div class="col-md-6 text-muted">
          <p>
           
           <p> <strong> Status Kepemilikan Managed Services :</strong> Secara Perangkat tidak sewa, Hanya Saja Pelayanannya yang PTPR Sewa. Contoh  : Modem Pepwave Emagic</p>  
          </p>
        </div>
        <div class="col-md-6 ">
          <h5>Cara Pengisian</h5>
          <p>
           <h4> <strong> <a href="https://bit.ly/Cara_pengisian_form" target="_blank">Link Cara Pengisian</a></strong></h4>
            
          </p>
        </div>  
        </div>
      <div class="row" v-for="(value,key) in dataAsset">
       <h3>Device Item {{value.device}} {{key+1}}</h3> 
         <div class="col-md-2">
           <label>
          Jenis Devices
        </label>
                  <select v-model="value.device" :name="`dataAsset[${key}][device]`" class="form-select">
                    <option disabled value="">Please select one</option>
                    <option>Laptop</option>
                    <option>PC</option>
                    <option>EDC</option>
                    <option>PRINTER</option>
                    <option>UPS</option>
                    <!-- <option>MONITOR</option>
                    <option>KEYBOARD</option>
                    <option>PROBE</option>
                    <option>ATG-CONSOLE</option>
                    <option>ENABLER</option>
                    <option>CONSOLE SELF SERVICE</option>
                    <option>CCTV</option>
                    <option>MODEM</option>
                    <option>ROUTER</option>
                    <option>SCANNER</option>
                    <option>LAINNYA</option> -->
                  </select>
          </div>
           <div class="col-md-2">
            <label>
              <i style="color:red">*</i> Merk
          </label>
          <input type="text" class="form-control" :name="`dataAsset[${key}][merk]`" v-model="value.merk" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : DELL </small>
          </div>
          <div class="col-md-2">
            <label>
              <i style="color:red">*</i> Service Tag/SN
          </label>
          <input type="text" class="form-control" v-model="value.service_tag" :name="`dataAsset[${key}][service_tag]`" required>
          <small id="emailHelp" class="form-text text-muted">Contoh : FXRF862</small>
          </div>
          <!-- <div class="col-md-1">
            <label>
            Quantity
          </label>
          <input type="text" class="form-control" v-model="value.qty" :name="`dataAsset[${key}][qty]`" required>
          <small id="emailHelp" class="form-text text-muted">Jumlah</small>
          </div> -->

          <!-- <div class="col-md-2">
            <label>
              Status Kepemilikan
            </label>
          <select :name="`dataAsset[${key}][status_kepemilikan]`" v-model="value.status_kepemilikan" class="form-select" required>
                  <option disabled value="">Please select one</option> -->
                  <!--    <option v-for="(owner,key) in ownership" :value="owner.value" :key="key">
                    {{owner.text}}
                  </option> -->
                  
                  <!-- <option>Sewa</option>
                  <option>Asset</option>
                  <option>Manage Services</option>
                </select>
          </div> -->
           <div class="col-md-2">
            <label>
              <i style="color:red">*</i> Kondisi Asset
            </label>
                <select :name="`dataAsset[${key}][condition]`" v-model="value.condition" class="form-select" required>
                  <option disabled value="">Please select one</option>
                  <!--    <option v-for="(owner,key) in ownership" :value="owner.value" :key="key">
                    {{owner.text}}
                  </option> -->
                  
                  <option>Baik</option>
                  <option>Rusak</option>
                </select>
          </div>
           <div class="col-md-2">
            <label>
              <i style="color:red">*</i> Utilisasi
            </label>
                <select :name="`dataAsset[${key}][utilize]`" v-model="value.utilize" class="form-select" required>
                  <option disabled value="">Please select one</option>
                  <!--    <option v-for="(owner,key) in ownership" :value="owner.value" :key="key">
                    {{owner.text}}
                  </option> -->
                  
                  <option>Di gunakan</option>
                  <option>Tidak di gunakan</option>
                </select>
          </div>
          <!-- <div class="col-md-2">
              <label>
                Label Asset
              </label>
              <select :name="`dataAsset[${key}][label_asset]`" v-model="value.label_asset" class="form-select">
                    <option disabled value="">Please select one</option>
                    <option>Ada</option>
                    <option>Tidak ada</option>
                    
              </select>
           </div> -->
           <!-- <div class="col-md-2">
              <label>
                Delivery Date
              </label>
              <input type="text" class="form-control" v-model="value.delivery_date" :name="`dataAsset[${key}][delivery_date]`" required>
               <small id="emailHelp" class="form-text text-muted">Format Pengisian: yyyy-mm-dd Contoh: 2022-05-19 </small>
           </div> -->
            <!-- <div class="col-md-2">
              <label>
                Expired Date
              </label>
              <input type="text" class="form-control" v-model="value.expired_date" :name="`dataAsset[${key}][expired_date]`" required>
               <small id="emailHelp" class="form-text text-muted">Format Pengisian: yyyy-mm-dd Contoh: 2022-05-19 </small>
           </div> -->
           <!-- <div class="col-md-3">
              <label>
                Keterangan
              </label>
              <input :name="`dataAsset[${key}][keterangan]`" v-model="value.keterangan" type="text" class="form-control" placeholder="keterangan">
               <small id="emailHelp" class="form-text text-muted">Format Pengisian: PC_MERK_TYPE_PERUNTUKAN <br>Contoh: PC_DELL_3060_PCPENGAWAS </small>
           </div> -->
           <div class="col-md-2">
               
                <br>
                <button @click="removeExperience(index)" type="button" class="btn btn-small btn-danger">Hapus <i class="bi bi-trash"></i></button>
           </div>
           <br>
      <hr>
      </div>
    </div>
 
    <div class="row">
      <p style="text-align:right"><i><strong>Tanda <i style="color:red">*</i> Wajib di isi</strong></i> </p> 

      <div class="form-group">
       <p style="text-align:right"> <button @click="addExperience" type="button" class="btn btn-small btn-success">Add Device<i class="bi bi-file-earmark-plus"></i></button></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="form-group">
       <center> <button @click="submit" type="button" class="btn col-12 btn-block btn-lg btn-primary">Submit</button></center>
      </div>
    </div>
  </form>


</template>

<script type="text/javascript">

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
const unique_id = uuidv4()

import axios from "axios"
export default {
  name: "AssetRegistration",
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
                        // qty:"",
                        service_tag:"",
                        condition:"",
                        utilize:"",
                        // keterangan:"",
                        // label_asset:"",
                        // status_kepemilikan:"",
                        // keterangan:"",
                        unique_id:unique_id

                      }
                    ],
                    errors:[],
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

    validateForm() {
                for (let item of this.dataAsset) {
                    if (!item.device || !item.merk || !item.service_tag || !item.condition || !item.utilize || !this.sam || !this.kode_spbu || !this.unit_business) {
                        return false;
                    }
                }
                return true;
            },
    addExperience () {
      if (this.validateForm()) {
                    this.dataAsset.push({ merk: '', device: '', service_tag: '', condition: '', utilize: '', unique_id:unique_id });
                } else {
                    alert('Tolong lengkapi terlebih dahulu data device di atas.');
                }

      // this.dataAsset.push({
      //   merk: "",
      //   device: "",
      //   // qty:"",
      //   service_tag:"",
      //   condition:"",
      //   utilize:"",
      //   // keterangan:"",
      //   // label_asset:"",
      //   // status_kepemilikan:"",
      //   // keterangan:"",
      //   unique_id:unique_id
      // })
    },
    removeExperience(index){
      this.dataAsset.splice(index,1);
    },
    submit () {
      console.log(this.dataAsset)
      if (this.validateForm()) {
        
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      
           // // https://sheetdb.io/api/v1/cz16jbo7bahwt
          // // https://sheet.best/api/sheets/f7ac5551-002d-497e-89b8-9334334d7c54 > Expired
          // // https://sheet.best/api/sheets/71faa9b4-940e-479c-8c09-29ba0b768196
          // // https://sheetdb.io/api/v1/cdzdyqt2zlamw > Fresh API

          // Form is valid, you can submit it
          axios.post('https://sheetdb.io/api/v1/z4ee0mz9ok61d',{sheet:'data_form', data: [{
                            "data": this.dataAsset,
                            // "nama_buh": this.name,
                            "unit_business": this.unit_business,
                            // "alamat": this.alamat,
                            "sam": this.sam,
                            "kode_spbu": this.kode_spbu,
                            // "lokasi": this.lokasi,
                            "submitted_date": date,
                            "unique_id" : unique_id
                            } ]
                          }).then((res)=>{
                            console.log(res)
                          }).catch(errors=>{
                            console.log(errors.response)
                            alert(JSON.stringify(errors.response))
                          })
          alert('Form submitted successfully!');
          window.location.reload();  
      } else {
          alert('Tolong lengkapi isian pada form!');
      }
        this.errors=[];
   


      //   }
    
      
      //  // alert(JSON.stringify(data, null, 2))
      //  alert("Data Sudah Sukses terinput ! Terima Kasih")
      //    window.location.reload();  

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