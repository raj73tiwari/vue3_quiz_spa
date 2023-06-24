<script setup>
import { defineProps, defineEmits } from 'vue';
import { ref } from 'vue';
const props=defineProps({
    question:Object
})

const emits=defineEmits(['selected'])

const bg=ref("#323554")
const selected=ref('')
const check=(op)=>{
    selected.value=op.id
    if (op.isCorrect){
        bg.value="green"
        setTimeout(() => {
        bg.value='#323554'
    }, 1000)
        emits('selected',true)
    }
    else{
        bg.value="red"
        setTimeout(() => {
        bg.value='#323554'
    }, 1000)
        emits('selected',false)
    }
}
</script>


<template>
<div class="questions">

<h2>{{ question.text }}</h2>
</div>

<div class="answers">
    <div class="options" v-for="op in question.options">
        <div class="index">
               <h4>{{ op.label }}</h4> 
        </div>
        <div class="val" @click="check(op)" :style="selected==op.id && { backgroundColor: bg } " >
            <h4 class="ms-3">{{ op.text }}</h4>
        </div>
            
    </div>
    
    
            
        


</div>
</template>


<style scoped>

h4{
    margin-bottom: 0.25rem;
}
.questions{
    margin-bottom: 5%;
    margin-left: 3%;
    margin-right: 3%;
}
.answers{
    margin: 1%;
}
.options{
    display: flex;
    margin: 2%;
    cursor: pointer;
    box-shadow:  1px 1px 10px  rgb(153, 153, 153, 0.3);
    transition: all .3s ease-in-out;

}
.options:hover {
  box-shadow: rgba(153, 153, 153, 0.22) 0px 7px 15px;
  transform: translate3d(0px, -1px, 0px);
}
.index{
    padding: 0.5%;
    background-color:#ffcc00;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#323554;
    border-radius: 0.5rem 0 0 0.5rem;
}
.val{
    padding: 0.5%;
    width: 100%;
    height: 40px;
    display: flex;
    border-radius: 0 0.5rem 0.5rem 0;
    align-items: center;
    background-color: #323554;
}


</style>