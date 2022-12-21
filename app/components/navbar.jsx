import React from 'react';
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
            
            <div className='underline-effect'><Link href="/">Home</Link></div>
            <div className='underline-effect'><Link href="/playground">Playground</Link></div>
            <div className='underline-effect'><Link href="/transactions">Transactions</Link></div>
            <div className='underline-effect'><Link href="/about">About</Link></div>
        </div>
     );
}
 
export default nav;