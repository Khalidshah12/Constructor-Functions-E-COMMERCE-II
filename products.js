

var Products = JSON.parse(localStorage.getItem("Products"))

display(Products)
function display(data) {
    data.forEach(function (elem, index) {

        const box = document.createElement('div');
        box.setAttribute("class", "product")


        const image = document.createElement('img');
        image.setAttribute("src", elem.image)

        const name = document.createElement('h3');
        name.innerText = "Name: " + elem.name

        const category = document.createElement('p');
        category.innerText = "Category: " + elem.category

        const price = document.createElement('p');
        price.innerText = "Price: " + elem.price + "/-" + " Rs."

        const gender = document.createElement('p');
        gender.innerText = "Gender: " + elem.gender

        const sold = document.createElement('p');
        sold.innerText = "Sold: " + elem.sold

        const removeButton = document.createElement('button');
        removeButton.setAttribute("id", "remove")
        removeButton.innerText = "Remove"
        removeButton.addEventListener("click", function () {
            remove(elem, index)
        })

        const soldButton = document.createElement('button');
        soldButton.setAttribute("id", "sold")
        soldButton.innerText = "Sold"
        soldButton.style.color = "green"
        soldButton.addEventListener("click", soldFunction)
        function soldFunction() {
            if (sold.innerText == "Sold: False") {
                sold.innerText = "Sold: True"
                soldButton.style.color = "red"
            }
            else if (sold.innerText == "Sold: True") {
                sold.innerText = "Sold: False"
                soldButton.style.color = "green"
            }
        }

        box.append(image, name, category, price, gender, sold, removeButton, soldButton)
        document.querySelector("#container").append(box)


        var counter = document.querySelector("#counter")
        counter.innerText = "Total Products: " + data.length
    })
}

function remove(elem, index) {
    Products.splice(index, 1)
    localStorage.setItem("Products", JSON.stringify(Products))
    window.location.reload()
}