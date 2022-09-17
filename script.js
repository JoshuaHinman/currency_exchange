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
        let currency = parseFloat(cad.value);
        usd.value = (currency / exchangeRate).toFixed(2);
    }

    function calculateCad(event) {
        event.preventDefault();
        let dollars = parseFloat(usd.value);
        cad.value = (dollars * exchangeRate).toFixed(2);
    }

    usd.addEventListener('input', calculateCad);
    cad.addEventListener('input', calculateUsd);

    getData();
});