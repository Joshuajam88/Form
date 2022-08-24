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


    // Consumption of Bible API to display of the website per seconds interval
var data = JSON.stringify(false);

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function(){
    if(this.readyState === this.DONE){
        console.log(this.responseText);
    }
});

xhr.open("Get", "https://api.scripture.api.bible/v1/bibles/biblesId/books/bookId/chapters/chaptersId/verses");
xhr.setRequestHeader("api-key", "api-key");
xhr.send(data);


    // Creating the button element
    var button = document.createElement('button');
    button.innerHTML = "Google &#x92;"

    // Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button)

    // Adding event handler 
    button.addEventListener("click", function(){
        alert("did something")
    })



    // let ele = document.createElement('p');
    // let text = document.createTextNode('I give you all the Glory');
    // element.appendChild(text);
    // document.getElementById('demo').appendChild(ele);