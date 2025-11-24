import { useState } from "react";
import { client } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");
  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      await client.auth.signInWithOtp({
        email,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type="email"
          name="email"
          placeholder="goku@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
