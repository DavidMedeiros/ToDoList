//app angular agenda - modulo da aplicacao
angular.module('agenda',[]).
controller('agendaController', ['$scope', function($scope){

	//tarefas pré-definidas
	$scope.tarefas = [
		{'title': 'Marcar Dentista', 'done':false},
		{'title': 'Terminar exercícios de métodos', 'done':false},
		{'title': 'Ligar para Ana', 'done':false}
	];

	//metodo para adicionar uma nova tarefa
	$scope.addItem = function(){
		$scope.tarefas.push({'title':$scope.itemDaAgenda, 'done':false});
		$scope.itemDaAgenda = '';
	}

	//metodo para remover uma tarefa
	$scope.removeTarefa = function() {
		$scope.tarefas.splice(this.$index, 1);
	}

	//metodo para exibir a quantidade de tarefas já concluidas
	$scope.StatusTarefas = function () {
		var count = 0;
		angular.forEach($scope.tarefas, function (tarefa) {
			count += tarefa.done ? 0 : 1;
		});
		return count;
	};
}]);
