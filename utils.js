let total_value = 0
var total = 0

function get_element_li (name, price) {
  return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item" onclick="remove_item.call(this)">remove</button></li>`
}

function add_item_to_list_with_template(n_obj, v_obj) 
	{
	  let element_name = document.getElementById("item-name")
	  let element_price = document.getElementById("item-value")
	  let name = element_name.value;
	  let price = element_price.value;
	  
	   if (isNaN(price))
	   {
		   inputError("item-value");
	   }
	   else if(name === "")
	   {
		   inputError("item-name");
	   }
	   else
	   {
		
		let new_item = get_element_li(name, price)
		let price_float = parseFloat(price)
		document.getElementById("items").innerHTML += new_item;
		total += price_float
		showTotal(total)
	   }

	   }


/*
 for removing elements could be this way
  let element_to_delete = document.querySelector("selector").lastElementChild;
  element_to_delete.parentNode.removeChild(element_to_delete);
  or we could use ChildNode.remove()
  https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
*/
function inputError (id) {
  var element = document.getElementById(id);
  element.classList.add("error");
}

function showTotal (total){
  var total_show = Math.abs(total);
  total_show = total_show.toFixed(2);
  debugger;
  let prompt = `total: $${total_show}`;
  document.getElementById("total").innerHTML = prompt;
}

function remove_item () {
  let list_entry = this.parentNode.innerText;
  let price_string = list_entry.match(/\d+(\.\d+)?/);
  let price = parseFloat(price_string);
  this.parentNode.remove();
  total -= price;
  showTotal(total);
}

