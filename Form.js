// let data = ['Home', 'About', 'Contact', 'Feedback'];
// let list = document.getElementById('myList')
// data.forEach((item) => {
//     // let a = document.createElement('a');
//     let li = document.createElement('li');
//     li.innerHTML = item;
//     list.appendChild(li);
// });



document.getElementById('Submit').addEventListener('click', function submitForm(){
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value
    var passWord = document.getElementById('passWord').value;
    var length = passWord.length
    var ValidateEmail = ValidateEmail.value

// validation for name, email and password
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
    
    // let element = document.createElement('h1');
    // let textNode = document.createTextNode('I have more than a song today, Great is they faithfulness');
    // element.appendChild(textNode);
    // document.getElementById('demo').appendChild(element);

    // let ele = document.createElement('p');
    // let text = document.createTextNode('I give you all the Glory');
    // element.appendChild(text);
    // document.getElementById('demo').appendChild(ele);
        
    

   

     