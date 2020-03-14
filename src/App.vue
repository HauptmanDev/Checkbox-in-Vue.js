<template>
    <div id="app">
        <PageCheckbox msg="Welcome to My first Vue.js App"/>
    </div>
</template>

<script>
    import PageCheckbox from './components/PageCheckboxTwo.vue'

    export default {
        name: 'App',
        components: {
            PageCheckbox
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
