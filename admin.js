const submitButton = document.querySelector('#add');
    submitButton.addEventListener("click",submitFunction)


    function items(name,category,image,price,gender,sold){
        this.name = name
        this.category = category
        this.image = image
        this.price = price
        this.gender = gender
        this.sold = sold
    }


    var arr = JSON.parse(localStorage.getItem("Products")) || [];
    function submitFunction(){
        var name = form.name.value;
        var category = form.category.value;
        var image = form.image.value;
        var price = form.price.value;
        var gender = form.gender.value;
        var sold = form.sold.value;

        var print = new items(name,category,image,price,gender,sold)
        arr.push(print)
        localStorage.setItem("Products",JSON.stringify(arr))
        window.location.href = "./products.html"
    }