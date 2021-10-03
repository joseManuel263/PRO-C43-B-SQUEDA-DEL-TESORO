class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        //agregue el código para devolver verdadero si ingresó la respuesta correcta. 
        if(actualCode===enteredCode.toUpperCase()){
            return true;
        }
        else{
            return false;
        }
    }

}