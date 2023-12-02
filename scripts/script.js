//KLASSE CarRim AANMAKEN
//Klasse = blueprint voor objecten (groeperen van bepaalde data) (js objects kunnen hiervoor uiteraard ook gebruikt worden.)
class CarRim{
    constructor(name,price,description, img){
        this.name = name;
        this.price = price;
        this.description = description;
        this.img = img;
    }
    //GETTERS
    getName(){
        return this.name;
    }
    getPrice(){
        return this.price;
    }
    getDescription(){
        return this.description;
    }
    getImg(){
        return this.img;
    }
    //SETTERS
    setName(name){
        this.name = name;
    }
    setPrice(price){
        this.price = price;
    }
    setDescription(description){
        this.description = description;
    }
    setImg(img){
        this.img = img;
    }

}
const itemContainer = document.querySelector("#offer");
let rim1;
let rim2;
let rim3;
let rim4;
let rim5;
let rim6;
let rims = {rim1,rim2,rim3,rim4,rim5,rim6}
fetch('./data/testData.json')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.rims.length; i++){
            //nieuwe objecten van carRim worden aangemaakt op basis van CarRim klasse.
            rims[i] = new CarRim(data.rims[i].name,data.rims[i].price, data.rims[i].description,data.rims[i].img);
        }


        //Op basis van de objecten word nu de webpagina aangemaakt.
        //Gebruik van klasses geeft overzichtelijke weergave voor bv. een webstore.
        //Klasses zorgen voor overzicht in code.
        for(let i = 0; i < data.rims.length; i++){
            itemContainer.innerHTML += `
                <article>
                <div>
                    <img src="${rims[i].getImg()}">
                </div>
                <h3>${rims[i].getName()}</h3>
                <p>${rims[i].getDescription()}</p>
                <p>€${rims[i].getPrice()}</p>
                <button class="modal-btn">Aan winkelmandje toevoegen!</button>
                </article>
            `
        }
    })

    .catch(error => console.error("Error:", error));

