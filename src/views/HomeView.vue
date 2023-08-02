<script setup>

import q from "../assets/data/questions.json"
import { ref, watch } from "vue";
const quizes = ref(q)
const searched=ref("")
watch(searched,()=>{
    quizes.value=q.filter(quiz => quiz.name.toLowerCase().includes(searched.value.toLowerCase()))
})
import QuizCard from '../components/QuizCard.vue';
import Heading from "../components/Heading.vue";




</script>

<template>
    <div class="row">
        <div class="col-4">

        </div>
        <div class="col-4">


        <Heading heading="Quiz Time"/>
        </div>
        <div class="col-4">
            <form class="d-flex" role="search">
                <input class="form-control me-2 ms-2" type="search" placeholder="Search..." aria-label="Search" v-model="searched">
            </form>
        </div>
    </div>
    <div class="container">
        <h2 v-if="quizes.length==0" >Sorry, no quizes found !</h2>
        <QuizCard v-for="quiz in quizes" :name=quiz.name :img=quiz.img :num=quiz.questions.length :id=quiz.id />
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');

h1 {
    font-family: 'Pacifico';
    letter-spacing: 2px;
    font-weight: bold;
}



.col-4 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    margin: auto;
}
.row{
    margin: 0%;
}


input {
    background-color:  #9B9C9E;
    border: 2px;
    color:#323554;
    font-family: 'Pacifico';
    font-weight: bold;
    
}
input:focus {
    background-color:  #9B9C9E;
    border-color:  #323554;
    color:#323554;
   
}

.container {
    padding: 1%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 50vh;

}
</style>