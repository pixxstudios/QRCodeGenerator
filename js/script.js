const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

function onGenerateSubmit(e) {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size);

    if(url.trim() === '') {
        alert("Enter a URL");
    } else {
        clearQR_UI();
        showSpinner();
        generateQRCode(url, size);
    }
}

const clearQR_UI = () => {
    qr.innerText = '';
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
    hideSpinner();
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
