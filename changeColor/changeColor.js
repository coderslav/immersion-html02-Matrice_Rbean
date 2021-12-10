document.addEventListener('DOMContentLoaded', function () {
    let styleSheet = document.createElement('style');
    styleSheet.innerHTML = 'div { display: inline-block; padding: 1rem 1rem 2rem; } div#square {display: block; width: 500px; height: 500px; background-color: blue; content: "";}';
    document.head.appendChild(styleSheet);

    let divList = document.getElementsByTagName('div');

    for (let index = 0; index < divList.length; index++) {
        if (divList[index].textContent !== '') {
            divList[index].addEventListener('mouseover', () => {
                document.getElementById('square').style.backgroundColor = divList[index].textContent.toLowerCase();
            });
            divList[index].addEventListener('mouseout', () => {
                document.getElementById('square').style.backgroundColor = 'blue';
            });
        }
    }
});
