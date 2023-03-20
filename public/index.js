let btnAddEditora = document.getElementById("btnAddEditora");

btnAddEditora.addEventListener("click", async () => {
  let nomeEditora = document.getElementById("nomeEditora").value;
  let localDeOrigem = document.getElementById("localOrigemEditora").value;
  if (!nomeEditora.length > 0 || !nomeEditora.length > 0) {
    alert("Um dos campos está em branco");
  } else {
    let result = await fetch("/api/v1/publisher/", {
      method: "POST",
      body: JSON.stringify({
        nomeFantasia: nomeEditora,
        localDeOrigem: localDeOrigem,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao cadastrar a editora!");
    } else {
      alert("A editora foi cadastrada!");
      console.log(response.data);
      let cotainer = document.getElementById("crudEditora");
      let div = document.createElement("div");
      div.classList.add("editoraItem");
      let divText = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = response.data.nomeFantasia;
      h3.classList.add("editoraItemTitle");
      let h4 = document.createElement("h4");
      h4.innerHTML = response.data.localDeOrigem;
      h4.classList.add("editoraItemSubTitle");
      divText.appendChild(h3);
      divText.appendChild(h4);
      divText.classList.add("editoraTexts");

      let divButtons = document.createElement("div");
      divButtons.classList.add("editoraButtons");
      let btnEdit = document.createElement("button");
      btnEdit.classList.add("btnEdit");
      let spanEditar = document.createElement("span");
      spanEditar.innerHTML = "edit";
      spanEditar.classList.add("material-symbols-outlined");
      btnEdit.appendChild(spanEditar);
      let btnDelete = document.createElement("button");
      btnDelete.classList.add("btnDelete");
      let spanDelete = document.createElement("span");
      spanDelete.innerHTML = "delete";
      btnDelete.classList.add("material-symbols-outlined");
      divButtons.classList.add("editoraButtons");
      btnDelete.appendChild(spanDelete);
      divButtons.appendChild(btnEdit);
      divButtons.appendChild(btnDelete);

      div.appendChild(divText);
      div.appendChild(divButtons);
      cotainer.appendChild(div);
      location.reload();
    }
  }
});

async function deleteEditora(codigo) {
  try {
    let result = await fetch("/api/v1/publisher/", {
      method: "DELETE",
      body: JSON.stringify({ codigo: codigo }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um problema ao remover a editora.");
    } else {
      document.location.reload(true);
    }
  } catch (error) {
    alert("Houve um erro ao remover a editora: ", error.message);
  }
}

async function editarEditora(codigo) {
  try {
    let result = await fetch("/api/v1/publisher");
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao carregar a editora");
    } else {
      response.data.forEach((element) => {
        if (element.codigo == codigo) {
          document.getElementById("editarNomeFantasia").value =
            element.nomeFantasia;
          document.getElementById("editarLocalDeOrigem").value =
            element.localDeOrigem;
          document.getElementById("editarCodigo").value = element.codigo;
        }
      });
    }
  } catch (error) {}
}
let btnEdit = document.getElementById("saveEdit");

btnEdit.addEventListener("click", async () => {
  try {
    console.log(document.getElementById("editarCodigo").value);
    let result = await fetch("/api/v1/publisher", {
      method: "PUT",
      body: JSON.stringify({
        nomeFantasia: document.getElementById("editarNomeFantasia").value,
        localDeOrigem: document.getElementById("editarLocalDeOrigem").value,
        codigo: document.getElementById("editarCodigo").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao atualizar a editora");
    } else {
      location.reload();
    }
  } catch (error) {
    alert("Houve um error ao editar");
  }
});

let btnAddLivro = document.getElementById("btnAddLivro");

btnAddLivro.addEventListener("click", async () => {
  let tituloLivro = document.getElementById("tituloLivroInput").value;
  let dataLancamento = document.getElementById("dataLancamentoInput").value;
  if (!tituloLivro.length > 0 || !dataLancamento.length > 0) {
    alert("Um dos campos está em branco");
  } else {
    let result = await fetch("/api/v1/book", {
      method: "POST",
      body: JSON.stringify({
        titulo: tituloLivro,
        dataDeLancamento: dataLancamento,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao cadastrar o livro!");
    } else {
      alert("O livro foi cadastrada!");
      console.log(response.data);
      let cotainer = document.getElementById("crudLivro");
      let div = document.createElement("div");
      div.classList.add("editoraItem");
      let divText = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = response.data.titulo;
      h3.classList.add("editoraItemTitle");
      let h4 = document.createElement("h4");
      h4.innerHTML = new Date(
        response.data.dataDeLancamento
      ).toLocaleDateString();
      h4.classList.add("editoraItemSubTitle");
      divText.appendChild(h3);
      divText.appendChild(h4);
      divText.classList.add("editoraTexts");

      let divButtons = document.createElement("div");
      divButtons.classList.add("editoraButtons");
      let btnEdit = document.createElement("button");
      btnEdit.classList.add("btnEdit");
      let spanEditar = document.createElement("span");
      spanEditar.innerHTML = "edit";
      spanEditar.classList.add("material-symbols-outlined");
      btnEdit.appendChild(spanEditar);
      let btnDelete = document.createElement("button");
      btnDelete.classList.add("btnDelete");
      let spanDelete = document.createElement("span");
      spanDelete.innerHTML = "delete";
      btnDelete.classList.add("material-symbols-outlined");
      divButtons.classList.add("editoraButtons");
      btnDelete.appendChild(spanDelete);
      divButtons.appendChild(btnEdit);
      divButtons.appendChild(btnDelete);

      div.appendChild(divText);
      div.appendChild(divButtons);
      cotainer.appendChild(div);
      location.reload();
    }
  }
});

async function deleteBook(id) {
  try {
    let result = await fetch("/api/v1/book/", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um problema ao remover a editora.");
    } else {
      document.location.reload(true);
    }
  } catch (error) {
    alert("Houve um error ao deletar o livro");
  }
}
async function editarBook(id) {
  try {
    let result = await fetch("/api/v1/book");
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao carregar a editora");
    } else {
      response.data.forEach((element) => {
        if (element.id == id) {
          document.getElementById("editarTituloDoLivro").value = element.titulo;
          document.getElementById("editarDataDeLancamento").value = new Date(
            element.dataDeLancamento
          ).toLocaleDateString();
          document.getElementById("idLivro").value = element.id;
        }
      });
    }
  } catch (error) {}
}

document.getElementById("saveEditLivro").addEventListener("click", async () => {
  try {
    let result = await fetch("/api/v1/book", {
      method: "PUT",
      body: JSON.stringify({
        titulo: document.getElementById("editarTituloDoLivro").value,
        dataDeLancamento: document.getElementById("editarDataDeLancamento")
          .value,
        id: document.getElementById("idLivro").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao atualizar a editora");
    } else {
      location.reload();
    }
  } catch (error) {
    alert("Houve um error ao editar");
  }
});
