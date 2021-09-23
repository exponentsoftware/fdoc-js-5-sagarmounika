
const API_URL = "https://restcountries.com/v3/all"

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    // 1
    const languages = new Set();
    console.log(languages,"languages")
    console.log(data,"data")
    data.forEach(c => {
      if (c.languages) Object.values(c.languages).forEach(x => languages.add(x))
    })

    console.log("--- TOTAL LANGUAGES --- ", languages.size)

    const largest10 = data
      .sort((a, b) => b.area - a.area)
      .slice(0, 10)
      .map(c => ({ country: c.name.common, area: c.area }))

    console.log("--- 10 LARGEST COUNTRIES --",largest10)
    // console.log()
  })
