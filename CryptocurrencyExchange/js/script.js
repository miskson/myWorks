function init() {
    function generateId() {
        var checkIdArr = new Uint32Array(1);
        window.crypto.getRandomValues(checkIdArr);
        return checkIdArr[0];
    }
    var checkId = document.getElementById("CheckId");
    checkId.innerHTML = generateId();
}

window.onload = init();

document.getElementById("fromcurrency").addEventListener('change', getSelectedSellValue);


function getSelectedSellValue() {
    console.log(document.getElementById("fromcurrency").value);
    /*var chosenValue =*/return document.getElementById("fromcurrency").value;
}

setSellValueTitle(getSelectedSellValue());

function setSellValueTitle(value) {
    document.getElementById("fromCurrencyType").innerHTML = value;
}

