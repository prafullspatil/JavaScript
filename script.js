// console.log("Hello World!!!")
const url = " https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5";
var arr = [];


async function getData(url) {
	/* fetching data */
	await fetch(url)
		.then((response) => {
			return response.json();			/*converting data into object*/
		})
		.then((data) => {
			/* console.log(data); */
			data.map((values) => {
				arr.push(values);		/*Pushing data into array*/
			});
			tableData(arr);
			getUserData(0);

		})
		.catch((err) => {
			console.log(err);
		})
}
console.log(arr.values());
/*displaying data in table */
function tableData(arr) {
	var tabledata = "";
	for (var i = 0; i < arr.length; i++) {
		tabledata += "<tr onClick=getUserData(" + i + ")>";
		tabledata += "<td>" + arr[i].first_name + "</td>";
		tabledata += "<td>" + arr[i].last_name + "</td>";
		tabledata += "<td>" + arr[i].username + "</td>";
		tabledata += "<td>" + arr[i].employment.title + "</td>";
		tabledata += "<td>" + arr[i].address.country + "</td>";
		tabledata += "<td onClick=deleteData(" + i + ")><i class='fa-solid fa-minus'></i></td>";
		tabledata += "<tr>";
	}
	document.getElementById("table_body").innerHTML = tabledata;
}


/* display data in right card */
function getUserData(i) {
	// console.log(i)
	// console.log(arr[i].first_name);
	
	listData = `
	<img src=${arr[i].avatar}</img>
	<ul>
		<li>Id :${arr[i].id}</li>
		<li>Uid: ${arr[i].uid}</li>
		<li>FirstName: ${arr[i].first_name}</li>
		<li>LastName: ${arr[i].last_name}</li>
		<li>UserName: ${arr[i].username}</li>
		<li>Email: ${arr[i].email}</li>
		<li>Gender: ${arr[i].gender}</li>
		<li>Social Insurance No.: ${arr[i].social_insurance_number}</li>
		<li>Phone Number: ${arr[i].phone_number}</li>
		<li>DOB: ${arr[i].date_of_birth}</li>
		<li>Employement Title: ${arr[i].employment.title}</li>
		<li>Employment Skill: ${arr[i].employment.key_skill}</li>
		<li>Country: ${arr[i].address.country}</li>
		<li>State: ${arr[i].address.state}</li>
		<li>City: ${arr[i].address.city}</li>
		<li>Credit No.: ${arr[i].credit_card.cc_number}</li>
		<li>Subscription Status: ${arr[i].subscription.status}</li>
	</ul>
	`
	document.getElementById("user_details").innerHTML = listData;
	var greeting = showGreetings();
	document.getElementById("greetings").innerHTML = greeting + `\t` + arr[i].first_name;
}


/*delete user*/
function deleteData(del) {
	if (confirm("Do you want to delete?")) {
		for (let i = 0; i < arr.length; i++) {
			if (del === i) {
				arr.splice(i, 1);
				tableData(arr);
			}
		}
	}
}


/*For Greeting message*/
function showGreetings() {
	const date = new Date();
	let hours = date.getHours();
	// console.log(hours);
	if (hours >= 5 && hours <= 12) {
		return "Good Morning";
	}
	else if (hours > 12 && hours < 18) {
		return "Good Afternoon";
	}
	else if (hours >= 18 && hours < 22) {
		return "Good Evening";
	}
	else {
		return "Good Night";
	}

}


window.onload = function main() {
	getData(url);
}