import Vue from 'vue'
import App from './App.vue'
import { MdButton } from 'vue-material/dist/components'
import 'vue-material/dist/theme/default.css'
import 'vue-material/dist/vue-material.min.css'


Vue.use(MdButton);
Vue.config.productionTip = false;

new Vue({
    data() {
        return {
            count: 0
        }
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
