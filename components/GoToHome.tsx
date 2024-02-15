"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function GoToHome() {
  const router = useRouter();
  return <button onClick={()=>{
    router.push('/contact')
  }}>contact me</button>;
}
