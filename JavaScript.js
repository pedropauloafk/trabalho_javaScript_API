   const pegaRaca = document.getElementById('id_raca');
   const salvaRaca = document.getElementById('bota-salvar');
   const deletaRaca = document.getElementById('botao-deletar');

   const imagemSalva = document.getElementById('imagem');
   const listItems = JSON.parse(localStorage.getItem('imagemCachorro')) || [];
   const img = document.querySelector('.imagens-salvas')
     
   function pegaDados(){
        var selecionaRaca = pegaRaca.value;
        const buscaDados = `https://dog.ceo/api/breed/${selecionaRaca}/images/random`

        fetch (buscaDados)
        .then(function(resposta){
            return resposta.json();
        } )
        .then(function(cachorro) {

                mostraFoto(cachorro.message) 
        })

        .catch( function (erro){

            console.log(" Apresentou erro" + erro)

        });
    }

    function mostraFoto(imagem){
        imagemSalva.src = imagem;

    }

    // 

    function salvarCachorro(){
        let id = Math.floor(Math.random() *10000 );
        let url = imagemSalva.src;
        let raca = pegaRaca.value;

        let json = {
            id : id,
            url: url,
            raca: raca
        };

        listItems.push(json);
        localStorage.setItem('imagemCachorro',JSON.stringify(listItems));
        listarImagens();
    
    }

    function listarImagens(){
        img.innerHTML= '';
        listItems.forEach(element => {

            let image = document.createElement('img');
            image.src = element.url;
            image.id = element.id;
            img.appendChild(image); 

        });

    }

    img.addEventListener("dblclick", (e) => {
        var identificador = e.target.attributes;
        deleteElement(identificador[1].value);
        
    })

    function deleteElement(id){

        let index = listItems.findIndex(e => e.id == id);
        listItems.splice(index, 1);
        localStorage.setItem('imagemCachorro', JSON.stringify(listItems))
        listarImagens();

    }













    

    


