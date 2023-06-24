<script setup>


import {RouterLink} from 'vue-router'




</script>

<template>

<nav class="navbar navbar-expand-lg   border-bottom border-bottom-dark" data-bs-theme="dark" style="background-color: #323554;">
    <div class="container-fluid">
      <RouterLink active-class="active"  to="/" class="navbar-brand h1" >
        <img src="../assets/img/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
        QuizzZ</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5" >
          <li class="nav-item">
            <RouterLink active-class="active" to="/" class="nav-link " aria-current="page" >Quizes</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink active-class="active"  to="/about" class="nav-link" >About us</RouterLink>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand');

nav img{
    margin-left: 6px;
    margin-right: 3px;
}



.navbar-brand{
    font-weight: bold;
    font-size: 30px;
    margin: 0%;
    font-family: 'Patrick Hand';
    letter-spacing: 1.5px;
    
}

.nav-link{
    font-size: 20px;
    font-family: 'Patrick Hand';
    font-weight: bold;
    letter-spacing: 1.5px;
}

</style>