document.addEventListener('DOMContentLoaded', function () {
    let totalElement = document.getElementById('total');
    function checkHandler() {
        let checkboxContent = this.parentElement.nextElementSibling.textContent;
        if (checkboxContent !== '-') {
            let price = parseFloat(checkboxContent.slice(1));

            if (this.checked) {
                totalElement.textContent = price + parseFloat(totalElement.textContent);
            }
            if (!this.checked) {
                totalElement.textContent = parseFloat(totalElement.textContent) - price;
            }
        }
    }

    let inputList = document.getElementsByTagName('input');
    for (let i = 0; i < inputList.length; i++) {
        inputList[i].addEventListener('change', checkHandler);
    }
});
