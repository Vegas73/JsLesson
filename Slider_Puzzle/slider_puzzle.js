let arr = [], box, ei,ej;	


//загрузка страницы :
window.onload = () => {				
	box = document.getElementById("box");
	newGame();				
	document.getElementById("reset").onclick = newGame;						
}

//функция игрового поля :

newGame = () => {	
	//массив с костяшками и пустым полем :	
	for(i = 0; i < 4; ++i){
		arr[i] = []
		for(j = 0; j < 4; ++j){
			if(i + j != 6)
				arr[i][j] = i*4 + j + 1;
			else
				arr[i][j] = "";
		}
	}	
//функция замещения костяшек :	
	swap = (arr,i1,j1,i2,j2) => {				
		a = arr[i1][j1];
		arr[i1][j1] = arr[i2][j2];
		arr[i2][j2] = a;
	}
	//перемешивание массива :
	ei = 3;
	ej = 3;
	for(i = 0; i < 1800; ++i)
		switch(Math.round(3*Math.random())){
			case 0: if(ei != 0) swap(arr,ei,ej,--ei,ej); break; // вверх
			case 1: if(ej != 3) swap(arr,ei,ej,ei, ++ej); break; // вправо
			case 2: if(ei != 3) swap(arr,ei,ej,++ei,ej); break; // вниз
			case 3: if(ej != 0) swap(arr,ei,ej,ei,--ej); // влево
		}
	//таблица с элементами :
	let table = document.createElement("table"),
		tbody = document.createElement("tbody");					
	table.appendChild(tbody);
	for(i = 0; i < 4; ++i){
		let row = document.createElement("tr");
		for(j = 0; j < 4; ++j){
			let cell = document.createElement("td");
				cell.id = i + " " + j;
				cell.onclick = cellClick;
				cell.innerHTML = arr[i][j];
				row.appendChild(cell);
		}
		tbody.appendChild(row);					
	}
	if(box.childNodes.length == 1)
		box.removeChild(box.firstChild);	
	box.appendChild(table);	
}



//функция смещения костяшек :

cellClick = (event) => {
	var event = event || window.event,
		el = event.srcElement || event.target,
		i = el.id.charAt(0),
		j = el.id.charAt(2);
	//проверка на наличии рядом пустой ячейки :
	if((i == ei && Math.abs(j - ej) == 1) || (j == ej && Math.abs(i - ei) == 1)){					
		document.getElementById(ei + " " + ej).innerHTML = el.innerHTML;
		el.innerHTML = "";
		ei = i;
		ej = j;
		let q = true;
		//проверка на выигрышную комбинацию :
		for(i = 0; i < 4; ++i)
			for(j = 0; j < 4; ++j)
				if(i + j != 6 && document.getElementById(i + " " + j).innerHTML != i*4 + j + 1){
					q = false;
					break;
				}
				if(q) alert("Victory!");
			}
}