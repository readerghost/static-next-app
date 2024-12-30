import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/home">Home Page</Link>
            <Link href="/">Default Page</Link>
        </div>
    );
}