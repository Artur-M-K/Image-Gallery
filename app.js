const container = document.querySelector('.container');
const canvas = document.querySelector('.canvas');
const columnOne = document.querySelector('.one');
const columnTwo = document.querySelector('.two');
const columnThree = document.querySelector('.three');
const columnFour = document.querySelector('.four');

for (let i = 1; i <= 18; i++) {
    let imgDiv = document.createElement('div');
    let divImage = document.createElement('img');
    divImage.setAttribute('src', `./img/${i}.jpg`);
    imgDiv.appendChild(divImage);

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

container.addEventListener('mousemove', (e) => {
    let x = e.clientX - container.getBoundingClientRect().left;
    let y = e.clientY - container.getBoundingClientRect().top;
    

    canvas.style.transform = `translate(-${x}px, -${y * 3}px)`;
})