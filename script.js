// html elements

const inputNumber = document.querySelector('#inputNum');
const refreshBtn = document.querySelector('#refresh');
const board = document.querySelector('#board');
const mainBoard = document.querySelector('#main');


// for loop creates the first div grid of 16 divs.

for(let i = 0; i < 16; i++){

    let RanNumA = Math.ceil(Math.random() * 255);
    let RanNumB = Math.ceil(Math.random() * 255);
    let RanNumC = Math.ceil(Math.random() * 255);

    const tiles = document.createElement('div');
    tiles.style.width = (900 / 4) + 'px';
    tiles.style.height = (900 / 4 ) + 'px';
    tiles.classList.add('tile');
    tiles.addEventListener('mouseenter', ()=>{
    tiles.style.backgroundColor = `rgb(${RanNumA}, ${RanNumB}, ${RanNumC})`;
       });
    mainBoard.appendChild(tiles);
    };

// Button to start over.

refreshBtn.addEventListener('click', ()=>{
    location.reload();
})

// Uses enter key and an user imputed number to create a new grid.

inputNumber.addEventListener('keydown', (e)=>{
    if(e.code === 'Enter'){
    
        makeTiles(inputNum)
       
    }
})

// function to remove then create a new grid bases
// on the users spicified grid number.

function makeTiles(inputNum){

while(mainBoard.firstChild){
    mainBoard.removeChild(mainBoard.firstChild);
}

    inputNum = inputNumber.value;
   
if(inputNum > 100){
    inputNum = 100;
}
    
    let tileNum = inputNum * inputNum;
    let tileSize = (900 / inputNum);
    
 

    for(let i = 0; i < tileNum; i++){

    let RanNumA = Math.ceil(Math.random() * 255);
    let RanNumB = Math.ceil(Math.random() * 255);
    let RanNumC = Math.ceil(Math.random() * 255);

    const tiles = document.createElement('div');
    tiles.style.width = tileSize + 'px';
    tiles.style.height = tileSize + 'px';
    tiles.classList.add('tile');
    tiles.addEventListener('mouseenter', ()=>{
    tiles.style.backgroundColor = `rgb(${RanNumA}, ${RanNumB}, ${RanNumC})`;
       });
    mainBoard.appendChild(tiles);
    };

    
};
