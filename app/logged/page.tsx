"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
interface UserdataGoogle {
  name: string;
  picture: string;
  email: string;
}

export default function Logged() {
  const [userDataGoogle, setUserDataGoogle] = useState<null | UserdataGoogle>(null);
  const loginWith = useRef(localStorage.getItem("loginWith"));

  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken && loginWith.current === "Google") {
        const { data } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log("data :>> ", data);
        setUserDataGoogle(data);
      }
    })();
  }, [loginWith]);

  const setLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loginWith");
    router.push("/");
  };

  const router = useRouter();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {!userDataGoogle && <div>account not found</div>}
      {userDataGoogle && <div>{JSON.stringify(userDataGoogle)}</div>}
    </main>
  );
}
