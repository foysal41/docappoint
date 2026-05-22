'use client'
import { FaGoogle, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

export default  function LoginPage() {
    


     const router = useRouter();
      const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loginData = Object.fromEntries(formData.entries());
    
        const { data, error } = await authClient.signIn.email({
          ...loginData,
          callback: "/",
        });
    
    
        if (error) {
          
          toast.error("Login Failed");
          return;
        }
        toast.success("Login successful");
        router.refresh();
        router.push("/")

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

      };

      
        const handleGoogleSignIn = async () => {
          await authClient.signIn.social({
            provider: "google",
          });
        };

  return (
    <div className='pt-32 px-10 '>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
            <div className="container mx-auto max-w-md rounded-[36px] bg-white px-10 py-12 shadow-xl">
                <div className="text-center">
                    <h1 style={{fontWeight:'bold', color:'#193CB8', fontSize: "30px"}} >Welcome <span style={{color: "#2B7FFF"}} >Back</span></h1>
                    <p>Login and see doctor details</p>
                </div>


               
                    <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="mb-2 block font-bold text-blue-950">Email Address</label>
                        <input name="email" style={{width: "100%", borderRadius: "16px", border: "1px solid gray" ,padding:"16px" , outline: "none" ,  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", }} type="email" placeholder="Enter Your Email" 
                        className=" shadow-sm focus:border-blue-500"/>
                    </div>

                    <div style={{marginTop: '20px'}}>
                        <label className="mb-2 block font-bold text-blue-950">Password </label>
                        <input name="password" style={{width: "100%", borderRadius: "16px", border: "1px solid gray" ,padding:"16px" , outline: "none" ,  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)", }} type="password" placeholder="Enter Your Password" 
                        className=" shadow-sm focus:border-blue-500"/>
                    </div>

                    <input type="submit" value="Sign In →" style={{ marginTop: "20px",  width: "100%" , borderRadius: "16px", border: "none",padding: "16px", outline: "none",backgroundColor: "#1683ff",color: "white",fontSize: "18px",fontWeight: "700", cursor: "pointer", boxShadow: "0 10px 20px rgba(22, 131, 255, 0.25)", transition: "0.3s",
  }}/>
                    <hr className="mt-6" />


                </form>
                  <div className="whitespace-nowrap mt-6 text-center">
                            Or Sign up with Google
                          </div>
                          <button
                            onClick={handleGoogleSignIn}
                            className="flex justify-center items-center gap-2 mt-5 w-full rounded-2xl border border-[#ddd] p-4 outline-none text-[#2B7FFF] text-[18px] font-bold cursor-pointer transition-all duration-300"
                          >
                            <FcGoogle></FcGoogle> Sign In with Google
                          </button>
            </div>
        </div>
    </div>
  )
}
