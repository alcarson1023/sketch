
function generate(){

for(let i = 0; i < 256; i++){
    var div = document.createElement('div');
    div.setAttribute('class', 'boxes');
    div.setAttribute('id', `boxNumber${i}`)
    document.getElementById('container').appendChild(div);

    div.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = 'black'
    })
};
}

let allDivs = document.querySelector('.boxes')
let reset = document.querySelector('#reset');

reset.addEventListener('click', function() {
    
    for(let i = 0; i < 256; i++){
        let currentBox = document.querySelector(`#boxNumber${i}`)
        currentBox.style.backgroundColor = 'white'
    };

});

generate()