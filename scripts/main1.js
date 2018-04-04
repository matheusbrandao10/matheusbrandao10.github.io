//Mudar imagem ao clicar nela

var minhaImagem = document.querySelectorAll('img');

minhaImagem[0].onclick = function(){
	
	var meuLocal = minhaImagem[0].getAttribute('src');

	if(meuLocal === 'imagens/ichigo.png'){
		minhaImagem[0].setAttribute('src', 'imagens/kenpachi.jfif');
	}else{
		minhaImagem[0].setAttribute('src', 'imagens/ichigo.png');
	}
}

minhaImagem[1].onclick = function(){
	
	var meuLocal = minhaImagem[1].getAttribute('src');

	if(meuLocal === 'imagens/ichigo.png'){
		minhaImagem[1].setAttribute('src', 'imagens/kenpachi.jfif');
	}else{
		minhaImagem[1].setAttribute('src', 'imagens/ichigo.png');
	}
}

//Registar nome de usuário na página e deixa-lo mesmo ao
var meuBotao = document.querySelector('button');
var meuTitulo = document.querySelector('h1');

function registraUsuario(){
	var usuario = prompt('Por favor, informe o usuário.');
	meuTitulo.textContent = 'Bem vindo a minha página web, ' + usuario;
	localStorage.setItem('ultimoUsuario', usuario);
}

if(!localStorage.getItem('ultimoUsuario')){
	registraUsuario();
}else{
	var meuUltimoUsuario = localStorage.getItem('ultimoUsuario');
	meuTitulo.textContent = 'Bem vindo a minha página web, ' + meuUltimoUsuario;
}


meuBotao.onclick = function(){

	registraUsuario();
}

/*var ultimoUsuario = localStorage.getItem('ultimoUsuario');
localStorage.removeItem('ultimoUsuario');*/