<template>
    <div id="app">
        <nav-component/>
        <router-view/>
        <footer-component/>
    </div>
</template>

<script>
  import NavComponent from './Components/NavComponent.vue'
  import FooterComponent from './Components/FooterComponent.vue'

  export default {
    components: {
      NavComponent,
      FooterComponent
    }
  }
</script>

<style>
    html, body, #app {
        position: absolute;
        width: 100%;
        height: 5000px;
        margin: 0;
        padding: 0;

        font-family: "Source Code Pro", sans-serif;
        text-transform: uppercase;
        letter-spacing: 6px;
        color: #fff;
        font-size: 25px;
    }

    a:hover {
        opacity: .6;
    }

    main {
        z-index: 0;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>