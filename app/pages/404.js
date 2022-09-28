import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from 'next/router'
import Image from "next/image"
import sadge from "../public/gifs/sadge.gif"

const NotFound = () => {
    const router= useRouter();
    /*
    useEffect(() => {
        setTimeout(()=> {
            router.push('/');
        }, 3000)
    },[])
    */
    return ( 
        <div className="not-found">
             <div className='flex flex-col items-center justify-center w-full space-y-4 page-standard lg-flex-row'>
                <div className='relative overflow-hidden rounded-full w-36 h-36 ring-2 ring-pink-300 ring-offset-4'>
                    <Image
                    objectFit='cover'
                    src={sadge}
                    alt='Gif of Sadge'
                    //sizes="1vw"
                    layout='fill'
                    priority
                    />
                </div>
                <h1>Ooops...</h1>
                <h2>That page cannot be found</h2>
                <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
            </div>
        </div>
     );
}
 
export default NotFound;