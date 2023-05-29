''

   const pegaRaca = document.getElementById('id_cachorro');
     
   function pegaDados(){
        var selecionaRaca = pegaRaca.value;
        const buscaDados = `https://dog.ceo/api/breed/${selecionaRaca}/images/random/5`


        fetch (buscaDados)
        .then(function(resposta){
            return resposta.json();

        } )
        .then(function(cachorro) {

            for ( var i = 1; i <6; i++){

                mostraFoto(cachorro.message[i - 1],i)

            }
            

        })

        .catch( function (erro){

            console.log(" Apresentou erro" + erro)

        });

    }


    function mostraFoto(imagem,i){

        document.getElementById('imagem'+ i).src = imagem;
        



    }





    

    


