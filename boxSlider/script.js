const boxes = document.querySelectorAll('.box');
boxes.forEach((box,index) => {
    box.addEventListener('click', () => {
        // Remove the 'expanded' class from all boxes
        boxes.forEach((box) => {
            box.classList.remove('expanded');
        })
    box.classList.add('expanded')})
})