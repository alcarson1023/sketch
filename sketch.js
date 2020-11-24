let allDivs = document.querySelector('.boxes')
let reset = document.querySelector('#reset');
let invert = document.querySelector('#invert');


function generate(){

for(let i = 0; i < 256; i++){
    var div = document.createElement('div');
    div.setAttribute('class', 'boxes');
    div.setAttribute('id', `boxNumber${i}`)
    div.style.backgroundColor = 'white'
    document.getElementById('container').appendChild(div);

    div.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'black'
    })
};
}

reset.addEventListener('click', function() {
    
    for(let i = 0; i < 256; i++){
        let currentBox = document.querySelector(`#boxNumber${i}`)
        currentBox.style.backgroundColor = 'white'
    };

});

invert.addEventListener('click', function() {
    
    for(let i = 0; i < 256; i++){
        let currentBox = document.querySelector(`#boxNumber${i}`)

        if(currentBox.style.backgroundColor == 'white'){
            currentBox.style.backgroundColor = 'black'
        }

        else{
            currentBox.style.backgroundColor = 'white'
        }
    };
    
})


generate()