//check http/https and add
function checkUrl (link) {
	var string = link.value;
	if (!~string.indexOf("http")) {
		string = "http://" + string;
	}
	link.value = string;
	return link
}

//validate email
function checkEmail(email) {
	var emailFilter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	if (!email.value.match(emailFilter)) {
		alert("Insira um endereço de e-mail válido.");
		email.value = "";
	}
}

//show or hide elements when form is submitted
function substitui() {
	document.getElementById("submit").classList.add('hidden');
	document.getElementById("conversion-title").classList.remove('hidden');
	document.getElementById("submit2").classList.remove('hidden');
	document.getElementById("links-box").classList.remove('hidden');
	document.getElementById("left").classList.add('hidden');
	document.getElementById("conversion-box").classList.remove("col-md-4", "col-lg-4", "col-xl-4");
	document.getElementById("conversion-box").classList.add("col-md-8", "col-lg-8", "col-xl-8");
	//document.getElementById("titulo").classList.add('hidden');
	//document.getElementById("subtitulo").classList.add('hidden');
}

function abaixo(ideal, area){

	if (area == 'outros') {
		document.getElementById("links-title").innerHTML = "A média geral para e-commerces no Brasil é "+ ideal +". Você está abaixo da média. 👎<br/> Confira nossas dicas para conseguir melhores resultados:";
	} else {
		document.getElementById("links-title").innerHTML = "A média para empresas da área de " + area + " no Brasil é "+ ideal +". Você está abaixo da média. 👎<br/> Confira nossas dicas para conseguir melhores resultados:";
	}

	document.getElementById("um").setAttribute('href', "http://marketingdeconteudo.com/cro/");
	document.getElementById("dois").setAttribute('href', "http://marketingdeconteudo.com/cta-para-ecommerce/");
	document.getElementById("tres").setAttribute('href', "https://blog.vtex.com/storytelling-no-e-commerce/");
	document.getElementById("quatro").setAttribute('href', "https://blog.vtex.com/conversao-no-e-commerce-os-negocios-que-mais-convertem/");

	document.getElementById("um").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Otimização de conversões";
	document.getElementById("dois").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Calls to Action para e-commerce";
	document.getElementById("tres").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Storytelling no e-commerce";
	document.getElementById("quatro").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Os e-commerces que mais convertem";
}

function acima(ideal, area){ 

	if (area == 'outros') {
		document.getElementById("links-title").innerHTML = "A média geral para e-commerces no Brasil é "+ ideal +". Você está abaixo da média. 👎<br/> Confira nossas dicas para conseguir melhores resultados:";
	} else {
		document.getElementById("links-title").innerHTML = "A média para empresas da área de " + area + " no Brasil é "+ ideal +". Você está abaixo da média. 👎<br/> Confira nossas dicas para conseguir melhores resultados:";
	}

	document.getElementById("um").setAttribute('href', "http://marketingdeconteudo.com/estrategias-para-ecommerce/");
	document.getElementById("dois").setAttribute('href', "http://marketingdeconteudo.com/pos-venda/");
	document.getElementById("tres").setAttribute('href', "https://blog.vtex.com/conheca-4-metodologias-de-teste-de-usabilidade-para-loja-virtual/");
	document.getElementById("quatro").setAttribute('href', "https://blog.vtex.com/transforme-clientes-em-promotores/");

	document.getElementById("um").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Estratégias para e-commerce";
	document.getElementById("dois").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Pós venda para e-commerce";
	document.getElementById("tres").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Teste de usabilidade em e-commerces";
	document.getElementById("quatro").innerHTML = '<span class="text-left glyphicon glyphicon-share"></span>' + "    Transforme clientes em promotores da sua marca";
}

