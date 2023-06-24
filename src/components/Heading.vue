<script setup>
import { defineProps } from 'vue';

const props=defineProps({
    heading:{
        type:String
    }
})

let head=props.heading.split(" ")


</script>

<template>
    <div class="heading">
            <h1 class="mx-2">{{ head[0] }}</h1>
            <img src="../assets/img/logo.png " width="90" height="80">
            <h1 class="mx-1">{{ head[1] }}</h1>
        </div>
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Satisfy');

h1 {
    font-family: 'Satisfy';
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 5vw;
}

img{
    height: 10vw;
    width: 10vw
}
.heading{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    margin: auto;
}
</style>