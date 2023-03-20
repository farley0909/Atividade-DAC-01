let btnAddPublisher = document.getElementById("btnAddPublisher");

btnAddPublisher.addEventListener("click", async () => {
  let nomePublisher = document.getElementById("nomePublisher").value;
  let originPlace = document.getElementById("localOrigemPublisher").value;
  if (!nomePublisher.length > 0 || !nomePublisher.length > 0) {
    alert("Um dos campos está em branco");
  } else {
    let result = await fetch("/api/v1/publisher/", {
      method: "POST",
      body: JSON.stringify({
        fantasyName: nomePublisher,
        originPlace: originPlace,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao cadastrar a publisher!");
    } else {
      alert("A publisher foi cadastrada!");
      console.log(response.data);
      let cotainer = document.getElementById("crudPublisher");
      let div = document.createElement("div");
      div.classList.add("publisherItem");
      let divText = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = response.data.fantasyName;
      h3.classList.add("publisherItemTitle");
      let h4 = document.createElement("h4");
      h4.innerHTML = response.data.originPlace;
      h4.classList.add("publisherItemSubTitle");
      divText.appendChild(h3);
      divText.appendChild(h4);
      divText.classList.add("publisherTexts");

      let divButtons = document.createElement("div");
      divButtons.classList.add("publisherButtons");
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
      divButtons.classList.add("publisherButtons");
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

async function deletePublisher(code) {
  try {
    let result = await fetch("/api/v1/publisher/", {
      method: "DELETE",
      body: JSON.stringify({ code: code }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um problema ao remover a publisher.");
    } else {
      document.location.reload(true);
    }
  } catch (error) {
    alert("Houve um erro ao remover a publisher: ", error.message);
  }
}

async function editarPublisher(code) {
  try {
    let result = await fetch("/api/v1/publisher");
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao carregar a publisher");
    } else {
      response.data.forEach((element) => {
        if (element.code == code) {
          document.getElementById("editarfantasyName").value =
            element.fantasyName;
          document.getElementById("editaroriginPlace").value =
            element.originPlace;
          document.getElementById("editarcode").value = element.code;
        }
      });
    }
  } catch (error) {}
}
let btnEdit = document.getElementById("saveEdit");

btnEdit.addEventListener("click", async () => {
  try {
    console.log(document.getElementById("editarcode").value);
    let result = await fetch("/api/v1/publisher", {
      method: "PUT",
      body: JSON.stringify({
        fantasyName: document.getElementById("editarfantasyName").value,
        originPlace: document.getElementById("editaroriginPlace").value,
        code: document.getElementById("editarcode").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao atualizar a publisher");
    } else {
      location.reload();
    }
  } catch (error) {
    alert("Houve um error ao editar");
  }
});

let btnAddBook = document.getElementById("btnAddBook");

btnAddBook.addEventListener("click", async () => {
  let titleBook = document.getElementById("titleBookInput").value;
  let dataLancamento = document.getElementById("dataLancamentoInput").value;
  if (!titleBook.length > 0 || !dataLancamento.length > 0) {
    alert("Um dos campos está em branco");
  } else {
    let result = await fetch("/api/v1/book", {
      method: "POST",
      body: JSON.stringify({
        title: titleBook,
        releaseDate: dataLancamento,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao cadastrar o book!");
    } else {
      alert("O book foi cadastrada!");
      console.log(response.data);
      let cotainer = document.getElementById("crudBook");
      let div = document.createElement("div");
      div.classList.add("publisherItem");
      let divText = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = response.data.title;
      h3.classList.add("publisherItemTitle");
      let h4 = document.createElement("h4");
      h4.innerHTML = new Date(response.data.releaseDate).toLocaleDateString();
      h4.classList.add("publisherItemSubTitle");
      divText.appendChild(h3);
      divText.appendChild(h4);
      divText.classList.add("publisherTexts");

      let divButtons = document.createElement("div");
      divButtons.classList.add("publisherButtons");
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
      divButtons.classList.add("publisherButtons");
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
      alert("Houve um problema ao remover a publisher.");
    } else {
      document.location.reload(true);
    }
  } catch (error) {
    alert("Houve um error ao deletar o book");
  }
}
async function editarBook(id) {
  try {
    let result = await fetch("/api/v1/book");
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao carregar a publisher");
    } else {
      response.data.forEach((element) => {
        if (element.id == id) {
          document.getElementById("editartitleDoBook").value = element.title;
          document.getElementById("editarreleaseDate").value = new Date(
            element.releaseDate
          ).toLocaleDateString();
          document.getElementById("idBook").value = element.id;
        }
      });
    }
  } catch (error) {}
}

document.getElementById("saveEditBook").addEventListener("click", async () => {
  try {
    let result = await fetch("/api/v1/book", {
      method: "PUT",
      body: JSON.stringify({
        title: document.getElementById("editartitleDoBook").value,
        releaseDate: document.getElementById("editarreleaseDate").value,
        id: document.getElementById("idBook").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    let response = await result.json();
    if (response.has_error == true) {
      alert("Houve um erro ao atualizar a publisher");
    } else {
      location.reload();
    }
  } catch (error) {
    alert("Houve um error ao editar");
  }
});
