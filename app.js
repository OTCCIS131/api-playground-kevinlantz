$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            id: " ",
            question: " ",
            results: [],
            category: " ",



        },
        methods: {
            trivia() {
                this.$http.get('https://opentdb.com/api.php?amount=1')
                    .then(resp => {
                        this.results = resp.body
                        this.find()
                    })
            },
            find() {
                var title1 = results[0].category
            }

        }
    })
});