const btn_pesq = document.getElementById("btn_pesq")
const f_txtpesq = document.getElementById("f_txtpesq")

btn_pesq.addEventListener("click",()=>{
    if(f_txtpesq.value == ""){
        alert("Digite a pesquisa")
        f_txtpesq.focus()
        return
    }
})