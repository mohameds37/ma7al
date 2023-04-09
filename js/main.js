
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addBtn = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')

var tableBody = document.getElementById('tableBody');

var productsContainer =[];



if(localStorage.getItem('myProducts') != null)
{
     productsContainer = JSON.parse( localStorage.getItem('myProducts') );
     displayProducts(productsContainer);
}

else
{
    productsContainer = [];
}

//JSON

function addProduct() 
{
    var product= {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescriptionInput.value,
    }

    productsContainer.push(product);
    localStorage.setItem('myProducts' , JSON.stringify(productsContainer) )
    clearForm ();
    displayProducts(productsContainer);

}

function clearForm(){
    
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";

}



function displayProducts (List) {

    var cartoona = ``;

    for(var i = 0; i <List.length; i++){

        cartoona +=`<tr>
        <td>${i+1}</td>
        <td>${List[i].name}</td>
        <td>${List[i].price}</td>
        <td>${List[i].category}</td>
        <td>${List[i].desc}</td>
        <td> <button onclick="setFormForUpdate(${i})" class="btn btn-sm btn-outline-warning">Update</button> </td>
        <td> <button onclick="deleteProducts(${i})" class="btn btn-sm btn-outline-danger">Delete</button> </td>
    </tr>`
    } 

    tableBody.innerHTML = cartoona;

}

function searchProducts (searchTerm) {


    var searchResult = [];

    for (var i = 0; i < productsContainer.length; i++) {
        
        if(productsContainer[i].name.toLowerCase().includes(searchTerm) == true)
        {
            searchResult.push(productsContainer[i]);
        }
        
    }
    displayProducts(searchResult)
}


    

function deleteProducts(deletedIndex) {

    productsContainer.splice(deletedIndex,1)
    localStorage.setItem('myproducts',JSON.stringify(productsContainer))
    displayProducts(productsContainer)

}




function updateProduct() {
    var updatedIndex = updateBtn.getAttribute("data-index");

    var updatedProduct= {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescriptionInput.value,
    }

    productsContainer[updatedIndex] = updatedProduct;
    localStorage.setItem('myProducts' , JSON.stringify(productsContainer) )
    clearForm ();
    addBtn.classList.replace('d-none' , 'd-inline-block')
    updateBtn.classList.add('d-none')
    displayProducts(productsContainer);
}

function setFormForUpdate(updatedIndex){

    productNameInput.value = productsContainer[updatedIndex].name;
    productPriceInput.value = productsContainer[updatedIndex].price;
    productCategoryInput.value = productsContainer[updatedIndex].category;
    productDescriptionInput.value = productsContainer[updatedIndex].desc;

    updateBtn.setAttribute("data-index", updatedIndex);
    updateBtn.classList.replace('d-none' , 'd-inline-block')
    addBtn.classList.add('d-none')
}

















































// function setFormForUpdate(updatedIndex){

//     productNameInput.value = productsContainer[updatedIndex].name;
//     productPriceInput.value = productsContainer[updatedIndex].price;
//     productCategoryInput.value = productsContainer[updatedIndex].category;
//     productDescriptionInput.value = productsContainer[updatedIndex].desc;


//     updateBtn.classList.replace('d-none' , 'd-inline-block')
//     addBtn.classList.add('d-none')

// }




    // var productsContainer =[

    //     {name:'nokia', price: 9000, category: 'mobile', desc: 'good'},
    //     {name:'samsung', price: 9000, category: 'mobile', desc: 'good'},
    //     {name:'toshiba', price: 9000, category: 'mobile', desc: 'good'},
    //     {name:'oppo', price: 9000, category: 'mobile', desc: 'good'},

    // ]

    



















































