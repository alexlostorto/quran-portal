console.log("Script is running");

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchDependencies() {
    let response = await fetch('https://raw.githubusercontent.com/alexlostorto/quran-portal/main/release.json');
    let json = await response.json();

    for (url of json.dependencies.js) {
        let js = document.createElement("script");
        js.src = url;
        js.async = false;
        js.defer = false;
        document.head.appendChild(js);
    }

    for (url of json.dependencies.css) {
        let link = document.createElement("link");
        link.href = url;
        link.rel = "stylesheet"
        document.head.appendChild(link);
    }
}

fetchDependencies();

// CSS 
document.head.insertAdjacentHTML('beforeend','<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />')

// DOM ELEMENTS
let translationsView = document.querySelector('.TranslationView_wrapper__C8vfW');
let body = document.querySelector('body');

function createProgressElement() {
    const container = document.createElement('div');
    container.classList.add('page-progress-counter');

    const progress = document.createElement('span');
    progress.textContent = '0%';
    
    container.appendChild(progress);
    body.appendChild(container);

    window.addEventListener('scroll', updateProgress);
}

function updateProgress() {
    let progressCounter = document.querySelector('.page-progress-counter span');
    let height = translationsView.clientHeight - document.documentElement.clientHeight;
    let progress = Math.floor(window.pageYOffset / height * 100);

    if (progress > 100) {progress = 100};

    progressCounter.textContent = progress + '%';
}

function main() {
    if (translationsView === null) { return }

    progressCounter = document.querySelector('.page-progress-counter span');

    if (progressCounter === null) { createProgressElement(); }
}


async function credits() {
    await sleep(200);
    console.clear();
    console.log.apply(console, ["%c Thanks for using Quran Portal! ","color: #fff; background: #8000ff; padding:5px 0;"])
    console.log.apply(console, ["%c Designed and Developed by Alex lo Storto %c\ud83d\ude80 ","color: #fff; background: #8000ff; padding:5px 0;","color: #fff; background: #242424; padding:5px 0 5px 5px;"])
    main();
}

main();

credits();
setInterval(credits, 1000);