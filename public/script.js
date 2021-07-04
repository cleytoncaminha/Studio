document.addEventListener('DOMContentLoaded',()=>{})

function newContact(){
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let service = document.getElementById("service").value;

    let contact = {email, name, service};
    const options = {method:"POST",
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(contact)
        }
        
        fetch("http://localhost:3000/users", options).then(res=>{
            console.log(res)
            window.alert('registro realizado con éxito, Gracias')
        })
};