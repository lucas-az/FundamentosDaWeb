;(function($) {

	$.fn.pluginAdress = function(parameters) {

		var $xhr = $.get(parameters.url);

		$(this)
			.append($("<table/>")
				.append($("<tr/>")
					.append($("<th/>").text("Logradouro"))
					.append($("<td/>").addClass("logradouro")))
				.append($("<tr/>")
					.append($("<th/>").text("Bairro"))
					.append($("<td/>").addClass("bairro")))
				.append($("<tr/>")
					.append($("<th/>").text("Cidade"))
					.append($("<td/>").addClass("cidade")))
				.append($("<tr/>")
					.append($("<th/>").text("Estado"))
					.append($("<td/>").addClass("estado"))));

		$xhr.done(function(endereco) {

			$(".logradouro").text(returnTxt(endereco.logradouro));
			$(".bairro").text(returnTxt(endereco.bairro));
			$(".cidade").text(returnTxt(endereco.cidade));
			$(".estado").text(returnTxt(endereco.estado));
				
		});

		$("#cep")
			.css({"border": "1px solid rgba(0, 0, 0, 0.8)"});
		$(this).show(800);

		$xhr.fail(function(data) {
			$("#cep")
				.css({"border": "1px solid rgb(179, 0, 0)"});
			
			setTimeout(function() {
				alert("Erro: " + data.statusText);
			}, 100);
				
		});

	}

	function returnTxt(argument) {
		if(argument == null) {
			return " - ";
		} 
		else {
			return argument;
		}
	}

})(jQuery);







