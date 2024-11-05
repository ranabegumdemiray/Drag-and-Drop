
let lists = document.querySelectorAll('.list');
let rightbox = document.getElementById('right');
let leftbox = document.getElementById('left');


lists.forEach(item => {
    item.addEventListener('dragstart', function(e) {
        
        e.dataTransfer.setData('text/plain', e.target.id);
       
        e.target.style.opacity = '0.5';
    });

    item.addEventListener('dragend', function(e) {
       
        e.target.style.opacity = '';
    });
});


function enableDropping(box) {
    box.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    box.addEventListener('drop', function(e) {
        e.preventDefault(); 
       
        const id = e.dataTransfer.getData('text/plain');
        const draggedItem = document.getElementById(id);
       
        box.appendChild(draggedItem);
    });
}

enableDropping(rightbox);
enableDropping(leftbox);
