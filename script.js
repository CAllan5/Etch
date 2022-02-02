const mainBoard = document.querySelector('#main');
const inputNumber = document.querySelector('#inputNum');
const refreshBtn = document.querySelector('#refresh');


refreshBtn.addEventListener('click', ()=>{
    location.reload();
})

inputNumber.addEventListener('keydown', (e)=>{
    if(e.code === 'Enter'){
        makeTiles(inputNum)
       
    }
})


function makeTiles(inputNum){
    
    inputNum = inputNumber.value;
    
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
