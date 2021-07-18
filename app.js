document.addEventListener('DOMContentLoaded', () => {
const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
const columnOne = document.querySelector('.one');
const columnTwo = document.querySelector('.two');
const columnThree = document.querySelector('.three');
const columnFour = document.querySelector('.four');

function showImages () {
    for (let i = 1; i <= 18; i++) {
        let imgDiv = document.createElement('div');
        let divImage = document.createElement('img');
        let divImageAttr = document.createElement('a');
        divImageAttr.setAttribute('href', `./img/${i}.jpg`);
        divImage.setAttribute('src', `./img/thumb/${i}.jpg`);
        divImage.setAttribute('id',`${i}`);
        divImageAttr.classList.add('spotlight')
        divImageAttr.appendChild(divImage);
        imgDiv.appendChild(divImageAttr);
        
    
        if (i < 5) {
            columnOne.appendChild(imgDiv);
        }else if (i < 9) {
            columnTwo.appendChild(imgDiv);
        }else if (i < 13) {
            columnThree.appendChild(imgDiv);
        }else if (i < 18) {
            columnFour.appendChild(imgDiv);
        }
    }
}
showImages();

container.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.getBoundingClientRect().left;
    let y = e.clientY - container.getBoundingClientRect().top;
    

    canvas.style.transform = `translate(-${x}px, -${y * 3}px)`;
})
//add listener for each image

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', () => {
        console.log(image.dataset.id)
        image.style.filter = "grayscale(0)";
        console.log(image.style.filter)
    })
})


})
