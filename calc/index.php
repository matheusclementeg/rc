<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="shortcut icon" href="https://rockcontent.com/wp-content/themes/RockContent/favicon.png"/>
	<title>Calculadora de Conversão para e-commerce</title>

	<!-- bootstrap cdn link -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- roboto font link -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

	<!-- custom css --> 
	<link href="css/custom.css" rel="stylesheet" type="text/css">

</head>
<body>

	<!-- content -->
	<section class="content">
		
		<!-- title -->
		<div class="container" id="titulo">
			<div class="row title text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<h1 >Calculadora de Conversão para E-commerce</h1>
				<br>
			</div>
		</div>
		<!-- .title -->

		<div class="container info text-center">
			<div class="row">
				<div class="info1 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
					<h4>O que é medir a taxa de conversão?</h4>
					<p><br>
						A <a href="http://saiadolugar.com.br/taxa-de-conversao-de-e-commerce/" target="_blank">taxa de conversão</a> é uma métrica calculada para acompanhar o <b>desempenho do seu e-commerce</b> e a efetividade das suas <b>estratégias de marketing</b>. Ela é medida calculando-se a razão entre o número de pedidos realizados e o número total de visitas recebidas. 
					</p>
				</div>

				<div class="info2 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
				<h4>Por que medir a taxa de conversão?</h4>
					<p><br>
						Além de medir a performance do e-commerce e das <a href="http://marketingdeconteudo.com/funil-de-marketing/" target="_blank">campanhas de marketing</a> utilizadas, a Calculadora de Conversão da Rock Content <b>compara os valores obtidos</b> com as taxas médias do <a href="https://inteligencia.rockcontent.com/panorama-do-mercado-de-ecommerces/" target="_blank">e-commerce brasileiro</a> e oferece um <b>panorama comparativo</b>. 
					</p>
				</div>

				<div class="info3 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
					<h4>Tenho minha taxa de conversão. E agora?</h4>
					<p><br>
						Com o cálculo da taxa de conversão e o panorama comparativo, enviaremos as <b>melhores dicas</b> para <b>aumentar sua conversão</b> e as estratégias de marketing, para <a href="http://marketingdeconteudo.com/regua-de-relacionamento/">atrair mais clientes</a> e se destacar no meio!
					</p>
				</div>
			</div>
		</div>

		<!-- sub -->
		<div class="container" id="subtitulo">
			<div class="row title text-center col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<p style="font-weight: 400;">Avalie a eficácia da sua loja virtual e como ela se compara a outras da sua área de atuação</p>
			</div>
		</div>
		<!-- .sub -->

		
		<div class="container">
			<div class="row content-row content" id="content">
				<!-- main form -->
				<form id="formulario" method="post">

					<!-- left content -->
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id="left">

						<div id="wrapper1" class="left">

							<div class="form-group">
								<label>Email: </label>
					  			<input type="email" onblur="checkEmail(this)" name="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" >
							</div>

							<div class="form-group">
								<label>Link do e-commerce: </label>
					  			<input onblur="checkUrl(this)" name="website"type="url" class="form-control"  placeholder="Site">
							</div>

							<div class="form-group">
								<label>Área de atuação do e-commerce: </label>
								<select id="dropdown" name="ecommerce_area_atuacao" class="form-control">
					  				<option>Moda e Acessórios</option>
					  				<option>Mercado Pet</option>
					  				<option>Eletrônicos</option>
					  				<option>Eletrodomésticos, casa e decoração</option>
					  				<option>Mercado Farmacêutico</option>
					  				<option>Alimentos e bebidas</option>
					  				<option>Mercado Automotivo</option>
					  				<option>Outros</option>
					  			</select>
							</div>

						</div>
					
					</div>
					<!-- .left content -->
						
					<!-- center -->
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4" id="center">
					
						<div id="wrapper2" class="center">
							
					  		<div class="form-group">
								<label>Quantos visitantes você recebe por mês?</label>
					  			<input name="ecommerce_visitas_mensais" type="number" class="form-control"  placeholder="Visitantes/mês">
							</div>

							<div class="form-group">
								<label>Quantos pedidos você recebe por mês?</label>
					  			<input type="number" class="form-control" name="ecommerce_pedidos_mensais" placeholder="Pedidos/mês">
							</div>

							<!-- btn -->
							<button id="submit" class="center-block btn btn-success btn-lg">ANALISAR CONVERSÃO</button>
							<!-- .btn-->

							<!-- central btn 2 -->
							<button id="submit2" type="button" class="center-block btn btn-success btn-lg hidden">CALCULAR NOVAMENTE</button>
							<!-- .central btn 2-->
						
						</div>
					
					</div>
					<!-- .center -->

				</form>
				<!-- .main form -->

				<!-- right -->
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center" id="conversion-box">
					<p id="conversion" class="col-md-12">
						0%
					</p>
					<div id="conversion-title" class="col-lg-12 text-center hidden">
					<p>
						é a sua taxa de conversão
					</p>
					</div>
				</div>
				<!-- .right -->

				<!-- sugestoes / links -->
				<div id="links-box" class="hidden col-xs-12 col-sm-12 col-md-12 col-lg-12 links-box text-center">

					<hr style="border-top: 1px solid rgb(255, 255, 255);">

					<h3 id="links-title"></h3>

					<br>

					<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 bloco text-center">
					<a id="um" class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 links-wrapper" href="" style="display: none;" target="_blank"></a>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 bloco text-center">
					<a id="dois" class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 links-wrapper" href="" style="display: none;" target="_blank"></a>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 bloco text-center">
					<a id="tres" class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 links-wrapper" href="" style="display: none;" target="_blank"></a>
					</div>

					<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 bloco text-center">
					<a id="quatro" class="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 links-wrapper" href="" style="display: none;" target="_blank"></a>
					</div>

				</div>
				<!-- .sugestoes / links -->

			</div>
		</div>
	</section>
	<!-- .content -->

	<!-- footer -->
	<section class="text-center footer">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
				<div class="col-md-4"></div>
					<div class="col-md-2">
					<a href="https://rockcontent.com" title="Rock Content" target="_blank">
						<img src="img/rockcontent-branco.png" class="logo-footer" alt="Rock Content" style="height: 45px;"/>
					</a>
					</div>
					<div class="col-md-2 bbb">
					<a href="https://rockcontent.com" title="Rock Content" target="_blank">
						<img src="img/vtex.png" class="logo-footer" alt="Rock Content" style="height: 45px;"/>
					</a>
					</div>
					<div class="col-md-4"></div>
				</div>
			</div>
		</div>
		<br>
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
					<p class="footer-text">
						© 2013-2017 Rock Content. Todos os direitos reservados.
						<a href="http://rockcontent.com/politica-de-privacidade/" title="Política de Privacidade" style="color:#bbb;" target="_blank">Política de Privacidade</a>.<br/>
						Feito com ❤ no San Pedro Valley.
					</p>
				</div>
			</div>
		</div>
	</section>
	<!-- .footer -->
	
</body>

	<!-- jquery link -->
	<script src="https://code.jquery.com/jquery-1.9.1.js"></script>
	
	<!-- javascript link -->
	<script src="js/custom.js"></script>

	<!-- Latest compiled and minified bootstrap JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous">
	</script>
</html>