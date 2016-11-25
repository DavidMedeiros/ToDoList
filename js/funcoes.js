var i = 0;

function processForm() {
  i++;
  var item = document.minhaAgenda.itemDaAgenda.value;
  var listado = '<div id="item' + i + '"><input type="checkbox" onclick="riscar(\'item'+ i + '\')" />' + item + '</div>';
  document.getElementById("agenda").innerHTML += listado;
}

function riscar(item) {
	document.getElementById(item).className = "marcado";
}
