import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#159b44',
                secondary: '#000',
                accent: '#000',
                success:'#42ba96',
                error: '#ff3333',
            },
        },
    },
});
