import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Mixing and Sound</h1>
      <ul>
        <li>
          <Link href="/difficulties">Why is Mixing so Difficult?</Link>
        </li>
        <li>
          <Link href="/translation">The Mixing Translation Guide</Link>
        </li>
      </ul>
    </>
  );
}
