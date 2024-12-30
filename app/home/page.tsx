import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>Home page</h1>
            <Link href="/about">About</Link>
            <Link href="/">Default Page</Link>
        </div>
    );
}