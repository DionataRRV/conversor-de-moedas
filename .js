const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {
      const inputCurrencyValue = document.querySelector(".input-currency").value
      const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
      const currencyValueConverted = document.querySelector(".currency-value")
      console.log(currencySelect.value)
      const dolarToday = 5.89
      const euroToday = 6.65
      const libraToday = 7.79
      const bitcoinToday = 492.335 

      if (currencySelect.value == "dolar") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
      }

      if (currencySelect.value == "euro") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
      }
      if (currencySelect.value == "libra") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
                  style: "currency",
                  currency: "GBT"
            }).format(inputCurrencyValue / libraToday)
      }
      if (currencySelect.value == "bitcoin") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "BTC"
            }).format(inputCurrencyValue / bitcoinToday)
      }


      currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
      }).format(inputCurrencyValue)
}


function changeCurrency() {
      const currencyName = document.getElementById("currency-name")
      const currencyImg = document.querySelector(".currency-img")

      if (currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dólar Americano"
            currencyImg.src = "./assets/dolar.png"
      }
      if (currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImg.src = "./assets/Euro.png"      
      }
      if (currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
            currencyImg.src = "./assets/libra 1.png"
      }
      if (currencySelect.value == "bitcoin"){
            currencyName.innerHTML = "Bitcoin"
            currencyImg.src = "./assets/bitcoin 1.png"
      }
      convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
