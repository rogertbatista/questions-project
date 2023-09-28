//using selectors inside the element

const container = document.querySelectorAll('.container');

container.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click',function(){
        container.forEach(function(item){
            if(item != question){
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })
})

//traversing the dom

/*
const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})*/
