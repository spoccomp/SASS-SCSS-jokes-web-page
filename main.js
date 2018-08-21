function getThePokemans(response) {
    axios.get(`http://api.icndb.com/jokes/${response}.json`)
        .then(function (res) {

             console.log(res.data.value.joke);
             let newJoke =res.data.value.joke;
             
            

            document.getElementById("myBtn").addEventListener("click", displayJoke);
            function displayJoke() {
                document.getElementById("demo")
                .innerHTML = `${newJoke}`;
                //location.reload(3000);
            }

            
           
        }).catch(function (response) {
            console.error(response);
        })
}

// let answer = prompt("Chuck Norris Jokes, pick a number between 1 and 100:  ");
let rnd = Math.floor((Math.random() * 100) + 1);
getThePokemans(rnd);