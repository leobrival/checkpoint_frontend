import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>Checkpoint : frontend</h1>
      <Link href="/">
        Countries <span style={{ marginLeft: "5px" }}>🌍</span>
      </Link>
    </header>
  );
}
