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
                  <select v-model="experience.device" :name="`dataAsset[${index}][device]`" class="form-select">
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
                    <option>SCANNER</option>
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