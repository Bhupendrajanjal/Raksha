let cl =console.log;

const loginForm = document.getElementById('loginForm');

const emailControl = document.getElementById('email')

const passworldControl = document.getElementById('Passworld');

let obj=[{
    email:"1234567",
    passworld:"1234567",
},

{
    email :"bhupendra@1",
    passworld:"pooja@123",
}
]


const onlogin = (eve)=>{
    eve.preventDefault();

   setTimeout(()=>{
    let emailval = emailControl.value;
    let passworldval = passworldControl.value;
    


    let isEmailExist;
    obj.forEach(acc=>{
        if(emailval === acc.email){
            isEmailExist = acc
            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'SuccessFully Login',
                footer: '<a href="">Why do I have this issue?</a>',
                timer:1500,
              }) 
        }

        
    })

    if(isEmailExist){
        //check password 
        if(isEmailExist.passworld === passworldval ){
            redirecttodashBodard()
        }
        else{
            Swal.fire({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://img.freepik.com/free-vector/cartoon-character-with-devil-angel-fighting-thought_1308-113739.jpg',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Custom image',
                timer:1500,
              })
        }
        

    }
    else{
        Swal.fire({
            title: 'Sweet!',
            text: 'Plz Proper Way Password And UserName Enter on TAb',
            imageUrl: 'https://img.freepik.com/free-vector/cartoon-character-with-devil-angel-fighting-thought_1308-113739.jpg',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            timer:2000,
          })

    }


   },2000)

   

}


function redirecttodashBodard(){
    // cl('dashboard is loaded')
    window.location.href='dashboarded.html'

}


loginForm.addEventListener("submit", onlogin)