

var campos = {
    Titulo: document.getElementById("titulo"),
    Material: document.getElementById("material"),
    Video: document.getElementById("video-link"),
    Carga: document.getElementById("carga"),
    Area: document.getElementById("area"),
    Descricao: document.getElementById("descricao")
}

function postarCurso() {

    let titulo = campos.Titulo.value;
    let material = campos.Material.value;
    let video = campos.Video.value;
    let carga = campos.Carga.value;
    let area = campos.Area.value;
    let descricao = campos.Descricao.value;

    let dados = {
        NomeCurso: titulo,
        MaterialEstudo: material,
        Video: video,
        CargaHoraria: carga,
        AreaConhecimento: area,
        Descricao: descricao
    };

    fetch("http://localhost:3009/post/cursoData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao criar curso");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.message);
        })
        .catch(error => {
            console.error("Erro:", error);
        });

    var modalSucesso = document.getElementById("modalSucesso")

    modalSucesso.style.display = "flex";

    var btnFecharSucesso = document.getElementById("btnFecharSucesso")
    
        btnFecharSucesso.addEventListener("click", () => {
        modalSucesso.style.display = "none"
        window.location.href = "index.html";
    })
}



function validarEntradas() {

    var faltando = []
    let titulo = campos.Titulo.value
    let material = campos.Material.value
    let video = campos.Video.value
    let carga = campos.Carga.value
    let area = campos.Area.value
    let descricao = campos.Descricao.value

    if (titulo === "") {
        faltando.push("titulo")
    }
    if (material === "") {
        faltando.push("material")
    }
    if (video === "") {
        faltando.push("video")
    }
    if (carga === "") {
        faltando.push("carga")
    }
    if (area === "nulo") {
        faltando.push("area")
    }
    if (descricao === "") {
        faltando.push("descricao")
    }

    var modalErro = document.getElementById("modalErro")
    var boxModalErro = document.getElementById("box-modal-Erro")
    var texto = "";

    if (faltando.length >= 1) {
        for (let i = 0; i < faltando.length; i++) {
            texto += faltando[i] + " | "
        }

        var auxText = document.createElement("p")
        auxText.innerText = "Campos Faltando : " + texto

        boxModalErro.appendChild(auxText)

        modalErro.style.display = "flex";

    }
    var btnFecharErro = document.getElementById("btnFecharErro")

    btnFecharErro.addEventListener("click", () => {
        modalErro.style.display = "none"
        boxModalErro.innerText = ""
    })


    if (faltando.length <= 0) {
        postarCurso()
    }
}

var video = document.getElementById("video-preview")

function atualizarVideo() {
    if (campos.Video.value.length < 30) {
        return;
    }
    video.src = campos.Video.value
}

campos.Video.addEventListener("input", atualizarVideo)


var btn = document.getElementById("submit-button")

btn.addEventListener("click", validarEntradas)

