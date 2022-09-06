let productname = document.getElementById('productname');
let buyingprice = document.getElementById('buyingprice');
let sellingprice=document.getElementById('sellingprice');
let quantity=document.getElementById('quantity');
let total = document.getElementById('total');
let optionvalue = document.querySelector('#list');
let expirationdate = document.getElementById('expirationdate');
let submit = document.getElementById('submit');



let mood='create';
let tmp;
//total
function getTotal()
{
    if(buyingprice.value != ''){
        let result = +buyingprice.value* +quantity.value;
        total.innerHTML = result+"  درهم  ";
        total.style.background='#040';  
        total.style.color='white';
    }else{
        total.innerHTML='';
    }
}



//create product
let dataPro = [];
if(localStorage.product!=null){
    dataPro = JSON.parse(localStorage.product);
}else{
    // dataPro=[];
}

submit.onclick=function(){//(e)
    // e.preventDefault();
    
    let newPro={
        productname:productname.value.toLowerCase(),
        buyingprice:buyingprice.value,
        sellingprice:sellingprice.value,
        quantity:quantity.value,
        total:total.innerHTML,
        optionvalue:optionvalue.value,
        expirationdate:expirationdate.value,
    }
    if(productname.value != '' 
        && buyingprice.value!='' 
        && sellingprice.value!=''
        && quantity.value!=''
        && total.innerHTML!=''
        )
      {
        if(mood==='update'){
        dataPro[tmp] = newPro;
        submit.innerHTML='أدخل';
      
    }else{
        dataPro.push(newPro);
        localStorage.setItem('product', JSON.stringify(dataPro))
    }

    clearData();
}


    // if(mood==='update'){
    //     dataPro[tmp] = newPro;
    //     mood=='create';
    //     submit.innerHTML='أدخل';
      
    // }else{
    //     dataPro.push(newPro);
    // }




    //save local storage
    localStorage.setItem('product', JSON.stringify(dataPro))

    showData();
}




//clear inputs
function clearData(){
    productname.value='';
    buyingprice.value='';
    sellingprice.value='';
    quantity.value='';
    total.innerHTML='';
    optionvalue.value='';
    expirationdate.value='';
}


//read
function showData(){
    getTotal();
    let table='';
    for(let i=0; i<dataPro.length;i++){
        table+=`
        <tr>
        <td>${dataPro[i].productname}</td>
        <td>${dataPro[i].buyingprice}</td>
        <td>${dataPro[i].sellingprice}</td>
        <td>${dataPro[i].quantity}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].optionvalue}</td>
        <td>${dataPro[i].expirationdate}</td>
        <td><button onclick="updateData(${i})" type="submit" class="btn editbtn"><img src="images/edit.png" alt="تعديل" style="width:30px;height:30px;"></button></td>
        <td><button onclick="deleteData(${i})" type="submit" class="btn removebtn"><img src="images/remove.png" alt="حذف" style="width:30px;height:30px;"></button></td>
        </tr>
        ` 
    }
    document.getElementById('tbody').innerHTML=table;
}    

showData();




//delete
function deleteData(i){
    dataPro.splice(i, 1);
    localStorage.product=JSON.stringify(dataPro)
    showData();
}

//update

function updateData(i){
    productname.value=dataPro[i].productname;
    buyingprice.value=dataPro[i].buyingprice;
    sellingprice.value=dataPro[i].sellingprice;
    quantity.value=dataPro[i].quantity;
    getTotal()
    optionvalue.value=dataPro[i].optionvalue;
    expirationdate.value=dataPro[i].expirationdate;
    submit.innerHTML='تعديل';
    mood='update';
    tmp=i; 
    scroll({
        top:0,
        behavior:'smooth',
    })
}   

