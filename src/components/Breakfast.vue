<template>
  <div class="breakfast">
    <h1>{{ title }}</h1>
    <h2>一天只能选择一次</h2>
    <div> 今天是 {{ date }}</div>
    <div>所有选项</div>
    <ol>
      <li v-for="(option, idx) in options" :key="idx">
        {{option.text}}
      </li>
    </ol>
    <div>
      <button v-on:click="helpMe" :disabled=selected>{{helpText}}</button>
    </div>
    <div>
    那么我的选择是 <input v-model="lastChoice" readonly/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "breakfast",
      title: "童茜雅的早餐智能选择器",
      date: new Date().toLocaleDateString(),
      lastDate: "",
      lastChoice: "",
      selected: false,
      helpText: "帮我选吧！！！",
      options: [
        { text: "家里吃" },
        { text: "包子" },
        { text: "面" },
        { text: "馄饨" }
      ]
    };
  },
  mounted() {
    if (localStorage.lastDate) {
      if (localStorage.lastDate == new Date().toLocaleDateString()) {
        this.selected = true;
        this.helpText = "今天已经选过了！！！";
      }
      if (localStorage.lastChoice) {
        this.lastChoice = localStorage.lastChoice;
      }
    }
  },
  watch: {
    lastChoice(newLastChoice) {
      localStorage.lastChoice = newLastChoice;
    },
    lastDate(newLastDate) {
      localStorage.lastDate = newLastDate;
    }
  },
  methods: {
    helpMe: function() {
      var size = this.options.length;
      var random = Math.floor(Math.random() * size);
      if (random == 0) {
        random = 2;
      }
      var choice = this.options[random].text;
      this.lastChoice = choice;
      this.lastDate = new Date().toLocaleDateString();
        this.selected = true;
        this.helpText = "今天已经选过了！！！";
    }
  }
};
</script>
