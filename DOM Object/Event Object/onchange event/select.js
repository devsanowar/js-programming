let department = document.querySelector("#selectId");
department.addEventListener("change", departmentHandler)
function departmentHandler(e){
    console.log(e.target.value)  
}