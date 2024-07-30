const cabecalho = document.getElementById("cabecalho")
const menu = document.getElementById("menu")
const btn_home = document.getElementById("btn_home")
const btn_novo = document.getElementById("btn_novo")
const btn_pesquisar = document.getElementById("btn_pesquisar")
const btn_gestao = document.getElementById("btn_gestao")
const btn_sobre = document.getElementById("btn_sobre")
const principal = document.getElementById("principal")

btn_home.addEventListener("click",(e)=>{  
    abrirPagina(e.target,"./pages/home.html")
})

btn_novo.addEventListener("click",(e)=>{   
    abrirPagina(e.target,"./pages/novo.html")
})

btn_pesquisar.addEventListener("click",(e)=>{   
    abrirPagina(e.target,"./pages/pesquisar.html")
})

btn_gestao.addEventListener("click",(e)=>{ 
    abrirPagina(e.target,"./pages/gestao.html")
})

btn_sobre.addEventListener("click",(e)=>{
    abrirPagina(e.target,"./pages/sobre.html")
}) 

const abrirPagina = (elemento,url)=>{
    const abas = [...document.querySelectorAll(".aba")]
    abas.forEach(e=>{
        e.classList.remove('abaSelecionada')
    })
    elemento.classList.add('abaSelecionada')
    window.open(url,"ifprincipal")
}