document.addEventListener('DOMContentLoaded', function () {
    let styleSheet = document.createElement('style');
    styleSheet.innerHTML = 'div { display: inline-block; padding: 1rem 1rem 2rem; } div#square {display: block; width: 500px; height: 500px; background-color: blue; content: "";}' + '#blue:hover ~ #square{background-color: blue;}' + '#red:hover ~ #square{background-color: red;}' + '#yellow:hover ~ #square{background-color: yellow;}' + '#green:hover ~ #square{background-color: green;}' + '#black:hover ~ #square{background-color: black;}';
    document.head.appendChild(styleSheet);
});
