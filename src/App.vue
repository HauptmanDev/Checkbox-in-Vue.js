<template>
    <div id="app">
        <PageCheckbox msg="Vue.js"/>
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
        text-align: center;
        overflow: hidden;
    }
</style>
