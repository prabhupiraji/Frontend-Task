
const boxes = document.querySelectorAll('.item');
const expandables = document.querySelectorAll('.sizecolor');

function hideAllBoxes() {
    expandables.forEach((sizecolor) => {
        sizecolor.style.display = 'none';
    });
}

function showBox(index) {
    expandables[index].style.display = 'flex';
    expandables[index].style.gap = '40px';
  
}


boxes.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllBoxes();
        showBox(index);
       
    });
});





  
