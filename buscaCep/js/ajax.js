$(function() {
	$("#buscaEnd").click(function() {
		var servico = "http://api.postmon.com.br/v1/cep/";
		var cep = $("#cep").val();
		var $xhr = $.get(servico + cep);

		$xhr.done(function(endereco) {
			
			$(".logradouro").text(returnTxt(endereco.logradouro));
			$(".bairro").text(returnTxt(endereco.bairro));
			$(".cidade").text(returnTxt(endereco.cidade));
			$(".estado").text(returnTxt(endereco.estado));
	

			$("#cep")
				.css({"border": "1px solid rgba(0, 0, 0, 0.8)"});
			$(".endereco")
				.css("display", "block");
		});

		$xhr.fail(function(data) {
			$("#cep")
				.css({"border": "1px solid rgb(179, 0, 0)"});
			
			setTimeout(function() {
				alert("Endereço não encontrado!\n");
			}, 100);
				
		});
	});
});

function returnTxt(argument) {
	if(argument == null) {
		return " - ";
	} 
	else {
		return argument;
	}
}

