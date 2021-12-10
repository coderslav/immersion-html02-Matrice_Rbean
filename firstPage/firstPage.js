document.addEventListener('DOMContentLoaded', function () {
    document.title = 'My first (dynamic) webpage';

    document.getElementsByTagName('h2')[0].addEventListener('click', () => {
        window.alert('Sir Edmund Spenser (1590)');
    });
    document.getElementsByTagName('h2')[1].addEventListener('click', () => {
        window.alert('Folk Song (unknown)');
    });
});
