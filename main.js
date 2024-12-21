const rootButton = document.querySelector('#root-handle');
const cButton = document.querySelector('#c-handle');
const tierTwo = document.querySelector('#folder-handle'); //Folder 1
const tierTwoC = document.querySelector('#folder2-handle'); //Folder 2 
const tierThree = document.querySelector('#files');
const tierThreeC = document.querySelector('#files-2');

rootButton.addEventListener('click', (e) => {

    tierTwo.classList.toggle('hidden');
})
cButton.addEventListener('click', (e) => {

    tierTwoC.classList.toggle('hidden');
})

tierTwo.addEventListener('click',  (e) => {
    tierThree.classList.toggle('hidden');
})
tierTwoC.addEventListener('click',  (e) => {
    tierThreeC.classList.toggle('hidden');
})



