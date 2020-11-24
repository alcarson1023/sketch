let allDivs = document.querySelector('.boxes')
let reset = document.querySelector('#reset');
let invert = document.querySelector('#invert');
let container = document.getElementById('container')
let run = document.querySelector('#run');
let hiedable = document.querySelector('#hideable');

function generate(width){
    let area = width*width;

    for(let i = 0; i < area; i++) {
// This section plans out the cells, with a background color and ID.
        let singleCell = document.createElement('div');
        singleCell.setAttribute('id', `boxNumber${i}`)
        singleCell.setAttribute('class', 'boxes')
        singleCell.style.backgroundColor = 'white'

// This section sets the height and width of the display
        container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
        container.insertAdjacentElement('beforeend', singleCell);
    }

// This section turns the cell black when the mouse hovers over it
    var gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'black'
    }));

// This reverts everything back to white when run
    reset.addEventListener('click', function() {
        
        for(let i = 0; i < area; i++){
            let currentBox = document.querySelector(`#boxNumber${i}`)
            currentBox.style.backgroundColor = 'white'
        };

    });

// This inverts the table, all black cells -> white, all white cells -> black
    invert.addEventListener('click', function() {
        
        for(let i = 0; i < area; i++){
            let currentBox = document.querySelector(`#boxNumber${i}`)

            if(currentBox.style.backgroundColor == 'white'){
                currentBox.style.backgroundColor = 'black'
            }
            else{
                currentBox.style.backgroundColor = 'white'
            }
        };
    })
}


run.addEventListener('click', () => {
    let input = document.querySelector('#input').value
    if(input <= 50 && input >= 1){
    generate(input)
    hiedable.style.cssText = 'display: none'
    }
    else{
        alert('Please enter a number between 1 and 50!')
    }
});