//search BY NAMEEEEEEEEEEEEEEEE

 function getSearchMood(id){
    let search=document.getElementById('search')
    search.focus()
    search.value='';
    showData()
 }

 function searchData(value){
    let table='';
            for(let i=0; i<dataPro.length;i++){
                if(dataPro[i].productname.includes(value.toLowerCase())){
                table+=`
                <tr>
                <td>${dataPro[i].productname}</td>
                <td>${dataPro[i].buyingprice}</td>
                <td>${dataPro[i].sellingprice}</td>
                <td>${dataPro[i].quantity}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].optionvalue}</td>
                <td>${dataPro[i].expirationdate}</td>
                <td><button onclick="updateData(${i})" type="submit" class="btn editbtn"><img src="images/edit.png" alt="edit.png" style="width:30px;height:30px;"></button></td>
                <td><button onclick="deleteData(${i})" type="submit" class="btn removebtn"><img src="images/remove.png" alt="remove" style="width:30px;height:30px;"></button></td>
                </tr>
                ` 
            }
    }
    document.getElementById('tbody').innerHTML=table;
 }

//search BY GROUPPPPPPPPPPPPP



function getSearchMood2(id){
    let search2=document.getElementById('search2')
    search2.focus()
    search2.value='';
    showData()
 }

 function searchData2(value){
    let table='';
            for(let i=0; i<dataPro.length;i++){
                if(dataPro[i].optionvalue.includes(value)){
                table+=`
                <tr>
                <td>${dataPro[i].productname}</td>
                <td>${dataPro[i].buyingprice}</td>
                <td>${dataPro[i].sellingprice}</td>
                <td>${dataPro[i].quantity}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].optionvalue}</td>
                <td>${dataPro[i].expirationdate}</td>
                <td><button onclick="updateData(${i})" type="submit" class="btn editbtn"><img src="images/edit.png" alt="edit.png" style="width:30px;height:30px;"></button></td>
                <td><button onclick="deleteData(${i})" type="submit" class="btn removebtn"><img src="images/remove.png" alt="remove" style="width:30px;height:30px;"></button></td>
                </tr>
                ` 
            }
    }
    document.getElementById('tbody').innerHTML=table;
 }

//clean data


for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
  }



























// let searchMood='title';
//  function getSearchMood(id)
//  {
//     let search=document.getElementById('search')
//     if(id=='searchTitle'){
//         searchMood='title';
//         search.placeholder='إبحث بالإسم  ...';
//     }else{
//         searchMood='category';
//         search.placeholder=' إبحث بالنوع  ...';
//     }
//     search.focus()
//     search.value='';
//     showData()
//  }

//  function searchData(value){
//     let table='';
//     if(searchMood='title'){
//             for(let i=0; i<dataPro.length;i++){
//                 if(dataPro[i].optionvalue.includes(value.toLowerCase())){
//                 table+=`
//                 <tr>
//                 <td>${dataPro[i].productname}</td>
//                 <td>${dataPro[i].buyingprice}</td>
//                 <td>${dataPro[i].sellingprice}</td>
//                 <td>${dataPro[i].quantity}</td>
//                 <td>${dataPro[i].total}</td>
//                 <td>${dataPro[i].optionvalue}</td>
//                 <td>${dataPro[i].expirationdate}</td>
//                 <td><button onclick="updateData(${i})" type="submit" class="btn editbtn"><img src="../images/edit.png" alt="edit.png" style="width:30px;height:30px;"></button></td>
//                 <td><button onclick="deleteData(${i})" type="submit" class="btn removebtn"><img src="../images/remove.png" alt="remove" style="width:30px;height:30px;"></button></td>
//                 </tr>
//                 ` 
//             }


//           }

//     }
//     else{
//         for(let i=0; i<dataPro.length;i++){
//             if(dataPro[i].productname.includes(value.toLowerCase())){
//             table+=`
//             <tr>
//             <td>${dataPro[i].productname}</td>
//             <td>${dataPro[i].buyingprice}</td>
//             <td>${dataPro[i].sellingprice}</td>
//             <td>${dataPro[i].quantity}</td>
//             <td>${dataPro[i].total}</td>
//             <td>${dataPro[i].optionvalue}</td>
//             <td>${dataPro[i].expirationdate}</td>
//             <td><button onclick="updateData(${i})" type="submit" class="btn editbtn"><img src="../images/edit.png" alt="edit.png" style="width:30px;height:30px;"></button></td>
//             <td><button onclick="deleteData(${i})" type="submit" class="btn removebtn"><img src="../images/remove.png" alt="remove" style="width:30px;height:30px;"></button></td>
//             </tr>
//             ` 
//         }


//       }
//     }
//     document.getElementById('tbody').innerHTML=table;
//  }







//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}