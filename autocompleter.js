Vue.component('auto-complete', {
    template: `
        <div class="auto-complete">
            <input class="auto-complete-input" type="text" v-model="input">
            <table v-if="input.length > 0">
                <tbody>
                    <tr v-for="animal in data">
                    <td>{{ animal }}</td>
                    </tr>
            </tbody>
            </table>
            </div>
    `,
    props: {
        data: { type: Array, required: true },
        // input: ''
    },
    computed:{
        data: function () {
            var self = this;
            var filteredAnimals = animals.filter( function(animal) {
                return animal.substring(0, self.input.length).toLowerCase() === self.input.toLowerCase();
            });
            return filteredAnimals.length > 9 ? filteredAnimals.slice(0, 10) : filteredAnimals;
        }  
    },
    data() {
        return {
            input: ''
        }
    }
})

new Vue ({
    el: ".zad1-Search",

    data: {
        animals: window.animals
    }
})