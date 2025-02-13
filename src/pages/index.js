import Head from "next/head";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Calculator</title>
      </Head>
      <h1 className="mt-5" style={{ textAlign: "center" }}>Simple Calculator</h1>
      <Calculator />
    </div>
  );
}
