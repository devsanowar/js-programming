let programs = document.querySelectorAll("input[name=program]");
Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler)
});

function programHandler(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
}