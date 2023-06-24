<script setup>
import {useRouter} from "vue-router"
const router=useRouter()
const toQuiz=()=>{
    router.push(`/quiz/${props.id}`)
}

const props = defineProps({
    id:{
        type:Number
    },
    name: {
        type: String,
    },
    img: {
        type: String
    },
    num: {
        type: Number
    }
})

</script>

<template>
<div class="card" style="width: 18rem;" @click="toQuiz">
  <img :src=props.img  class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title mb-0">{{ props.name }}</h3>
    <p class="card-text">Total Questions : {{ props.num }}</p>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand');
.card{
    background-color:  #323554;
    cursor: pointer;
    box-shadow:  1px 1px 10px  rgb(153, 153, 153, 0.3);
    font-family: Patrick Hand;
    margin: 0 3.5% 4% 3.5%;
    transition: all .3s ease-in-out;
    
    
}
.card:hover {
  box-shadow: rgba(153, 153, 153, 0.22) 0px 10px 25px;
  transform: translate3d(0px, -2px, 0px);
}
h3{
    color: white;
}
p{
    color: #9B9C9E;
}

.card-body{
    padding: 6px;
}
img{
    padding: 1%;
    max-width: 100%;
    height: 150px ;

}

</style>