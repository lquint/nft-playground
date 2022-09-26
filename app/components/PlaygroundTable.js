import Image from "next/image"
import shapelessNFT from "../public/nft/shapelessNFT.png"

const PlaygroundTable = () => {
    return ( 
        <div className="container flex flex-row justify-center mx-auto h-5/6 bg-sky-900 gap-x-10 gap-y-10 " >
            <div className="transition ease-in-out delay-150 border border-black rounded-md bg-slate-300 basis-1/4 h-1/2 hover:scale-125">
                <div className="relative mx-auto overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center">Shapeless NFT</p>
                    <p className="text-center">ERC-721 Token</p>
                </div>
            </div>
            <div className="transition ease-in-out delay-150 border border-black rounded-md bg-slate-300 basis-1/4 h-1/2 hover:scale-125">
                <div className="relative mx-auto overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center">Shapeless NFT</p>
                    <p className="text-center">ERC-721 Token</p>
                </div>
            </div>
            <div className="transition ease-in-out delay-150 border border-black rounded-md bg-slate-300 basis-1/4 h-1/2 hover:scale-125">
                <div className="relative mx-auto overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center">Shapeless NFT</p>
                    <p className="text-center">ERC-721 Token</p>
                </div>
            </div>
            <div className="transition ease-in-out delay-150 border border-black rounded-md bg-slate-300 basis-1/4 h-1/2 hover:scale-125">
                <div className="relative mx-auto overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center">Shapeless NFT</p>
                    <p className="text-center">ERC-721 Token</p>
                </div>
            </div>
            <div className="transition ease-in-out delay-150 border border-black rounded-md bg-slate-300 basis-1/4 h-1/2 hover:scale-125">
                <div className="relative mx-auto overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src={shapelessNFT}
                        alt='shapeless nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div className="mx-auto">
                    <p className="font-bold text-center">Shapeless NFT</p>
                    <p className="text-center">ERC-721 Token</p>
                </div>
            </div>
            </div>
     );
}
 
export default PlaygroundTable;