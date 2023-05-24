import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  console.log(router.query);
  const { name, age } = router.query;
  return (
    <div>
      {/* <h1>sum = {parseInt(num1)+parseInt(num2)}</h1> */}
      <h1>{name ? `Hello , ${name}` : "I don't know your name"}</h1>
    </div>
  );
}
