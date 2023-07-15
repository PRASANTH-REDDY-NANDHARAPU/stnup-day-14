// console.log('javascript is running')
function validate(){
    const userName = document.getElementById('username').value
    const password = document.getElementById('userPassword').value
    // console.log(userName)
    // console.log(password)

if (userName == 'prasanth' || password =='katrina'){
    open('next.html')
} else{
    alert('areyy hoo pagal you are not a valid person')
}


}