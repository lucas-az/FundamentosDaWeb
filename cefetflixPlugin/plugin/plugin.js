;(function($){
	$.fn.cefetflix = function(option) {

		$(this)
			.append($("<div/>")
				.attr("id", "selecao"))
			.append($("<div/>")
				.attr("id", "filme"))


		var $xhr = $.get(option.url);

		$xhr.done(function(data) {

			var filmesArray = JSON.parse(data);
			
			$.each(filmesArray, function(indice, filme) {

				$("#selecao")
					.append($("<a/>")
						.attr("href", "#" + filme.id)
					.append($("<figure/>")
						.append($("<img/>")
							.addClass("preViewImage")
							.attr("src", filme.figura))
						.append($("<figcaption/>")
							.append($("<h1/>")
								.addClass("preViewTitle")
								.text(filme.titulo)))));
			});

			$.each(filmesArray, function (indice, filme) {
				
				var $generos = $("<ul/>").addClass("generos").text("Gêneros:");
				var $elenco = $("<ul/>").addClass("elenco").text("Elenco:");
				var $classificacao; 
				var $opinioes = $("<div/>").addClass("avaliacao");
				var $semelhantes = $("<ul/>").addClass("semelhantes").append($("<h3/>").text("Títulos semelhantes: "));

				$.each(filme.generos, function(indice, genero) {
					$generos.append($("<li/>").text(genero));
				});

				$.each(filme.elenco, function(indice, elenco) {
					$elenco.append($("<li/>").text(elenco));
				});
				
				$.each(filme.opinioes, function (indice, opiniao) {

					for(var i = 0; i < 5; i++) {
						$opinioes
							.append($("<span/>").addClass("estrela"));

						if (i < opiniao.rating) {
							$opinioes.find("span")
								.addClass("estrelavermelha");
						}
					}

					$opinioes 
						.append($("<p/>").addClass("opiniao").text(opiniao.descricao));
				});

				if (filme.classificacao == 18) {
					$classificacao = $("<span/>").addClass("classificacao18").text(filme.classificacao);
				}
				if (filme.classificacao < 18 && filme.classificacao >= 16) {
					$classificacao = $("<span/>").addClass("classificacao16").text(filme.classificacao);
				}
				if (filme.classificacao < 16 && filme.classificacao >= 14) {
					$classificacao = $("<span/>").addClass("classificacao14").text(filme.classificacao);
				}	
				if (filme.classificacao < 14 && filme.classificacao >= 12) {
					$classificacao = $("<span/>").addClass("classificacao12").text(filme.classificacao);
				}	
				if (filme.classificacao < 12 && filme.classificacao >= 10) {
					$classificacao = $("<span/>").addClass("classificacao10").text(filme.classificacao);
				}	
				if (filme.classificacao == 0) {
					$classificacao = $("<span/>").addClass("classificacaoL").text("L");
				}

				$.each(filme.titulosSemelhantes, function(indice, semelhante) {
					$.each(filmesArray, function(indice, filme) {
						if (filme.id == semelhante) {
							$semelhantes
								.append($("<a/>").attr("href", "#" + filme.id)
									.append($("<li/>")
										.append($("<img/>").attr("src", filme.figura))));
						}
					})
				});

				$("#filme")
					.append($("<div/>")
						.addClass("filmeConteudo")
						.attr("id", filme.id)
						.append($("<h1/>").addClass("titulo").text(filme.titulo))
						.append($("<p/>").addClass("resumo").text(filme.resumo))
						.append($generos)	
						.append($("<img/>").addClass("figura").attr("src", filme.figura))
						.append($elenco)
						.append($classificacao)
						.append($opinioes)
						.append($semelhantes)
						.append($("<a/>")
							.attr("href", "#")
							.addClass("home")
							.append($("<img/>")
								.attr("src", "./img/home.png"))));
					
			});

		});

		$xhr.fail(function(data) {
			alert(data.statusText);
		});

	}
})(jQuery);