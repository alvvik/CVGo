import Link from "next/link";

export default function Header() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center gap-2">
      <Link href="/" className="text-primary hover:text-primary/80">
        Wróc do strony głównej
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-text text-center">
        Kreator CVGo
      </h1>
    </div>
  );
}
