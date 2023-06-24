<script setup>
import { ref } from 'vue';
import Heading from '../components/Heading.vue';
import { useRoute } from 'vue-router';
import quizes from "../assets/data/questions.json"
import QuestionHeader from '../components/QuestionHeader.vue';
import QuestionAnswers from '../components/QuestionAnswers.vue';
import Result from '../components/Result.vue';

const route = useRoute()
const quiz = quizes.find(q => q.id === parseInt(route.params.id))
const currentQueIndex = ref(0)
const correctAns = ref(0)
const isOverlay = ref(false)
const isCorrect = ref(false)
const isFinished=ref(false)


const checkUpdate = (val) => {
    isOverlay.value=true
    if (val) {
        isCorrect.value=true
        correctAns.value += 1
    }
    setTimeout(() => {
        if (currentQueIndex.value + 1 < quiz.questions.length) {
            currentQueIndex.value += 1
            isOverlay.value=false
            isCorrect.value=false

        }
        else if(currentQueIndex.value + 1 == quiz.questions.length){
            isFinished.value=true
        }
    }, 1000)
}






</script>

<template>
    <div class="row mt-1" style="padding: 1%;">
        <div class="col-4">
            <QuestionHeader :currentq="currentQueIndex + 1" :totalq="quiz.questions.length" />
        </div>
        <div class="col-4">
            <Heading :heading="`${quiz.name} Quiz`" />
        </div>
        <div class="col-4">

        </div>
    </div>

    

    
    <div class="box" v-if="! isFinished">
        <div class="overlay" v-if="isOverlay">
            <i v-if="isCorrect" class="bi bi-check2-circle "></i>
            <i v-else class="bi bi-x-circle "></i>
    
        </div>

        <QuestionAnswers :question="quiz.questions[currentQueIndex]" @selected="checkUpdate" />
    </div>
    <div v-else class="box result">
        <Result  :result="`${ correctAns }/${ quiz.questions.length }`"/>
    </div>
    
</template>

<style scoped>
i{
    font-size: 7rem;
}
.box {
    position: relative;
    margin: 1% 5% 3% 5%;
    padding: 3%;
    border: 2px solid #323554;
    border-radius: 1rem;
    box-shadow: 1px 1px 10px rgb(153, 153, 153, 0.3);
   

}
.result{
    
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color:rgb(50, 53, 84, 0.7);;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  
}

.col-4 {
    display: flex;
    align-items: center;
}

.row {
    margin: 0;
}
</style>