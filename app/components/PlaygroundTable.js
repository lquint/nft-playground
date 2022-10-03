import Image from "next/image"
import dummyNFT from "../public/nft/img/dummyNFT.png"
import React from "react";
import Script from 'next/script'


const PlaygroundTable = () => {
    ////////////////////////
    /// Utility functions ///
    ///////////////////////
    function clipboardCopy() {     
        console.log(userAddress.innerText)     
            // Copy the text inside the text field
        navigator.clipboard.writeText(userAddress.innerText);
    }

    async function mintDummyNFT(){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        //await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress=await signer.getAddress()
        const ERC721Address="0x75636eb6b3581ef91357eceb976906ec8faca578"
        const ERC721ABI=[
            "function getTokenID() public view returns (uint256)",
            "function mintToken(address to, string memory tokenURI) external returns (uint tokenId)",
            "function safeTransferFrom(address _from, address _to, uint256 _tokenId) public payable ",
            "function ownerOf(uint256 _tokenId) public view  returns (address)",
            "function getURIs(address owner) public view returns(string memory)"
        ]
        const ERC721Contract= new ethers.Contract(ERC721Address,ERC721ABI,signer)
                try {
                    var tokenURI='nft/metadata/dummyNFT.json'
                    const tx =  await ERC721Contract.mintToken(userAddress,tokenURI)
                    // Wait until the tx has been confirmed (default is 1 confirmation)
                    const receipt = await tx.wait()
                    // Receipt should now contain the logs
                    console.log(receipt)
                    
                    }catch (err){
                        console.log(err)
                        return err
                    }
    }


        //  DISPLAY ELEMENTS //
    //displays NFTs as card elements (note : add scrollable, max height etc ..)
    async function setTokenDisplay(){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner();
        const userAddress=await signer.getAddress()
        const ERC721Address="0x75636eb6b3581ef91357eceb976906ec8faca578"
        const ERC721ABI=[
            "function getTokenID() public view returns (uint256)",
            "function mintToken(address to, string memory tokenURI) external returns (uint tokenId)",
            "function safeTransferFrom(address _from, address _to, uint256 _tokenId) public payable ",
            "function ownerOf(uint256 _tokenId) public view  returns (address)",
            "function getURIList(address owner) public view returns(string[] memory)"
        ]
        const ERC721Contract= new ethers.Contract(ERC721Address,ERC721ABI,signer)

        var nftList=""
        const uriList= await ERC721Contract.getURIList(userAddress)
        console.log("haaa"+uriList)
        console.log(uriList.length)
        //look through all our token to check if there are favorites
        for (let i=0;i< uriList.length; i++){
            nftList=nftList+`
            <div class="flex flex-col transition ease-in-out delay-150 border border-black rounded-3xl bg-slate-900 basis-1/4 h-2/5">
                <div class="relative mx-auto mt-2 overflow-hidden rounded-md w-36 h-36">
                    <Image
                        objectFit='cover'
                        src="nft/img/dummyNFT.png"
                        alt='dummy nft'
                        layout='fill'
                        priority
                        />
                </div>    
                <div class="mx-auto">
                    <p class="font-bold text-center text-slate-50">Dummy NFT</p>
                    <p class="text-center text-slate-500">No particular use</p>
                </div>
                <div class="px-6 pt-2 pb-2">
                        <span class="inline-block px-3 py-1 mb-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">ERC-721 Token</span>
                    </div>
                <div class="flex flex-row mx-auto mt-auto gap-x-3">
                <button class="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Transfer
                </button>
                <button class="w-6/12 px-4 py-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700">
                Burn
                </button>
                </div>
            </div>
            `
        }
        const nftDisplay=document.getElementById("nftDisplay")
        nftDisplay.innerHTML=nftList
    }

    // Verify and alert if user is connected to Metamask
    async function isConnected() {
        const accounts = await ethereum.request({method: 'eth_accounts'});       
        if (accounts.length) {
            Swal.fire('Great ! You are connected with your Metamask Wallet !')
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner();
            const userAddress=await signer.getAddress()
            const ERC721Address="0x75636eb6b3581ef91357eceb976906ec8faca578"
            const ERC721ABI=[
                "function getTokenID() public view returns (uint256)",
                "function mintToken(address to, string memory tokenURI) external returns (uint tokenId)",
                "function safeTransferFrom(address _from, address _to, uint256 _tokenId) public payable ",
                "function ownerOf(uint256 _tokenId) public view  returns (address)",
                "function getURIs(address owner) public view returns(string memory)"
              ]
            const ERC721Contract= new ethers.Contract(ERC721Address,ERC721ABI,signer)
            console.log(await ERC721Contract.getTokenID())
            //set up display with metamask datas
            const contractBar=document.getElementById("contractBar")
            console.log(contractBar.innerHTML)
            contractBar.innerHTML=`
                <button id="mintDummy" class="my-auto w-6/12 px-4 py-2 mb-2 mt-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700 hover:text-neutral-800">
                Mint
                </button>
                <button class="my-auto w-6/12 px-4 py-2 mb-2 mt-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700 hover:text-neutral-800">
                Burn
                </button>
                <div class="flex my-auto">
                    <span id="userAddress" class="bg-white px-1 py-1 rounded-full border border-yellow-800 z-10">${userAddress}</span>
                    <button id="copyClipBoard" class="bg-gray-900 rounded-full z-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-plus my-auto mx-1" viewBox="0 0 16 16">
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm4.5 6V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5a.5.5 0 0 1 1 0Z"/>
                    </svg>
                    </button>
                </div>
            `
            document.getElementById("copyClipBoard").addEventListener("click",clipboardCopy)
            document.getElementById("mintDummy").addEventListener("click",mintDummyNFT)
            setTokenDisplay()
            
        } else {
            Swal.fire('Please install and connect to Metamask to use the playground section')
            const nftDisplay=document.getElementById("nftDisplay")
            nftDisplay.innerHTML=`
                <div class="my-auto text-4xl font-semibold text-black">
                    <p>Please connect to Metamask</p>
                </div>
            `
        }
     }

     async function mintToken(){
        console.log("Minting token braah")
     }


    React.useEffect(() => {
        isConnected()
      });


    return ( 
        <>
            <div className="container flex flex-row flex-wrap mx-auto overflow-y-auto bg-sky-400 gap-x-10 gap-y-10" >
                <div id="contractBar" className="flex flex-row mt-auto ml-4 gap-x-3">
                        <button id="mintDummy" className="w-6/12 px-4 py-2 my-auto mt-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700 hover:text-neutral-800" onClick={mintToken}>
                        Mint
                        </button>
                        <button className="w-6/12 px-4 py-2 my-auto mt-2 mb-2 font-bold text-white rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:bg-blue-700 hover:text-neutral-800">
                        Burn
                        </button>
                    </div>
            </div>
            <div id="nftDisplay" className="container flex flex-row flex-wrap justify-center h-full mx-auto overflow-y-auto bg-sky-900 gap-x-10 gap-y-10" >
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11" />
                <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
            type="application/javascript"></script>
            </div>
            </>
     );
}
 
export default PlaygroundTable;