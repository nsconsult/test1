// "use server"
// import { string, z, } from "zod";
// import { registerUserService } from "../service/auth-service";
// const schemaRegister = z.object({
//     name: z.string().min(3).max(30, {
//       message: "name must be between 3 and 30 characters",
//     }),
//     password: z.string().min(6).max(100, {
//       message: "Password must be between 8 and 100 characters",
//     }),
//     email: z.string().email({
//       message: "Please enter a valid email address",
//     }),
//   });
// //   export async function handleRole(role){
// // /    setRole(role);
//  // }
// export async function registerUserAction(prevState: any ,formData:FormData) {
//     console.log("helloword");
//     const validateFieds = schemaRegister.safeParse({
//         name: formData.get("name"),
//         email: formData.get("email"),
//         password: formData.get("password"),
//         role: roled = string(role);

//     });
//     if(!validateFieds.success){
//         return{
//             ...prevState,
//             zodErrors:validateFieds.error.flatten().fieldErrors,
//             message:"Echec d'inscription",
//         };
//     }

//     const responseData = await registerUserService(validateFieds.data);
    
//     if(!responseData){
//       return{
//         ...prevState,
//         ZodErrors:null,
//         message: "Ops! quelque chose c'est mal passer. Ressayer encore",
//       };
//     }

//     if(responseData.error){
//       return{
//         ...prevState,
//         ZodErrors:null,
//         message: "Iscription à echoué",
//       }
//     }


//     // if(responseData){
//     // }
//     console.log("#########");
//     console.log("Inscription reussi ", responseData);
//     console.log("#########");

//    return{
//     ...prevState,
//     data: "ok",
//    }
 

// } 