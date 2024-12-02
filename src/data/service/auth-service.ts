

// interface RegisterUserProps{
//     name: string,
//     password: string,
//     email: string,
//     role: string,
// }
// export async function registerUserService(userData:RegisterUserProps) {
    

// const url =new URL("http://127.0.0.1:8000/api/");
// try{
//         const response= await fetch(url+"auth/register" ,{
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body:JSON.stringify({...userData}),
//             redirect: "follow"
//         });
//             return response.json();
//             //  const user_token=data?.token;
//     } catch (error){
//         console.error("Register  Service Error",error);
//     }
// }
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.error(error))