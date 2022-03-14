function creaUtenti(){
    var divPosizione = document.getElementById("contenitoreUtenti")
    var checkUser = localStorage.getItem("utentiSalvati")
    var userObject = JSON.parse(checkUser)

    userObject.forEach(function (element){
        var tr = document.createElement("tr")
        divPosizione.prepend(tr)
        var trCreata = document.querySelector("tr")

        for (key in element){
        var td = document.createElement("td")
        trCreata.prepend(td)
        document.querySelector("td").innerHTML = element[key]
        }

        var deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteUtente")
        deleteButton.innerHTML = "DELETE"
        trCreata.append(deleteButton)

        deleteButton.addEventListener("click", function(){
            tr.remove()
            rimuoviElementodaDB(element)
        })
    })
}

function deleteDB(user) {
    let ls = localStorage.getItem("utentiSalvati");
    let db = JSON.parse(ls);
    let indiceElemento = db.find(function(el){
        return user.id == el.id
    })

    var indexElement = db.indexOf(indiceElemento)
    db.splice(indexElement, 1);
    localStorage.setItem("utentiSalvati", JSON.stringify(db));
}