const btn_pesq = document.getElementById("btn_pesq")
const f_txtpesq = document.getElementById("f_txtpesq")

btn_pesq.addEventListener("click",(evt)=>{
    const valorpesq =  f_txtpesq.value
    if(valorpesq == ""){
        alert("Digite a pesquisa")
        f_txtpesq.focus()
        return
    }
    const f_pesq = document.querySelector("input[name=f_pesq]:checked").value
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorpesq}`
    fetch(endpoint)
    .then(res=> res.json())
    .then(res =>{
        console.log(res);
    })
})