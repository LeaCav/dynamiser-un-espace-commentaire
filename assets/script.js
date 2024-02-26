
   //Afin de rendre le code html plus lisible il pourrait être intéressant de créer une sfc <style>

   
   
   //get data
    let firstNameInput = document.getElementById("first-name");
    let lastNameInput = document.getElementById("last-name");
    let messageTextarea = document.getElementById("message");
    let divComment = document.getElementById("div-comment");
    let identity = document.getElementById("identity");
    let comment = document.getElementById("comment");
    let errorMessage = document.querySelector("#error-message");
    let form = document.querySelector("form");
    
    //delet data
    function deleteForm(){
        firstNameInput.value = "";
        lastNameInput.value = "";
        messageTextarea.value = "";
    }
    
    //add data
    function validateForm() {  
        let userIdentity1 = document.createTextNode(firstNameInput.value);
        let userIdentity2 = document.createTextNode(lastNameInput.value);
        let newMessage = document.createTextNode(messageTextarea.value);
        let space = document.createTextNode(" ");
        identity.appendChild(userIdentity1);
        identity.appendChild(space);
        identity.appendChild(userIdentity2);
        comment.appendChild(newMessage);
        divComment.style.display="block";
        deleteForm();
    };
    
    //submit data
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if(firstNameInput.value == "" || lastNameInput.value == "" || messageTextarea.value == "")
        {
            errorMessage.style.display="block"; 
        }
      
        else{
            validateForm();
            errorMessage.style.display="none";   
       }   
    });

