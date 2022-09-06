// let data = ['Home', 'About', 'Contact', 'Feedback'];
// let list = document.getElementById('myList')
// data.forEach((item) => {
//     // let a = document.createElement('a');
//     let li = document.createElement('li');
//     li.innerHTML = item;
//     list.appendChild(li);
// });



// validation for name, email and password
document.getElementById('Submit').addEventListener('click', function submitForm(){
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value
    var passWord = document.getElementById('passWord').value;
    var length = passWord.length
    var ValidateEmail = ValidateEmail.value

    if(
        name == '',
        email == '', 
        passWord == '')
        {
        alert("Fill in the required!")
        return false
    }
    else if(name !== '', email !== '', passWord !== ''){
        if(length > 8 ){
            alert('You cannot input more than 8 characters')
        }else if(length < 8 ){
            alert('Minimum characters is 8')
        }else{
            // document.getElementById('Next'). value
        }
        return true
    }

    // validation for @ in email
        function ValidateEmail(email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return true
        }else {
            alert("You have entered an invalid email address!")
            return false
        }
        }

    });


    // var button = document.createElement('button');
    // button.innerHTML = "Google &#x92;"

    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button)
     
    // button.addEventListener("click", function(){
    //     alert("did something")
    // })


    // Consumption of Bible API to display of the website per seconds interval
// var data = JSON.stringify(false);

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
// xhr.addEventListener("readystatechange", function(){
//     if(this.readyState === this.DONE){
//         console.log(this.responseText);
//     }
// });

// xhr.open("Get", "http://www.restfulwebservices.net/rest/BibleASVService.svc?wsdl");
// xhr.setRequestHeader("api-key", "api-key");
// xhr.send(data);




// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b0e9e8f804msh8472f127fdb9afbp1336b7jsnebde78b5143c',
// 		'X-RapidAPI-Host': 'kjv-bible.p.rapidapi.com'
// 	}
// };

// fetch('https://kjv-bible.p.rapidapi.com/randomVerse', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));




const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://kjv-bible.p.rapidapi.com/randomVerse");
xhr.setRequestHeader("X-RapidAPI-Key", "b0e9e8f804msh8472f127fdb9afbp1336b7jsnebde78b5143c");
xhr.setRequestHeader("X-RapidAPI-Host", "kjv-bible.p.rapidapi.com");

xhr.send(data);