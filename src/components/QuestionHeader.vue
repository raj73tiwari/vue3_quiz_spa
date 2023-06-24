<script setup>
import { defineProps ,computed} from 'vue';
const props=defineProps({
    totalq:{
        type:Number
    },
    currentq:{
        type:Number
    }
})
const bar=computed(()=>
    props.currentq/props.totalq*100)



</script>

<template>
    <div class="head-container">
        <h1>Question : {{ props.currentq }}/{{ props.totalq }}</h1>
        
        
        
        <div class="progress ms-1 mt-1" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100" style="height: 10px ; background-color: #323554;" >
            
            <div class="progress-bar" style=" background-color: #ffcc00;" :style="  {width: `${bar}%` }"></div>
        </div>
    </div>
   
</template>


<style scoped>

h1 {
    font-family: 'Pacifico';
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 3.5vw;
}
.head-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 12%;
}


</style>