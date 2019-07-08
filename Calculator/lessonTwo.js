var x= prompt("Введите x:",100);  
var y= prompt("Введите y:",100);  
var z= prompt("введите знак операции:","+");
var result;

if (z=="+")
{
	result = (+x) + (+y);
} else if (z=="-")
	{
		result = (+x) - (+y);
	} else if (z=="*") 
		{
			result = (+x) * (+y);
		}else if (z=="/") 
			{
				result = (+x) / (+y);
			}
alert(result);