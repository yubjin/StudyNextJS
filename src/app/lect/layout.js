import Link from "next/link";

export default function LectLayout({children}) {
    return (
        <main className="container mx-auto">
            <div className="flex justify-between items-center p-10 h-12 bg-slate-950 text-white">
                <div>리액트 수업자료</div>
                <nav>
                    <ul className="flex items-center justify-between mx-5 white">
                        <li className="w-20"><Link href="/lect/clock">Clock</Link></li>
                        <li className="w-20"><Link href="/lect/lotto">Lotto</Link></li>
                        <li className="w-20"><Link href="/lect">Home</Link></li>
                    </ul>
                </nav>
            </div>
            {children}
        </main>
    );
}