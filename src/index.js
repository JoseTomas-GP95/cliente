const BASE_URL = "https://daily-dog-news.p.rapidapi.com"
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d8f3c26d7fmsh55c12a9d676040dp1b97c9jsnaed71d4fc7a4",
    "X-RapidAPI-Host": "daily-dog-news.p.rapidapi.com",
  },
}

const body = document.querySelector("html")
body.className = "bg-blue-50"

// Root DOM - Inyection
const app = document.getElementById("app")
app.className = "px-9"

// MAIN:
const main = document.createElement("main")
main.className = "bg-indigo-500 h-32 text-center flex flex-col justify-around shadow-lg"

// Main title:
const mainTitle = document.createElement("h1")
mainTitle.className = "text-xl font-bold text-2xl text-white"
mainTitle.textContent = "Welcome to Daily Dog News 🗞️"

// filter describe
const filterDescribe = document.createElement("p")
filterDescribe.textContent = "You can filter by Sources here: "

// Select filter
const selectContainer = document.createElement("div") 
const selectFilter = document.createElement("select")
selectFilter.title = "You can filter by sources here"

// Options filter
const optionsList = ["independent", "google", "fox", "cbs", "ap"]
const htmlList = []

for (let i = 0; i < optionsList.length; i++) {
  const option = document.createElement("option")
  option.textContent = optionsList[i]
  
  htmlList.push(option)
}




// Mi useEffect
window.onload = async () => {
  const response = await fetch(`${BASE_URL}/news`, options)
  const responseJSON = await response.json()

  // MAPPING
  const dogsList = responseJSON.map(dog => {

    // Title h3
    const title = document.createElement("h3")
    title.textContent = dog.title
    title.className = "text-xl font-bold pb-3.5 text-gray-900"

    // Source
    const source = document.createElement("small")
    source.textContent = dog.source

    // See more url
    const anchor = document.createElement("a")
    anchor.href = dog.url
    anchor.className = "font-bold p-4 text-indigo-500"
    anchor.target = "_blank"
    anchor.textContent = "See more..."

    // hr line
    const line = document.createElement("hr")
    line.className = "w-screen"

    // tag container
    const container = document.createElement("div")
    container.className = "flex flex-col justify-center items-center h-30 p-12 border-solid border-b border-gray-400 shadow-md my-12 rounded-lg bg-white"
    container.append(
      title, 
      anchor,
      source
    )
    
    return container
  })

  app.append(...dogsList)
  
}



// ADD SECTION

selectFilter.append(...htmlList)
selectContainer.append(selectFilter)

main.append(mainTitle, selectContainer)

app.appendChild(main)
console.log("main: ", main)