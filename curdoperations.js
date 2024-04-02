let addPro = document.getElementById("add-pro");
let modal = document.getElementById("modal")
let closeBtn = document.getElementsByClassName("close-btn");
function showModal(){
    modal.classList.add("active");    
}

function Close_modal(){
    modal.classList.remove("active");
}

function addBtn(){
    AddProduct();
    showData();
} 


function AddProduct(){ 
    let productData = JSON.parse(localStorage.getItem("productData")) || [];

    // Get the new product details from the form
    let prodName = document.getElementById("prod-name").value;
    let sellPrice = document.getElementById("sell-price").value;
    let buyingPrice = document.getElementById("Buy-price").value;

    // Create a new product object
    let newProduct = {
        prodName: prodName,
        sellPrice: sellPrice,
        buyingPrice: buyingPrice
    };

    productData.push(newProduct);

    localStorage.setItem("productData", JSON.stringify(productData));
    
}


const showData =()=>{
    let tableBody= document.getElementById("table-body");
    let productData = JSON.parse(localStorage.getItem("productData")) || [];
    tableBody.innerHTML ='';
    console.log(productData)
    productData.forEach((data,index)=>{
        tableBody.innerHTML += `<tr index="${index}">
        <td>${data.prodName}</td>
        <td>${data.buyingPrice}</td>
        <td>${data.sellPrice}</td>
        <td>
          <button><i class="fa-regular fa-pen-to-square edit-btn"></i></button>
          <button><i class="fa-regular fa-trash-can" id="del-btn"></i></button>
        </td>
      </tr>`
    })

    // Delete row

    let allDeleteBtn = document.querySelectorAll("#del-btn");
    for(let i=0; i<allDeleteBtn.length; i++){
        allDeleteBtn[i].onclick = function(){
            let CurrRow = this.parentElement.parentElement.parentElement;
            let rowId = CurrRow.getAttribute("index")
            productData.splice(rowId,1)
            localStorage.setItem("productData",JSON.stringify(productData));
            CurrRow.remove();
            console.log(CurrRow)
        }
    }


    // Update records

    let allEditBtn = document.querySelectorAll(".edit-btn")
    let updateBtn = document.getElementById("update-btn")
    let addBtn = document.getElementById("add-btn")
    for(let i=0;i<allEditBtn.length; i++){
        allEditBtn[i].onclick = function(){
            let CurrRow =this.parentElement.parentElement.parentElement;
            let td = CurrRow.getElementsByTagName("td");
            let Name = td[0];
            let buyingPrice = td[1];
            let sellPrice = td[2];
            addPro.click();
            updateBtn.disabled= false;
            addBtn.disabled = true;

            console.log(buyingPrice)

            let prodName = document.getElementById("prod-name");
            let sellPrc = document.getElementById("sell-price");
            let buyingPrc = document.getElementById("Buy-price");
            let rowId = CurrRow.getAttribute("index")

            prodName.value = Name.innerHTML;
            buyingPrc.value = buyingPrice.innerHTML;
            sellPrc.value = sellPrice.innerHTML;

            updateBtn.onclick= function(e){
                // e.preventDefault();
                let productData = JSON.parse(localStorage.getItem("productData")) || [];

                productData[rowId]={
                    prodName: prodName.value,
                    sellPrice: sellPrc.value,
                    buyingPrice: buyingPrc.value
                }
                localStorage.setItem("productData", JSON.stringify(productData))
            }
        }
    }
}

showData()

// Swal.fire("SweetAlert2 is working!");
