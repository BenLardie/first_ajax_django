document.addEventListener("DOMContentLoaded", function() {
    buttonOne = document.querySelector('.button-one');
    console.log(buttonOne)
    buttonOne.addEventListener('click', function() {
        axios.get('http://intro-ajax-api.herokuapp.com/')
    });
    buttonTwo = document.querySelector('.button-two');
    buttonTwo.addEventListener('click', function() {
        axios.get('http://intro-ajax-api.herokuapp.com/ping')
        .then(function (response) {
        console.log('response', response);
        
        });
    });

});
    