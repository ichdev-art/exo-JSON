// data à travailler : il s'agit d'un objet contenant un tableau de membres
const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality"
            ]
        },
        {
            "name": "Fatality",
            "age": 33,
            "secretIdentity": "Isaac Mewton",
            "powers": [
                "Fatality resistance"
            ]
        },
        {
            "name": "Running Lady",
            "age": 24,
            "secretIdentity": "Britney Sears",
            "powers": [
                "Speed of light"
            ]
        }
    ]
}

document.getElementById("Squad").innerHTML = data.squadName
document.getElementById("H").innerHTML = data.homeTown
document.getElementById("D").innerHTML = data.formed
// data.members.forEach((item) => {
//     document.querySelector(".container-card").innerHTML += `<div class="card">
//             <h2>${item.name}</h2>
//             <ul>
//                 <li>Secret identity : <span>${item.secretIdentity}</span></li>
//                 <li>Age : <span>${item.age}</span></li>
//                 <li>Superpowers :
//                     <ul>
//                         <li class="norm">${item.powers}</li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>`
// })

