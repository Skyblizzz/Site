function adicionarArtigo(event) {
    event.preventDefault();
    const titulo = document.getElementById('tituloArtigo').value;
    const conteudo = document.getElementById('conteudoArtigo').value;

    const li = document.createElement('li');
    li.textContent = `${titulo}: ${conteudo}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editarArtigo(li, titulo, conteudo);
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => li.remove();
    li.appendChild(removeButton);

    document.getElementById('listaArtigosExistentes').appendChild(li);

   
    document.getElementById('formAdicionarArtigo').reset();
}


function editarArtigo(li, titulo, conteudo) {
    document.getElementById('tituloArtigo').value = titulo;
    document.getElementById('conteudoArtigo').value = conteudo;

 
    li.remove();
}


function adicionarNoticia(event) {
    event.preventDefault();
    const titulo = document.getElementById('tituloNoticia').value;
    const conteudo = document.getElementById('conteudoNoticia').value;

    const li = document.createElement('li');
    li.textContent = `${titulo}: ${conteudo}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editarNoticia(li, titulo, conteudo);
    li.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => li.remove();
    li.appendChild(removeButton);

    document.getElementById('listaNoticiasExistentes').appendChild(li);

   
    document.getElementById('formAdicionarNoticia').reset();
}


function editarNoticia(li, titulo, conteudo) {
    document.getElementById('tituloNoticia').value = titulo;
    document.getElementById('conteudoNoticia').value = conteudo;

  
    li.remove();
}
