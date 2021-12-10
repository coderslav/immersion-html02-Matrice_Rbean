document.addEventListener('DOMContentLoaded', function () {
    let gridCells = document.getElementsByTagName('td');

    function clickHandler() {
        if (this.childElementCount !== 0) {
            console.log('ya tut');
            let newRandomCell = this.cellOrder;
            while (newRandomCell === this.cellOrder) {
                newRandomCell = Math.round(Math.random() * (gridCells.length - 1));
            }
            this.innerHTML = '';
            gridCells[newRandomCell].innerHTML = '<img src="kitty.jpg"></img>';
        }
    }

    for (let index = 0; index < gridCells.length; index++) {
        gridCells[index].cellOrder = index;
        gridCells[index].addEventListener('click', clickHandler);
    }
});
