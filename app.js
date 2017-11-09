$(function() {
    var app = new Vue({
        el: '#app',
        data: {
            results: [],
            crimes: [],
            players: [],
        },
        methods: {
            crime() {
                this.$http.get('http://nflarrest.com/api/v1/crime')
                    .then(resp => {
                        this.crimes = resp.body
                    })
            },
            trivia() {

                this.$http.get('https://opentdb.com/api.php?amount=4')
                    .then(resp => {
                        this.results = resp.body.results
                    })
            },
            nba() {
                alert("Must have CORS enabled to view! \nPlayers Listed by lastname in alphabetical order")
                this.$http.get('http://data.nba.net/10s/prod/v1/2017/players.json')
                    .then(resp => {
                        this.players = resp.body.league.standard
                    })
            },
        }
    })

});