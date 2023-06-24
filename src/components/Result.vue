<script setup>
import { defineProps } from 'vue';
import {useRouter} from "vue-router"
const router=useRouter()
const toHome=()=>{
    router.replace('/')
}
const props=defineProps({
    result:{
        type:String
    }
})




</script>

<template>
    <div class="result-box">
            <h1 >Your Result</h1>
            <h1 >{{ result }}</h1>
            <button type="button" @click="toHome" class="btn btn-outline-warning mt-5"><i class="bi bi-arrow-left me-2"></i>Go Back</button>
    </div>
    
</template>


<style scoped>

@import url('https://fonts.googleapis.com/css?family=Patrick+Hand');

h1 {
    font-family: 'Patrick Hand';
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 5vw;
}

.result-box{
    margin: 1% 5% 3% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
}
.custom{
    border-color: red;
    color:  red;
}

</style>