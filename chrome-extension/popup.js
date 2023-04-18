pageInput = document.querySelector('#page');

pageInput.focus();

pageInput.addEventListener('keypress', (event)=> {
    // Check if enter key is pressed
    if (!(event.keyCode === 13)) { return }

    let url = 'https://quran.com/page/'
    window.open(url + pageInput.value, '_blank').focus();
})