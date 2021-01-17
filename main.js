const API_URL="https://dry-cliffs-94979.herokuapp.com/"

const fetchAPI = async(url) => {
    let response = await fetch(url)
    const textResponse = await response.text()
    return JSON.parse(textResponse)
    //document.write(textResponse)
}


const renderPage=async() => {
    const apiData=await fetchAPI(API_URL)
    console.log(apiData)

    cardContainer = document.querySelector(".card-container");

    apiData.forEach(property => {
        const{name, photo, price, property_type}=property;

        cardInfo = document.createElement("div");
        cardInfo.className="card-info";

        card = document.createElement("div");
        card.className="card";

        houseName = document.createElement("div");
        houseName.className="house-name";
        houseName.innerHTML=name;

        cardImg = document.createElement("img");
        cardImg.className = "card-img"
        cardImg.src = photo;

        housePrice = document.createElement("div");
        housePrice.className = "house-price";
        housePrice.innerHTML = "R$ " + price +",00";

        cardContainer.appendChild(card);
        card.appendChild(cardImg)
        card.appendChild(cardInfo);
        cardInfo.appendChild(houseName);
        cardInfo.appendChild(housePrice)



    })}

renderPage()


// ctrl k c, ctrl k u

// document.write("Jamile linda")
// alert("TESTE TESTE TESTE QUE COISA MAIS LINDA VC É")