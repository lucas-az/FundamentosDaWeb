;(function($) {

	$.fn.pluginTeste = function(parametros) {

		$(this).on("click", ".close", function() {
			//o this de dentro é o .close
			$(this).parent().remove();
		});

		var msg = parametros.mensagem;
		var categoria = parametros.categoria;
		$(this)
			.append($("<div/>")
				.addClass("mensageiro")
				.addClass(categoria)
				.append($("<p/>").text(msg))
				.append($("<div/>").addClass("close")
					.html("&times;"))
			)
	};
})(jQuery);