function verificaCampos(){
	var email = document.forms["formulario"]["email"].value;
	var site = document.forms["formulario"]["website"].value;
	var area = document.forms["formulario"]["ecommerce_area_atuacao"].value;

	var conv = document.forms["formulario"]["ecommerce_pedidos_mensais"].value;
	var total = document.forms["formulario"]["ecommerce_visitas_mensais"].value;

	if (email.length <= 0 || site.length <= 7 || area.length <= 0 || conv.length <= 0 || total.length <= 0) {
		return true;
	} else {
		return false;
	}
}

function calculaTaxa() {
	var conv = document.forms["formulario"]["ecommerce_pedidos_mensais"].value;
	var total = document.forms["formulario"]["ecommerce_visitas_mensais"].value;

	//calcula a taxa de conversão
	var taxa = (parseInt(conv,10)/parseInt(total,10)) * 100;
	document.getElementById("conversion").innerHTML = taxa.toFixed(2) + "%";

	var opcao = $("#dropdown option:selected").val();

	switch (opcao) {
		case 'Moda e Acessórios': 
			if (taxa <= 1) {
				abaixo('1%', 'Moda e Acessórios');
			} else {
				acima('1%', 'Moda e Acessórios');
			}
			break;
		case 'Mercado Pet': 
			if (taxa <= 0.35) {
				abaixo('0.35%', 'Mercado Pet');
			} else {
				acima('0.35%', 'Mercado Pet');
			}
			break;
		case 'Eletrônicos': 
			if (taxa <= 2) {
				abaixo('2%', 'Eletrônicos');
			} else {
				acima('2%', 'Eletrônicos');
			}
			break;
		case 'Eletrodomésticos, casa e decoração': 
			if (taxa <= 1.8) {
				abaixo('1.8%', 'Eletrodomésticos, casa e decoração');
			} else {
				acima('1.8%', 'Eletrodomésticos, casa e decoração');
			}
			break;
		case 'Mercado Farmacêutico': 
			if (taxa <= 2.3) {
				abaixo('2.3%', 'Farmacêutico');
			} else {
				acima('2.3%', 'Farmacêutico');
			}
			break;
		case 'Alimentos e bebidas': 
			if (taxa <= 1.6) {
				abaixo('1.6%', 'Alimentos e bebidas');
			} else {
				acima('1.6%', 'Alimentos e bebidas');
			}
			break;
		case 'Mercado Automotivo': 
			if (taxa <= 0.4) {
				abaixo('0.4%', 'Automotivo');
			} else {
				acima('0.4%', 'Automotivo');
			}
			break;
		case 'Outros': 
			if (taxa <= 2.3) {
				abaixo('2.3%', 'outros');
			} else {
				acima('2.3%', 'outros');
			}
			break;
	}
}

//ajax call functions.php
function enviaDados(){
	$('form').click('submit', function (e) {
		e.preventDefault();
		$.ajax({
			type: 'post',
			url:  'functions.php',
			data: $('form').serialize(),
		});
	});
}

function fadeIn(){
	$(".links-box a").each(function (i) {
		$(this).attr("style", "-webkit-animation-delay:" + i * 200 + "ms;"
		+ "-moz-animation-delay:" + i * 200 + "ms;"
		+ "-o-animation-delay:" + i * 200 + "ms;"
		+ "animation-delay:" + i * 200 + "ms;");
		if (i == $(".links-box a").size() -1) {
			$(".links-box").addClass("play")
		}
	});
}

function scroll() {
	var screenSize = $(window).width();
	if (screenSize > 1200) {
		$('html,body').animate({
        	scrollTop: $("#content").offset().top},
   		'slow');
	} else {
		$('html,body').animate({
        	scrollTop: $("#conversion").offset().top},
   		'slow');
	}
}

//main function
$("#submit").click(function() {
	
	if (verificaCampos()) {
		alert("Preencha os campos vazios.");
	} else {
		substitui();
		calculaTaxa();
		fadeIn();
		enviaDados();
		scroll();
	}
});

$("#submit2").click(function() {
	
	if (verificaCampos()) {
		alert("Preencha os campos vazios.");
	} else {
		substitui();
		calculaTaxa();
		fadeIn();
	}
});