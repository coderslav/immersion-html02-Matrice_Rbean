document.addEventListener('DOMContentLoaded', function () {
    function updateHandler() {
        let olElement = document.getElementsByTagName('ol')[0];
        let liElementsList = document.getElementsByTagName('li');
        let newElement = document.createElement('li');
        newElement.textContent = 'Avengers: Endgame (2019)';
        olElement.removeChild(liElementsList[4]);
        olElement.insertBefore(newElement, liElementsList[0]);

        document.getElementsByTagName('h2')[0].textContent = '2019 edition';
    }
    document.getElementById('update').addEventListener('click', updateHandler, { once: true });
});
