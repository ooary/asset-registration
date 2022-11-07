<script setup>
import Navbar from './components/Navbar.vue'

</script>


<template>


       <!-- <Navbar> </Navbar> -->

<div id="app" class="container-fluid">
   <nav class="navbar navbar-expand-md fixed-top navbar-dark  bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">IT Devices Registration</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto ">
            <li class="nav-item active">
              <router-link :to="{name: 'AssetRegistration'}" class="nav-link" aria-current="page">Asset Registration</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'SoftwareRegistration'}" class="nav-link">Software Request</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'Dashboard'}" class="nav-link">Dashboard</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 <div>
  
   

    <!-- render vue router -->
    <router-view></router-view>

  </div>
  </div>
</template>



<script>

  export default{

  }
</script>
<!-- JavaScript Bundle with Popper -->
<style type="text/css">
.work-experiences > div {
  margin: 20px 0;
  padding-bottom: 10px;
}

</style>
