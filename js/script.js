const next = document.querySelector('.btn');
const content = document.querySelector('.content');
const contentDua = document.querySelector('.content:last-child');
next.addEventListener('click', function(){
    content.classList.toggle('hilang');
    contentDua.style.display = 'block';
})

const back = document.querySelector('.btn-back');
back.addEventListener('click', function(){
    content.classList.toggle('hilang');
    contentDua.style.display = 'none';
})