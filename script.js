const API_URL_LIVE = "https://www.freeforexapi.com/api/live?pairs=";

function takeDataFromTextField() {
    var currencyPair = document.getElementById("currencyPairTextField").value;

        axios.get(API_URL_LIVE + currencyPair).then(response => {
        var b = document.getElementById("resultDiv");
        var str = JSON.stringify(response.data.rates);
        str = str.replace(/"/g, "");
        str = str.replace(/}/g, "");
        str = str.replace(/:/g, ": ");
        str = str.replace(/,/g, ", ");
        str = str.replace(/rate/g, "kurs");
        str = str.replace(/timestamp/g, "sygnatura czasowa");
        b.innerText = str.replace(/{/g, "");
    });
}
