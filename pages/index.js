import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h2>Hello World.</h2>
      <br />
      <Link href="/about">About</Link>
      <br />
      <Link href="/day">day/index</Link>
    </div>
  );
}
