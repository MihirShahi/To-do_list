
			var user = [];
			function getuser(){
				var data = "";
				user.map((info , index)=>{
					data = data + "<tr>";
					data = data + "<td>" + index + "</td>";
					data = data + "<td>" + info + "</td>";
					
data = data + "<td> <button onclick='delitem("+index+")'>Delete</button> </td>";

					data = data + "</tr>";
				})
				document.getElementById("container").innerHTML = data;
			}
			
			function delitem(indexpos){
			    user.splice(indexpos , 1); // 1 for delete, 0 for adding
				getuser();// after delete reload the list
			}
			
			function save(){
				var newuser = document.getElementById("fname").value;
				user.push(newuser);  
				getuser();  
				document.getElementById("fname").value=""; // clear textbox 
			}
		