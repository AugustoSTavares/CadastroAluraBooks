async function buscaEndereço(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertido = await consultaCEP.json();
        if (consultaCEPConvertido.erro){
            throw Error ('CEP não existente');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado')
        var bairro = document.getElementById('bairro')

        cidade.value=consultaCEPConvertido.localidade;
        logradouro.value=consultaCEPConvertido.logradouro;
        estado.value=consultaCEPConvertido.uf;
        bairro.value=consultaCEPConvertido.bairro;

        console.log(consultaCEPConvertido);
    } catch (erro){
        mensagemErro.innerHTML = `<p>CEP inválido!</p>`
        console.log(erro)
    } 
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereço(cep.value));