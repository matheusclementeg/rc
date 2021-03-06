<?php
   	//Process a new form submission in HubSpot in order to create a new Contact.

	$hubspotutk      = $_COOKIE['hubspotutk']; //grab the cookie from the visitors browser.
	$ip_addr         = $_SERVER['REMOTE_ADDR']; //IP address too.
	$hs_context      = array(
		'hutk' => $hubspotutk,
		'ipAddress' => $ip_addr,
		'pageUrl' => 'https://rockcontent.com/ferramentas/calculadora-conversao-ecommerce/',
		'pageName' => 'Calculadora de Conversão para e-commerce',
	);
	$hs_context_json = json_encode($hs_context);

	//Need to populate these variable with values from the form.
	$str_post = "&email=" . urlencode($_POST['email'])
		. "&website=" . urlencode($_POST['website'])
		. "&ecommerce_area_atuacao=" . urlencode($_POST['ecommerce_area_atuacao'])
		. "&ecommerce_visitas_mensais=" . urlencode($_POST['ecommerce_visitas_mensais'])
		. "&ecommerce_pedidos_mensais=" . urlencode($_POST['ecommerce_pedidos_mensais'])
		. "&hs_context=" . urlencode($hs_context_json);

	//replace the values in this URL with your portal ID and your form GUID
	$endpoint = 'https://forms.hubspot.com/uploads/form/v2/355484/ea6d5a29-5de8-4a1e-be30-64367631fbfd';

	$ch = @curl_init();
	@curl_setopt($ch, CURLOPT_POST, true);
	@curl_setopt($ch, CURLOPT_POSTFIELDS, $str_post);
	@curl_setopt($ch, CURLOPT_URL, $endpoint);
	@curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/x-www-form-urlencoded'));
	@curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
	$response    = @curl_exec($ch); //Log the response from HubSpot as needed.
	$status_code = @curl_getinfo($ch, CURLINFO_HTTP_CODE); //Log the response status code
	@curl_close($ch);
	echo $status_code . " " . $response;

?>