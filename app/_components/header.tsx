import Link from "next/link";
export default function Header() {
    return (
        <header className="flex justify-center items-center p-4 gap-5">
            <Link href="/" className="text-2xl font-bold">Default</Link>
            <Link href="/about" className="text-2xl font-bold">About</Link>
            <Link href="/home" className="text-2xl font-bold">Home</Link>
        </header>
    );
}