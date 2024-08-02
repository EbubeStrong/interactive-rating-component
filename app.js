const ratingState = document.querySelector('.rating');

const numbers = document.querySelectorAll('.number');

const  submitBtn = document.querySelector('.btn');

const thankYouState = document.querySelector('.thank-you-state');

const selectedNumber = document.querySelector('.selected-number');

let clickNumber = 0;

submitBtn.addEventListener('click',function(){
    if(clickNumber > 0){
      ratingState.classList.remove('active')
      selectedNumber.textContent = clickNumber
      thankYouState.classList.add('active')
    }else{
       alert("Please select a number") 
    }
});

numbers.forEach(function(num){
    num.addEventListener('click', function(event){
        clickNumber = parseInt(event.target.textContent)

        numbers.forEach(function(num){
            num.classList.remove('active')
        })
        num.classList.add('active')
    })
});