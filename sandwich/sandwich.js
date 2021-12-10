document.addEventListener('DOMContentLoaded', function () {
    let totalElement = document.getElementById('total');
    function checkHandler() {
        let checkboxContent = this.parentElement.nextElementSibling.textContent;
        if (checkboxContent !== '-') {
            let price = parseFloat(checkboxContent.slice(1));

            if (this.checked) {
                let newTotalPrice = price + parseFloat(totalElement.textContent);
                totalElement.textContent = Number.isInteger(newTotalPrice) ? newTotalPrice.toFixed(1) : newTotalPrice;
            }
            if (!this.checked) {
                let newTotalPrice = parseFloat(totalElement.textContent) - price;
                totalElement.textContent = Number.isInteger(newTotalPrice) ? newTotalPrice.toFixed(1) : newTotalPrice;
            }
        }
    }

    let inputList = document.getElementsByTagName('input');
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].addEventListener('change', checkHandler);
    }
});
