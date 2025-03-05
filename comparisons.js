// creating a password checker


//database - place to store user database
//form on the client side to Login 
//you ask the user to enter their credentials 
//you collect the values and send them to the server 

const userEmail = 'eric.mongare@moringaschool.com';
const userPassword = '12345678';


//a simple function to check if the credentials are correct

function validateData(email, password){
    if(email === userEmail && password === userPassword){
        console.log("login successful");
    } else {
        console.log("invalid email or password");
    }

}
    //calling the fxn
    validateData('eric.mongare@moringaschool.com', '12345678'); 

    // checking incorrect values first

    validateData('admin@gmail.com','1245' );
    function oppositeValidateFields(email, password){
        if(email !== userEmail && password === userPassword){
            console.log("login not successful");
        } else {
            console.log("login successful");
        }

    }
    //calling the function
    validateData('eric.mongare@moringaschool.com', '12345678'); 



    // simple comparisons

    const eugeneLaptop = 'Lenovo Ideapad slim 3';
    const erickLaptop = 'Lenovo Ideapad slim 3';
    const junieLaptop = 'Lenovo Thinkpad ';

    //strict operator
    console.log (eugeneLaptop === erickLaptop);
    console.log (eugeneLaptop === junieLaptop);

   


    