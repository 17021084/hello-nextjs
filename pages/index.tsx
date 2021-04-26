import Head from "next/head";
import styles from "../styles/Home.module.css";
// style phai import nhu the

export default function Home() {
  console.log("hello in Index");
  return <div onClick={() => alert("asds")}> Heelo</div>;
}
 