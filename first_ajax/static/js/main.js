document.addEventListener("DOMContentLoaded", function() {
    buttonOne = document.querySelector('.button-one');
    console.log(buttonOne)
    buttonOne.addEventListener('click', function() {
        axios.get('http://intro-ajax-api.herokuapp.com/')
    });
    buttonTwo = document.querySelector('.button-two');
    buttonTwo.addEventListener('click', function() {
        section = document.querySelector('section');
        axios.get('http://intro-ajax-api.herokuapp.com/pong')
        .then(function (response) {
        console.log('response', response);
        section.innerHTML = response.data;
        })
        .catch(function (error) {
            console.log(error);
            section.innerHTML = "My bad I am still learning";
        }) 
        .then(function() {
            console.log('this is then');
        })
    });
    

});
    