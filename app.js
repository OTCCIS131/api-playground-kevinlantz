$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            id: " ",
            question: " ",
            results: [],
            category: " ",
            crime: []


        },
        methods: {
            trivia() {
                this.$http.get('http://nflarrest.com/api/v1/crime')
                    .then(resp => {
                        this.crime = resp.body
                            // this.find()
                    })
            },
            // find() {
            //     var title1 = results[0].category
            // }

        }
    })
});