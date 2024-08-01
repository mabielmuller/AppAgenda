const dados = document.getElementById("dados")
const fundoPopup = document.getElementById("fundopopup")
const btn_editar = document.getElementById("btn_editar")
const btn_cancelar = document.getElementById("btn_cancelar")
const f_id = document.getElementById("f_id")
const f_nome = document.getElementById("f_nome")
const f_celular = document.getElementById("f_celular")
const f_email = document.getElementById("f_email")
const f_dtnasc = document.getElementById("f_dtnasc")

btn_editar.addEventListener("click",(evt)=>{
    fundoPopup.classList.add("ocultar")
    const endpoint = `http://127.0.0.1:1880/editarcontatos/${f_id.value}/${f_nome.value}/${f_celular.value}/${f_email.value}/${f_dtnasc.value}`
    console.log(endpoint)
    fetch(endpoint)
    .then(res=>{
        if(res.status == 200){
            alert("Dados atualizados com sucesso!")
            preencherdgv()
        } else {
            alert("Erro ao atualizar dados")
        }
    })
})

btn_cancelar.addEventListener("click",(evt)=>{
    fundoPopup.classList.add("ocultar")
})

const preencherdgv = ()=> {
    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`
    fetch(endpoint)
    .then(res=> res.json())
    .then(res =>{
        dados.innerHTML = ""
        res.forEach((el)=>{
            const linha = document.createElement("div")
            linha.setAttribute("class","linhadados")

            const c1 = document.createElement("div")
            c1.setAttribute("class","coluna c1 c_dado")
            c1.innerHTML = el.n_contato_contato
            linha.appendChild(c1)

            const c2 = document.createElement("div")
            c2.setAttribute("class","coluna c2 c_dado")
            c2.innerHTML = el.s_nome_contato
            linha.appendChild(c2)

            const c3 = document.createElement("div")
            c3.setAttribute("class","coluna c3 c_dado")
            c3.innerHTML = el.s_celular_contato
            linha.appendChild(c3)

            const c4 = document.createElement("div")
            c4.setAttribute("class","coluna c4 c_dado")
            c4.innerHTML = el.s_email_contato
            linha.appendChild(c4)

            const c5 = document.createElement("div")
            c5.setAttribute("class","coluna c5 c_dado")
            c5.innerHTML = el.dt_datanasc_contato
            linha.appendChild(c5)

            dados.appendChild(linha)

            const c6 = document.createElement("div")
            c6.setAttribute("class","coluna c6 c_dado")
            const imgDelete = document.createElement("img")
            imgDelete.setAttribute("src","../img/delete.svg")
            imgDelete.setAttribute("class","iconeop")
            imgDelete.addEventListener("click",(evt)=>{
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                removerContato(id)
            })
            const imgEditar = document.createElement("img")
            imgEditar.setAttribute("src","../img/edit.svg")
            imgEditar.setAttribute("class","iconeop")
            imgEditar.addEventListener("click",(evt)=>{
                fundoPopup.classList.remove("ocultar")
                const dados = [...evt.target.parentNode.parentNode.childNodes]
                f_id.value = dados[0].innerHTML
                f_nome.value = dados[1].innerHTML
                f_celular.value = dados[2].innerHTML
                f_email.value = dados[3].innerHTML
                f_dtnasc.value = dados[4].innerHTML
            })
            c6.appendChild(imgDelete)
            c6.appendChild(imgEditar)
            linha.appendChild(c6)

            dados.appendChild(linha)

        })
            
    })
}

preencherdgv()


const removerContato = (id)=>{
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`
    fetch(endpoint)
    .then(res =>{
        if(res.status == 200){
            //Rotina para remover
            preencherdgv()
        }
    })
}
