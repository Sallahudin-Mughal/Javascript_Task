let addPro = document.getElementById("add-pro");
let modal = document.getElementById("modal");
let closeBtn = document.getElementsByClassName("close-btn");
let AddProductBtn = document.getElementById("add-btn");
let productupdateBtn = document.getElementById("update-btn");

function showModal() {
  modal.classList.add("active");
}
function Close_modal() {
  modal.classList.remove("active");
}

class ProductData {
  constructor(prodName, buyingPrice, sellPrice) {
    this.prodName = prodName;
    this.buyingPrice = buyingPrice;
    this.sellPrice = sellPrice;
  }
}

class ProductManager {
  constructor() {
    // Initialize product data from localStorage or an empty array
    this.productData = JSON.parse(localStorage.getItem("productData")) || [];
  }

  addProduct(prodName, sellPrice, buyingPrice) {
    console.log("Add function called...");
    // Create a new product object
    const NewProduct = new ProductData(prodName, buyingPrice, sellPrice);
    console.log("Called const...");

    // Push the new product to the product data array
    this.productData.push(NewProduct);
    console.log("Pushed Data...");

    // Save the updated product data back to localStorage
    localStorage.setItem("productData", JSON.stringify(this.productData));
    swal("Logout", "Are you sure you want to logout!", "warning");
  }

  // Delete Table record

  // Show Data on DOM
  static showData() {
    let tableBody = document.getElementById("table-body");
    let productData = JSON.parse(localStorage.getItem("productData")) || [];
    tableBody.innerHTML = "";
    // console.log(productData);
    productData.forEach((data, index) => {
      tableBody.innerHTML += `<tr index="${index}">
          <td class="first-row-cell">${index + 1}</td>
          <td>${data.prodName}</td>
          <td>${data.buyingPrice}</td>
          <td>${data.sellPrice}</td>
          <td class="last-row-cell">
            <button><i class="fa-regular fa-pen-to-square edit-btn"></i></button>
            <button><i class="fa-regular fa-trash-can" id="del-btn"></i></button>
          </td>
        </tr>`;
    });

    // Delete records
    // Display confirmation dialog before deleting the product
    let allDeleteBtn = document.querySelectorAll("#del-btn");
    for (let i = 0; i < allDeleteBtn.length; i++) {
      allDeleteBtn[i].onclick = function () {
        let CurrRow = this.parentElement.parentElement.parentElement;
        let rowId = CurrRow.getAttribute("index");
        productData.splice(rowId, 1);
        localStorage.setItem("productData", JSON.stringify(productData));
        CurrRow.remove();
        console.log(CurrRow);
      };
    }
    // Update records

    let allEditBtn = document.querySelectorAll(".edit-btn");
    let updateBtn = document.getElementById("update-btn");
    let addBtn = document.getElementById("add-btn");
    for (let i = 0; i < allEditBtn.length; i++) {
      allEditBtn[i].onclick = function () {
        let CurrRow = this.parentElement.parentElement.parentElement;
        let td = CurrRow.getElementsByTagName("td");
        let Name = td[1];
        let buyingPrice = td[2];
        let sellPrice = td[3];
        addPro.click();
        updateBtn.disabled = false;
        addBtn.disabled = true;

        console.log(buyingPrice);

        let prodName = document.getElementById("prod-name");
        let sellPrc = document.getElementById("sell-price");
        let buyingPrc = document.getElementById("Buy-price");
        let rowId = CurrRow.getAttribute("index");

        prodName.value = Name.innerHTML;
        buyingPrc.value = buyingPrice.innerHTML;
        sellPrc.value = sellPrice.innerHTML;

        updateBtn.onclick = function (e) {
          // e.preventDefault();
          let productData =
            JSON.parse(localStorage.getItem("productData")) || [];

          productData[rowId] = {
            prodName: prodName.value,
            sellPrice: sellPrc.value,
            buyingPrice: buyingPrc.value,
          };
          localStorage.setItem("productData", JSON.stringify(productData));
        };
      };
    }
  }
}

const productManager = new ProductManager();
ProductManager.showData();

// Add product
function addBtn() {
  let prodName = document.getElementById("prod-name").value;
  let sellPrice = document.getElementById("sell-price").value;
  let buyingPrice = document.getElementById("Buy-price").value;

  productManager.addProduct(prodName, sellPrice, buyingPrice);

  // swal("Good job!", "You clicked the button!", "success");
  productManager.showData();
}

function deleteProduct(index) {
  productManager.deleteProduct(index);
}

// Logout
function logout() {
  swal("Logout", "Are you sure you want to logout!", "warning").then(
    (value) => {
      if (value) {
        window.location.href = "index.html";
      }
    }
  );
}
