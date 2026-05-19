"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      ...registerData,
      callback: "/",
    });


    if (error) {
      
      toast.error("Register Failed");
      return;
    }
    toast.success("Register successful");
    router.push("/")
  };

  return (
    <div className="pt-32 px-10 ">
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="container mx-auto max-w-md rounded-[36px] bg-white px-10 py-12 shadow-xl">
          <div className="text-center">
            <h1
              style={{ fontWeight: "bold", color: "#193CB8", fontSize: "30px" }}
            >
              Register <span style={{ color: "#2B7FFF" }}>here</span>
            </h1>
            <p>Register and see doctor details</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div style={{ marginTop: "20px" }}>
              <label className="mb-2 block font-bold text-blue-950">
                Full Name{" "}
              </label>
              <input
                name="name"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  border: "1px solid gray",
                  padding: "16px",
                  outline: "none",
                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                }}
                type="text"
                placeholder="Enter Your Full name"
                className=" shadow-sm focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-bold text-blue-950">
                Email Address
              </label>
              <input
                name="email"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  border: "1px solid gray",
                  padding: "16px",
                  outline: "none",
                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                }}
                type="email"
                placeholder="Enter Your Email"
                className=" shadow-sm focus:border-blue-500"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label className="mb-2 block font-bold text-blue-950">
                Upload Image{" "}
              </label>
              <input
                name="upload_image"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  border: "1px solid gray",
                  padding: "16px",
                  outline: "none",
                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                }}
                type="url"
                placeholder="Upload profile url imag link"
                className=" shadow-sm focus:border-blue-500"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <label className="mb-2 block font-bold text-blue-950">
                Password{" "}
              </label>
              <input
                name="password"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  border: "1px solid gray",
                  padding: "16px",
                  outline: "none",
                  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                }}
                type="password"
                placeholder="Enter Your Password"
                className=" shadow-sm focus:border-blue-500"
              />
            </div>

            <input
              type="submit"
              value="Register →"
              style={{
                marginTop: "20px",
                width: "100%",
                borderRadius: "16px",
                border: "none",
                padding: "16px",
                outline: "none",
                backgroundColor: "#1683ff",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 10px 20px rgba(22, 131, 255, 0.25)",
                transition: "0.3s",
              }}
            />
          </form>
          <hr className="mt-6" />
          <button
            style={{
              marginTop: "20px",
              width: "100%",
              borderRadius: "16px",
              border: "1px solid #ddd",
              padding: "16px",
              outline: "none",
              color: "#2B7FFF",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "0.3s",
            }}
            className="btn"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}
