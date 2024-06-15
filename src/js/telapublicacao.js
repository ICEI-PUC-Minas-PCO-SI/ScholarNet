document.addEventListener("DOMContentLoaded", () => {
    const aulas = [];

    const form = document.querySelector("#form-aula");
    const tituloInput = document.getElementById("titulo");
    const descricaoInput = document.getElementById("descricao");
    const videoLinkInput = document.getElementById("video-link");
    const tipoMateriaSelect = document.getElementById("tipo-materia");
    const aulasTbody = document.getElementById("aulas-tbody");
    const submitButton = document.getElementById("submit-button");

    videoLinkInput.addEventListener("input", (event) => {
        const videoLink = event.target.value;
        document.getElementById("video-preview").src = videoLink;
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const titulo = tituloInput.value;
        const descricao = descricaoInput.value;
        const videoLink = videoLinkInput.value;
        const tipoMateria = tipoMateriaSelect.value;

        if (!titulo || !descricao || !videoLink || !tipoMateria) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const aula = { id: Date.now(), titulo, descricao, videoLink, tipoMateria };
        aulas.push(aula);
        renderAulas();
        form.reset();
    });

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        const titulo = tituloInput.value;
        const descricao = descricaoInput.value;
        const videoLink = videoLinkInput.value;
        const tipoMateria = tipoMateriaSelect.value;

        if (!titulo || !descricao || !videoLink || !tipoMateria) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const aula = { id: Date.now(), titulo, descricao, videoLink, tipoMateria };
        aulas.push(aula);
        renderAulas();

        tituloInput.value = "";
        descricaoInput.value = "";
        videoLinkInput.value = "";
        tipoMateriaSelect.value = "";
        document.getElementById("video-preview").src = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
    });

    const renderAulas = () => {
        aulasTbody.innerHTML = "";
        aulas.forEach((aula) => {
            const tr = document.createElement("tr");

            const tituloTd = document.createElement("td");
            tituloTd.textContent = limitarTexto(aula.titulo, 15);
            tr.appendChild(tituloTd);

            const descricaoTd = document.createElement("td");
            descricaoTd.textContent = limitarTexto(aula.descricao, 100); 
            tr.appendChild(descricaoTd);

            const tipoMateriaTd = document.createElement("td");
            tipoMateriaTd.textContent = aula.tipoMateria;
            tr.appendChild(tipoMateriaTd);

            const actionsTd = document.createElement("td");

            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "btn btn-sm me-2 btn-custom btn-edit";
            editButton.addEventListener("click", () => editAula(aula.id));
            actionsTd.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Excluir";
            deleteButton.className = "btn btn-sm btn-custom btn-delete";
            deleteButton.addEventListener("click", () => deleteAula(aula.id));
            actionsTd.appendChild(deleteButton);

            tr.appendChild(actionsTd);
            aulasTbody.appendChild(tr);
        });
    };

    const editAula = (id) => {
        const aula = aulas.find((aula) => aula.id === id);
        tituloInput.value = aula.titulo;
        descricaoInput.value = aula.descricao;
        videoLinkInput.value = aula.videoLink;
        tipoMateriaSelect.value = aula.tipoMateria;
        document.getElementById("video-preview").src = aula.videoLink;
        deleteAula(id);
    };

    const deleteAula = (id) => {
        const index = aulas.findIndex((aula) => aula.id === id);
        if (index !== -1) {
            aulas.splice(index, 1);
            renderAulas();
        }
    };

    const limitarTexto = (texto, limite) => {
        return texto.length > limite ? texto.substring(0, limite) + "..." : texto;
    };

});

