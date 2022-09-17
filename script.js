document.addEventListener('DOMContentLoaded', ()=> {

    const url ="https://api.freecurrencyapi.com/v1/latest?apikey=GEV2RIK7pl88DGP6wTh8clHroI35DxLtkoMSQRIY&currencies=CAD,EUR";
    const usd = document.getElementById('usd');
    const cad = document.getElementById('cad');
    let currencyData;
    let exchangeRate;


    async function getData() {
        const response = await fetch(url);
        currencyData = await response.json();
        currencyData = currencyData.data;
        exchangeRate = currencyData['CAD'];
        console.log(currencyData , exchangeRate);
    }

    function calculateUsd(event) {
        event.preventDefault();
        let currency = parseInt(cad.value);
        usd.value = currency / exchangeRate;
    }

    function calculateCad(event) {
        event.preventDefault();
        let dollars = parseInt(usd.value);
        cad.value = dollars * exchangeRate;
    }

    usd.addEventListener('input', calculateCad);
    cad.addEventListener('input', calculateUsd);


    getData();
});