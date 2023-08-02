<script setup>
import {RouterLink} from 'vue-router'

</script>
<template>
<div class="foot">
    <p >  <RouterLink to="/" class="lin">&copy; QuizzZ </RouterLink>. All rights reserved.</p>
    <p >Developed By: Sahastranshu Tiwari</p>
</div>
</template>

<style scoped>
.foot {
  background-color: #323554;;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  margin-top: 10%;
  
  
  
}
p{
    margin-bottom: 0;
    margin-left: 10%;
    margin-right: 10%;
    
}
.lin{
    color: #42B883;
    text-decoration: none
}
</style>