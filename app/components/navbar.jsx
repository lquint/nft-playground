import Link from "next/link";

const nav = function navbar()  {
    return ( 
        <div className="flex items-center h-20 text-2xl gap-x-[68px] ml-[40px] mb-16">
            <Link href="/">
                <a href="/">
                <img
                className="w-[233px] mt-2"
                src="/img/nftPlayground_logo.png"
                alt="Your Company"
                /></a>
            </Link>
            <Link href="/">Home</Link>
            <Link href="/playground">Playground</Link>
            <Link href="/transactions">Transactions</Link>
            <Link href="/about">About</Link>
        </div>
     );
}
 
export default nav;