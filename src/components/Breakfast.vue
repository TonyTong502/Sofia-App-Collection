<template>
  <div class="breakfast">
    <h1>{{ title }}</h1>
    <div> 今天是 {{ date }}</div>
    <div>所有选项</div>
    <ol>
      <li v-for="(option, idx) in options" :key="idx">
        {{option.text}}
      </li>
    </ol>
    <div>
      <button v-on:click="helpMe">帮我选吧！</button>
    </div>
    <div>
    那么我的选择是 <input v-model="myChoice" readonly/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'breakfast',
  data () {
    return {
      title: '童茜雅的早餐智能选择器',
      date: new Date().toLocaleDateString(),
      myChoice: '',
      disabled: null,
      options: [
        {"text": "家里吃"},
        {"text": "包子"},
        {"text": "面"},
        {"text": "馄饨"}
      ],
      mounted() {
          if(localStorage.myChoice) 
            this.myChoice = localStorage.myChoice;
          if(localStorage.selected)
            this.selected = true;
      },
      watch:{
          myChoice(newChoice){
            localStorage.myChoice = newChoice;
          },
          selected(newVal){
            localStorage.selected = newVal;
          }
      }
    }
  },
  methods: {
    helpMe: function(){
      this.selected = true;
      var size = this.options.length;
      var random = Math.floor(Math.random() * size);
      if(random == 0) {
        random = 2;
      }
      var choice = this.options[random];
      this.myChoice = choice.text;
    }
  }
}
</script>