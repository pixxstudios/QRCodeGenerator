const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

function onGenerateSubmit(e) {
    e.preventDefault();
    clearQR_UI();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);

    if(url.trim() === '') {
        alert("Enter a URL");
    } else {
        showSpinner();
        generateQRCode(url, size);
    }
}

const clearQR_UI = () => {
    qr.innerText = '';

    const saveLink = document.getElementById('save-link');
    if (saveLink) {
        saveLink.remove();
    }
}

const generateQRCode = (url, size) => {
    new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    setTimeout(() => { createSaveButton(qr.querySelector('img').src) }, 10);
    
    hideSpinner();
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const createSaveButton = (saveUrl) => {
    const link = document.createElement('a');

    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
