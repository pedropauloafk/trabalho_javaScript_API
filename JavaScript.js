''

   const pegaRaca = document.getElementById('id_cachorro');
     
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

        document.getElementById('imagem').src = imagem
        



    }






    

    


