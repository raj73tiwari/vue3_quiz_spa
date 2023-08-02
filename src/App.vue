<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import FooterComp from './components/FooterComp.vue';
import gsap from "gsap"

const beforeAni= (el)=>{
  el.style.opacity=0
  el.style.transform='TranslateX(-100px)'
  console.log("sksk")
  
}
const enterAni= (el)=>{
  gsap.to(el,{
    x:0,
    opacity:1,
    duration:1


  })

}



</script>

<template>

  <Navbar/>

  <Transition @before-enter="beforeAni" @enter="enterAni" @after-enter="afterAni">
    <RouterView/>
  </Transition>
  
  <FooterComp/>
  

</template>

<style scoped>


</style>