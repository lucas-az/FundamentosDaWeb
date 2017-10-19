var acervo = [{"titulo":"1984","autor":"George Owell"},
			{"titulo":"Captães de Areia","autor":"Jorge Amado"},
			{"titulo":"Brás Cubas","autor":"Machado de Assis"}]

$(function(){
	loadAcervo();

	$("#adicionar").click(onAdicionarClick);

	$("#livrosLidos").on("click", ".icone", onIconeClick);
	
});

function loadAcervo() {
	$.each(acervo, function(i, livro) {
		$("#livrosLidos")
			.append($("<tr/>")
				.append($("<td/>").text(livro.titulo))
				.append($("<td/>").text(livro.autor))
				.append($("<td/>")
					.append($("<img/>")
					.addClass("icone")
					.attr("src", "./img/lixo.png"))));
	});
}
 
function onAdicionarClick(){
	$("#livrosLidos")
			.append($("<tr/>")
				.append($("<td/>").text($("#livro").val()))
				.append($("<td/>").text($("#autor").val()))
				.append($("<td/>")
					.append($("<img/>")
					.addClass("icone")
					.attr("src", "./img/lixo.png")))); 
	$("#livro").val("");
	$("#autor").val("")

}

function onIconeClick(){
	$(this).parents("tr").remove();
}

