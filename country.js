
const countryName=new URLSearchParams(location.search).get('name')
const flagImage=document.querySelector('.country-details img')
const countryNameH1=document.querySelector('.country-details h1')
// const nativeName=document.querySelector('.native-name')
const population=document.querySelector('.population')
const capital=document.querySelector('.capital')
const toLevelDomain=document.querySelector('.top-level-domain')
const currencies=document.querySelector('.currencies')
const languages=document.querySelector('.languages')
const borderCountries=document.querySelector('.border-countries')





fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country]) => {
    flagImage.src = country.flags.svg
    countryNameH1.innerText = country.name.common
    population.innerText=country.population.toLocaleString('en-IN')
    capital.innerText=country.capital?.[0]
    toLevelDomain.innerText=country.tld
    // if (country.name.nativeName) {
    //     nativeName.innerText =Object.values(country.name.nativeName)[0].common
    // }
    if(country.currencies){
        currencies.innerText=(Object.values(country.currencies).map((currency) => currency.name))
    }

    if(country.languages){
        languages.innerText=Object.values(country.languages)
    }

    if(country.borders){
        country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res)=>res.json())
        .then(([data]) =>{
        const borderCountry=document.createElement('a')
        borderCountry.innerText = data.name.common
        borderCountry.href=`/country.html?name=${data.name.common}`
        borderCountries.append(borderCountry)
            })
        })
    }
})



// fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
//   .then((res) => res.json())
//   .then(([country]) => {
//     flagImage.src = country.flags.svg
//     countryNameH1.innerText = country.name.common
//    })
