pragma solidity ^0.8.0;
import "./tokenData.sol";
import "./interfaceERC721.sol";

contract ERC721Contract is tokenData, ERC721, ERC165 {
    

    function balanceOf(address _owner) public view virtual override returns (uint256){
        return tokenBalance[_owner];
    }

    function ownerOf(uint256 _tokenId) public view virtual override returns (address){
        address owner = tokenOwner[_tokenId];
        require(owner != address(0), "ERC721: adress 0 invalid");
        return tokenOwner[_tokenId];
    }

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) public virtual payable override {
        safeTransferFrom(_from, _to, _tokenId, "");
    }

    function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory _data) public virtual payable override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "ERC721: transfer caller is not owner nor approved");
        _safeTransfer(from, to, tokenId, _data);
    }

    function transferFrom(address _from, address _to, uint _tokenId) public virtual payable override{
		safeTransferFrom(_from,_to,_tokenId);
	}

    function _safeTransfer(address from, address to, uint256 tokenId, bytes memory _data) internal virtual {
        _transfer(from, to, tokenId);
        //Get size of "_to" address, if 0 it's a wallet
        uint32 size;
        assembly {
            size := extcodesize(to)
        }
        if(size > 0){
            ERC721TokenReceiver receiver = ERC721TokenReceiver(to);
            require(receiver.onERC721Received(msg.sender,from,tokenId,_data)== bytes4(keccak256("onERC721Received(address,address,uint256,bytes)")));
            emit Transfer(from, to, tokenId);
        }
    }

    function remove(uint index, string[] memory array )  public pure  {
        require(index<array.length, "Index out of bounds");

        for (uint i = index; i<array.length-1; i++){
            array[i] = array[i+1];
        }
        delete array[array.length-1];
    }

    function burn(uint256 tokenId) public {
    require(_isApprovedOrOwner(msg.sender, tokenId));
    _burn(ownerOf(tokenId), tokenId);
    }

    function _burn(address owner, uint256 tokenId) internal {
        _transfer(owner,address(0),tokenId);
    }

    function _transfer(address from, address to, uint256 tokenId) internal virtual {
        
        require(ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
        require(to != address(0), "ERC721: transfer to the zero address");
        // Clear approvals from the previous owner
        _approve(address(0), tokenId);
       tokenOwner[tokenId] = to;
       uint n=tokenCollection[from].length;
       tokenBalance[from]--;
       uint i=0;
       while (i<n){
           if(keccak256(abi.encodePacked(tokenCollection[from][i])) == keccak256(abi.encodePacked(tokenURIs[tokenId]))){
               delete tokenCollection[from][i];
               remove(i,tokenCollection[from]);
               i=n;
           }
           else{i++;}
       }
        emit Transfer(from, to, tokenId);
    }

    function approve(address _approveTo, uint256 _tokenId) public virtual payable override {
        require(_approveTo != ownerOf(_tokenId) , "ERC721: approval to current owner");

        require(msg.sender == ownerOf(_tokenId) || isApprovedForAll(ownerOf(_tokenId), msg.sender),
            "ERC721: approve caller is not owner nor approved for all"
        );
        _approve(_approveTo, _tokenId);
    }

    function getApproved(uint256 _tokenId) public view virtual override returns (address) {
        return tokenApprovals[_tokenId];
    }

    function setApprovalForAll(address _operator, bool _approved) public virtual override {
        require(_operator != msg.sender, "ERC721: approve to caller");
        operatorApprovals[msg.sender][_operator] = _approved;
        emit ApprovalForAll(msg.sender, _operator, _approved);
    }

    function isApprovedForAll(address _owner, address _operator) public view virtual override returns (bool){
        return operatorApprovals[_owner][_operator];
    }

    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {
        return((ownerOf(tokenId)==spender) || getApproved(tokenId)==spender || isApprovedForAll(ownerOf(tokenId), spender) );
    }

    function _approve(address to, uint256 tokenId) internal virtual {
        tokenApprovals[tokenId] = to;
        emit Approval(this.ownerOf(tokenId), to, 0);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165) returns (bool) {
        return interfaceId == type(ERC721).interfaceId;
    }   

    function mintToken(address to, string memory tokenURI) external returns (uint tokenId) {
		Token memory token = Token({
			mintedBy: msg.sender,
			mintedAt: uint64(block.timestamp)
    	});
        require(to != address(0));
		tokenList.push(token);
		tokenId = tokenList.length;
        tokenURIs[tokenId]=tokenURI;
        tokenCollection[to].push(tokenURI);
        tokenBalance[to] += 1;
        tokenOwner[tokenId] = to;
        emit Transfer(address(0), to, tokenId);
    } 

    function getURIs(address owner) public view returns(string memory){
        string memory uri="";
        for (uint i = 1; i <= tokenList.length; i++) {
            if (tokenOwner[i]==owner) {
                uri=string(abi.encodePacked(uri,tokenURIs[i]));
                continue;
            }
        }    
        return uri;
    }

    function getURIList(address owner) public view returns(string[] memory){
        return tokenCollection[owner] ;
    }

    function getTokenID() public view returns (uint256){
        return tokenList.length;
    }

}