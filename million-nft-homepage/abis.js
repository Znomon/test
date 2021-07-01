{
  "contractName": "MNFTH",
    "abi": [
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "_writer",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "colorArray",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "token_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          }
        ],
        "name": "mintPixel",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "token_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "color",
            "type": "string"
          }
        ],
        "name": "updatePixelMapping",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "token_id",
            "type": "uint256"
          }
        ],
        "name": "readColor",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ],
      "metadata": "{\"compiler\":{\"version\":\"0.5.16+commit.9c3226ce\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"_writer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"colorArray\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"token_id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"color\",\"type\":\"string\"}],\"name\":\"mintPixel\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"token_id\",\"type\":\"uint256\"}],\"name\":\"readColor\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"token_id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"color\",\"type\":\"string\"}],\"name\":\"updatePixelMapping\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.\",\"params\":{\"to\":\"address to be approved for the given token ID\",\"tokenId\":\"uint256 ID of the token to be approved\"}},\"balanceOf(address)\":{\"details\":\"Gets the balance of the specified address.\",\"params\":{\"owner\":\"address to query the balance of\"},\"return\":\"uint256 representing the amount owned by the passed address\"},\"getApproved(uint256)\":{\"details\":\"Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the approval of\"},\"return\":\"address currently approved for the given token ID\"},\"isApprovedForAll(address,address)\":{\"details\":\"Tells whether an operator is approved by a given owner.\",\"params\":{\"operator\":\"operator address which you want to query the approval of\",\"owner\":\"owner address which you want to query the approval of\"},\"return\":\"bool whether the given operator is approved by the given owner\"},\"name()\":{\"details\":\"Gets the token name.\",\"return\":\"string representing the token name\"},\"ownerOf(uint256)\":{\"details\":\"Gets the owner of the specified token ID.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query the owner of\"},\"return\":\"address currently marked as the owner of the given token ID\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\\\"onERC721Received(address,address,uint256,bytes)\\\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator\",\"params\":{\"_data\":\"bytes data to send along with a safe transfer check\",\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}},\"setApprovalForAll(address,bool)\":{\"details\":\"Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.\",\"params\":{\"approved\":\"representing the status of the approval to be set\",\"to\":\"operator address to set the approval\"}},\"supportsInterface(bytes4)\":{\"details\":\"See `IERC165.supportsInterface`.      * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"Gets the token symbol.\",\"return\":\"string representing the token symbol\"},\"tokenByIndex(uint256)\":{\"details\":\"Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the tokens list\"},\"return\":\"uint256 token ID at the given index of the tokens list\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"Gets the token ID at a given index of the tokens list of the requested owner.\",\"params\":{\"index\":\"uint256 representing the index to be accessed of the requested tokens list\",\"owner\":\"address owning the tokens list to be accessed\"},\"return\":\"uint256 token ID at the given index of the tokens list owned by the requested address\"},\"tokenURI(uint256)\":{\"details\":\"Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.\",\"params\":{\"tokenId\":\"uint256 ID of the token to query\"}},\"totalSupply()\":{\"details\":\"Gets the total amount of tokens stored by the contract.\",\"return\":\"uint256 representing the total amount of tokens\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use `safeTransferFrom` whenever possible. Requires the msg.sender to be the owner, approved, or operator.\",\"params\":{\"from\":\"current owner of the token\",\"to\":\"address to receive the ownership of the given token ID\",\"tokenId\":\"uint256 ID of the token to be transferred\"}}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/K/git/MNFTH/src/contracts/MNFTH.sol\":\"MNFTH\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/K/git/MNFTH/src/contracts/ERC721Full.sol\":{\"keccak256\":\"0x514f1933a36f5d6153eadde30ad2a4b5f684861fe70e2d26baa88ae6fea880a4\",\"urls\":[\"bzz-raw://17124b8f8551e0b6afd526ad2b693ce2b41b58ec30faa9c7cfa0986a3aba4241\",\"dweb:/ipfs/QmZ6HBR7W7MveiWLQep84d4kWjngWc9fbDrPuVBPEtCs6y\"]},\"/K/git/MNFTH/src/contracts/MNFTH.sol\":{\"keccak256\":\"0xded490e833b0bfae1c1307f0370bbb1f83e1d3227154884aaae97501891d29c7\",\"urls\":[\"bzz-raw://65d07b3c87d5fbf648fc02f648e8c2400316e486d71cd351822dbf66958385ef\",\"dweb:/ipfs/QmQjxf7w9cv3wz2ccji2R2qHhTdMdaucfQZvC3ao49ckVN\"]}},\"version\":1}",
        "bytecode": "0x60806040526127106011553480156200001757600080fd5b506040518060400160405280601581526020017f4d696c6c696f6e204e465420486f6d65205061676500000000000000000000008152506040518060400160405280600581526020017f4d4e46544800000000000000000000000000000000000000000000000000000081525081816200009e6301ffc9a760e01b6200016c60201b60201c565b620000b66380ac58cd60e01b6200016c60201b60201c565b620000ce63780e9d6360e01b6200016c60201b60201c565b8160099080519060200190620000e692919062000275565b5080600a9080519060200190620000ff92919062000275565b5062000118635b5e139f60e01b6200016c60201b60201c565b5050505033600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550601154600f8190555062000324565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000209576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002b857805160ff1916838001178555620002e9565b82800160010185558215620002e9579182015b82811115620002e8578251825591602001919060010190620002cb565b5b509050620002f89190620002fc565b5090565b6200032191905b808211156200031d57600081600090555060010162000303565b5090565b90565b612a2680620003346000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c80634f6ccce7116100b857806395d89b411161007c57806395d89b41146107b4578063a22cb46514610837578063b88d4fde14610887578063c87b56dd1461098c578063d2818b0614610a33578063e985e9c514610b0c57610136565b80634f6ccce71461055e57806356faedd8146105a05780636352211e1461064757806370a08231146106b557806373d79df21461070d57610136565b806318160ddd116100ff57806318160ddd146103b857806323b872dd146103d65780632f745c591461044457806342842e0e146104a65780634c04896f1461051457610136565b806282a8611461013b57806301ffc9a71461021457806306fdde0314610279578063081812fc146102fc578063095ea7b31461036a575b600080fd5b6101fe6004803603604081101561015157600080fd5b81019080803590602001909291908035906020019064010000000081111561017857600080fd5b82018360208201111561018a57600080fd5b803590602001918460018302840111640100000000831117156101ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b88565b6040518082815260200191505060405180910390f35b61025f6004803603602081101561022a57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610c40565b604051808215151515815260200191505060405180910390f35b610281610ca7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c15780820151818401526020810190506102a6565b50505050905090810190601f1680156102ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103286004803603602081101561031257600080fd5b8101908080359060200190929190505050610d49565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103b66004803603604081101561038057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610de4565b005b6103c0610fbd565b6040518082815260200191505060405180910390f35b610442600480360360608110156103ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fca565b005b6104906004803603604081101561045a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611039565b6040518082815260200191505060405180910390f35b610512600480360360608110156104bc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110f8565b005b61051c611118565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61058a6004803603602081101561057457600080fd5b810190808035906020019092919050505061113e565b6040518082815260200191505060405180910390f35b6105cc600480360360208110156105b657600080fd5b81019080803590602001909291905050506111be565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561060c5780820151818401526020810190506105f1565b50505050905090810190601f1680156106395780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106736004803603602081101561065d57600080fd5b810190808035906020019092919050505061126e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106f7600480360360208110156106cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611336565b6040518082815260200191505060405180910390f35b6107396004803603602081101561072357600080fd5b810190808035906020019092919050505061140b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561077957808201518184015260208101905061075e565b50505050905090810190601f1680156107a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107bc6114c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107fc5780820151818401526020810190506107e1565b50505050905090810190601f1680156108295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108856004803603604081101561084d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611562565b005b61098a6004803603608081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561090457600080fd5b82018360208201111561091657600080fd5b8035906020019184600183028401116401000000008311171561093857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611705565b005b6109b8600480360360208110156109a257600080fd5b8101908080359060200190929190505050611777565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109f85780820151818401526020810190506109dd565b50505050905090810190601f168015610a255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610af660048036036040811015610a4957600080fd5b810190808035906020019092919080359060200190640100000000811115610a7057600080fd5b820183602082011115610a8257600080fd5b80359060200191846001830284011164010000000083111715610aa457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061188a565b6040518082815260200191505060405180910390f35b610b6e60048036036040811015610b2257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b604051808215151515815260200191505060405180910390f35b6000610b9383611a72565b610c05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f496e76616c696420746f6b656e2049440000000000000000000000000000000081525060200191505060405180910390fd5b610c0f3384611a8d565b81601060008581526020019081526020016000209080519060200190610c369291906126e6565b5082905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d3f5780601f10610d1457610100808354040283529160200191610d3f565b820191906000526020600020905b815481529060010190602001808311610d2257829003601f168201915b5050505050905090565b6000610d5482611aae565b610da9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128f0602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610def8261126e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129746021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610eb65750610eb581336119de565b5b610f0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806128656038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610fd43382611b20565b611029576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129956031913960400191505060405180910390fd5b611034838383611c14565b505050565b600061104483611336565b821061109b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806127b8602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106110e557fe5b9060005260206000200154905092915050565b61111383838360405180602001604052806000815250611705565b505050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611148610fbd565b821061119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129c6602c913960400191505060405180910390fd5b600782815481106111ac57fe5b90600052602060002001549050919050565b60106020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112665780601f1061123b57610100808354040283529160200191611266565b820191906000526020600020905b81548152906001019060200180831161124957829003601f168201915b505050505081565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561132d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128c76029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061289d602a913960400191505060405180910390fd5b611404600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c38565b9050919050565b6060601060008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114b45780601f10611489576101008083540402835291602001916114b4565b820191906000526020600020905b81548152906001019060200180831161149757829003601f168201915b50505050509050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115585780601f1061152d57610100808354040283529160200191611558565b820191906000526020600020905b81548152906001019060200180831161153b57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611710848484610fca565b61171c84848484611c46565b611771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127e36032913960400191505060405180910390fd5b50505050565b606061178282611aae565b6117d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612945602f913960400191505060405180910390fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561187e5780601f106118535761010080835404028352916020019161187e565b820191906000526020600020905b81548152906001019060200180831161186157829003601f168201915b50505050509050919050565b600061189583611a72565b611907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f496e76616c696420746f6b656e2049440000000000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166119278461126e565b73ffffffffffffffffffffffffffffffffffffffff16146119b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f7520646f206e6f74206f776e207468697320706978656c0000000000000081525060200191505060405180910390fd5b816010600085815260200190815260200160002090805190602001906119d79291906126e6565b5092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000808214158015611a865750600f548211155b9050919050565b611a978282611e2f565b611aa18282612047565b611aaa8161210e565b5050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611b2b82611aae565b611b80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612839602c913960400191505060405180910390fd5b6000611b8b8361126e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611bfa57508373ffffffffffffffffffffffffffffffffffffffff16611be284610d49565b73ffffffffffffffffffffffffffffffffffffffff16145b80611c0b5750611c0a81856119de565b5b91505092915050565b611c1f83838361215a565b611c2983826123b5565b611c338282612047565b505050565b600081600001549050919050565b6000611c678473ffffffffffffffffffffffffffffffffffffffff16612553565b611c745760019050611e27565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d4f578082015181840152602081019050611d34565b50505050905090810190601f168015611d7c5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611d9e57600080fd5b505af1158015611db2573d6000803e3d6000fd5b505050506040513d6020811015611dc857600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ed2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611edb81611aae565b15611f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611fe7600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612566565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b8273ffffffffffffffffffffffffffffffffffffffff1661217a8261126e565b73ffffffffffffffffffffffffffffffffffffffff16146121e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061291c6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561226c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128156024913960400191505060405180910390fd5b6122758161257c565b6122bc600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061263a565b612303600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612566565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061240d6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061265d90919063ffffffff16565b90506000600660008481526020019081526020016000205490508181146124fa576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061247a57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106124d257fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361254c9190612766565b5050505050565b600080823b905060008111915050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146126375760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6126526001826000015461265d90919063ffffffff16565b816000018190555050565b6000828211156126d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061272757805160ff1916838001178555612755565b82800160010185558215612755579182015b82811115612754578251825591602001919060010190612739565b5b5090506127629190612792565b5090565b81548183558181111561278d5781836000526020600020918201910161278c9190612792565b5b505050565b6127b491905b808211156127b0576000816000905550600101612798565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a72315820ec6a75785f455dbcef5db89207945b8243216f5ef6323d9e4713ea0bc4ee310864736f6c63430005100032",
          "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101365760003560e01c80634f6ccce7116100b857806395d89b411161007c57806395d89b41146107b4578063a22cb46514610837578063b88d4fde14610887578063c87b56dd1461098c578063d2818b0614610a33578063e985e9c514610b0c57610136565b80634f6ccce71461055e57806356faedd8146105a05780636352211e1461064757806370a08231146106b557806373d79df21461070d57610136565b806318160ddd116100ff57806318160ddd146103b857806323b872dd146103d65780632f745c591461044457806342842e0e146104a65780634c04896f1461051457610136565b806282a8611461013b57806301ffc9a71461021457806306fdde0314610279578063081812fc146102fc578063095ea7b31461036a575b600080fd5b6101fe6004803603604081101561015157600080fd5b81019080803590602001909291908035906020019064010000000081111561017857600080fd5b82018360208201111561018a57600080fd5b803590602001918460018302840111640100000000831117156101ac57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610b88565b6040518082815260200191505060405180910390f35b61025f6004803603602081101561022a57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610c40565b604051808215151515815260200191505060405180910390f35b610281610ca7565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102c15780820151818401526020810190506102a6565b50505050905090810190601f1680156102ee5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103286004803603602081101561031257600080fd5b8101908080359060200190929190505050610d49565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103b66004803603604081101561038057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610de4565b005b6103c0610fbd565b6040518082815260200191505060405180910390f35b610442600480360360608110156103ec57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fca565b005b6104906004803603604081101561045a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611039565b6040518082815260200191505060405180910390f35b610512600480360360608110156104bc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110f8565b005b61051c611118565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61058a6004803603602081101561057457600080fd5b810190808035906020019092919050505061113e565b6040518082815260200191505060405180910390f35b6105cc600480360360208110156105b657600080fd5b81019080803590602001909291905050506111be565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561060c5780820151818401526020810190506105f1565b50505050905090810190601f1680156106395780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106736004803603602081101561065d57600080fd5b810190808035906020019092919050505061126e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106f7600480360360208110156106cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611336565b6040518082815260200191505060405180910390f35b6107396004803603602081101561072357600080fd5b810190808035906020019092919050505061140b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561077957808201518184015260208101905061075e565b50505050905090810190601f1680156107a65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107bc6114c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107fc5780820151818401526020810190506107e1565b50505050905090810190601f1680156108295780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6108856004803603604081101561084d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611562565b005b61098a6004803603608081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561090457600080fd5b82018360208201111561091657600080fd5b8035906020019184600183028401116401000000008311171561093857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611705565b005b6109b8600480360360208110156109a257600080fd5b8101908080359060200190929190505050611777565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109f85780820151818401526020810190506109dd565b50505050905090810190601f168015610a255780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610af660048036036040811015610a4957600080fd5b810190808035906020019092919080359060200190640100000000811115610a7057600080fd5b820183602082011115610a8257600080fd5b80359060200191846001830284011164010000000083111715610aa457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061188a565b6040518082815260200191505060405180910390f35b610b6e60048036036040811015610b2257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119de565b604051808215151515815260200191505060405180910390f35b6000610b9383611a72565b610c05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f496e76616c696420746f6b656e2049440000000000000000000000000000000081525060200191505060405180910390fd5b610c0f3384611a8d565b81601060008581526020019081526020016000209080519060200190610c369291906126e6565b5082905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d3f5780601f10610d1457610100808354040283529160200191610d3f565b820191906000526020600020905b815481529060010190602001808311610d2257829003601f168201915b5050505050905090565b6000610d5482611aae565b610da9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806128f0602c913960400191505060405180910390fd5b6002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610def8261126e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806129746021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480610eb65750610eb581336119de565b5b610f0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260388152602001806128656038913960400191505060405180910390fd5b826002600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b6000600780549050905090565b610fd43382611b20565b611029576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806129956031913960400191505060405180910390fd5b611034838383611c14565b505050565b600061104483611336565b821061109b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806127b8602b913960400191505060405180910390fd5b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106110e557fe5b9060005260206000200154905092915050565b61111383838360405180602001604052806000815250611705565b505050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611148610fbd565b821061119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806129c6602c913960400191505060405180910390fd5b600782815481106111ac57fe5b90600052602060002001549050919050565b60106020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112665780601f1061123b57610100808354040283529160200191611266565b820191906000526020600020905b81548152906001019060200180831161124957829003601f168201915b505050505081565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561132d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806128c76029913960400191505060405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a81526020018061289d602a913960400191505060405180910390fd5b611404600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611c38565b9050919050565b6060601060008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114b45780601f10611489576101008083540402835291602001916114b4565b820191906000526020600020905b81548152906001019060200180831161149757829003601f168201915b50505050509050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156115585780601f1061152d57610100808354040283529160200191611558565b820191906000526020600020905b81548152906001019060200180831161153b57829003601f168201915b5050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b80600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b611710848484610fca565b61171c84848484611c46565b611771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806127e36032913960400191505060405180910390fd5b50505050565b606061178282611aae565b6117d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612945602f913960400191505060405180910390fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561187e5780601f106118535761010080835404028352916020019161187e565b820191906000526020600020905b81548152906001019060200180831161186157829003601f168201915b50505050509050919050565b600061189583611a72565b611907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f496e76616c696420746f6b656e2049440000000000000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166119278461126e565b73ffffffffffffffffffffffffffffffffffffffff16146119b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f7520646f206e6f74206f776e207468697320706978656c0000000000000081525060200191505060405180910390fd5b816010600085815260200190815260200160002090805190602001906119d79291906126e6565b5092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000808214158015611a865750600f548211155b9050919050565b611a978282611e2f565b611aa18282612047565b611aaa8161210e565b5050565b6000806001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611b2b82611aae565b611b80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612839602c913960400191505060405180910390fd5b6000611b8b8361126e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611bfa57508373ffffffffffffffffffffffffffffffffffffffff16611be284610d49565b73ffffffffffffffffffffffffffffffffffffffff16145b80611c0b5750611c0a81856119de565b5b91505092915050565b611c1f83838361215a565b611c2983826123b5565b611c338282612047565b505050565b600081600001549050919050565b6000611c678473ffffffffffffffffffffffffffffffffffffffff16612553565b611c745760019050611e27565b60008473ffffffffffffffffffffffffffffffffffffffff1663150b7a02338887876040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d4f578082015181840152602081019050611d34565b50505050905090810190601f168015611d7c5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015611d9e57600080fd5b505af1158015611db2573d6000803e3d6000fd5b505050506040513d6020811015611dc857600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611ed2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611edb81611aae565b15611f4e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611fe7600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612566565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506006600083815260200190815260200160002081905550600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6007805490506008600083815260200190815260200160002081905550600781908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b8273ffffffffffffffffffffffffffffffffffffffff1661217a8261126e565b73ffffffffffffffffffffffffffffffffffffffff16146121e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018061291c6029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561226c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806128156024913960400191505060405180910390fd5b6122758161257c565b6122bc600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061263a565b612303600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612566565b816001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600061240d6001600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905061265d90919063ffffffff16565b90506000600660008481526020019081526020016000205490508181146124fa576000600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061247a57fe5b9060005260206000200154905080600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481106124d257fe5b9060005260206000200181905550816006600083815260200190815260200160002081905550505b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361254c9190612766565b5050505050565b600080823b905060008111915050919050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff166002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146126375760006002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6126526001826000015461265d90919063ffffffff16565b816000018190555050565b6000828211156126d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061272757805160ff1916838001178555612755565b82800160010185558215612755579182015b82811115612754578251825591602001919060010190612739565b5b5090506127629190612792565b5090565b81548183558181111561278d5781836000526020600020918201910161278c9190612792565b5b505050565b6127b491905b808211156127b0576000816000905550600101612798565b5090565b9056fe455243373231456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243373231456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e6473a265627a7a72315820ec6a75785f455dbcef5db89207945b8243216f5ef6323d9e4713ea0bc4ee310864736f6c63430005100032",
            "sourceMap": "57:3251:1:-;;;541:5;516:30;;553:402;8:9:-1;5:2;;;30:1;27;20:12;5:2;553:402:1;37867:157:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;37944:4;37950:6;11130:40;10787:10;11149:20;;11130:18;;;:40;;:::i;:::-;14212;14082:10;14231:20;;14212:18;;;:40;;:::i;:::-;26547:51;26355:10;26566:31;;26547:18;;;:51;;:::i;:::-;35435:4;35427:5;:12;;;;;;;;;;;;:::i;:::-;;35460:6;35450:7;:16;;;;;;;;;;;;:::i;:::-;;35557:49;35283:10;35576:29;;35557:18;;;:49;;:::i;:::-;35354:260;;37867:157;;638:10:1;628:7;;:20;;;;;;;;;;;;;;;;;;822:14;;814:5;:22;;;;57:3251;;11877:193:0;11968:10;11953:25;;:11;:25;;;;;11945:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12058:4;12022:20;:33;12043:11;12022:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;11877:193;:::o;57:3251:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
              "deployedSourceMap": "57:3251:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;57:3251:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1420:1266;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1420:1266:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1420:1266:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1420:1266:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1420:1266:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1420:1266:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;11335:135:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;11335:135:0;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;35725:85;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;35725:85:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16281:204;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16281:204:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;15567:421;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15567:421:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;27379:96;;;:::i;:::-;;;;;;;;;;;;;;;;;;;17958:290;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;17958:290:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;26988:232;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;26988:232:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;18894:134;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;18894:134:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;309:22:1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;27821:199:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;27821:199:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;464:45:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;464:45:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;464:45:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14908:228:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14908:228:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;14471:211;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14471:211:0;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3085:111:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3085:111:1;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3085:111:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;35925:89:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;35925:89:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16786:248;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16786:248:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;19747:268;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;19747:268:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;19747:268:0;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;19747:268:0;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;19747:268:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;19747:268:0;;;;;;;;;;;;;;;:::i;:::-;;36221:205;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;36221:205:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;36221:205:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2692:387:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2692:387:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;2692:387:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;2692:387:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;2692:387:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;2692:387:1;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;17364:147:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;17364:147:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1420:1266:1;1494:7;2063:22;2076:8;2063:12;:22::i;:::-;2055:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2481:27;2487:10;2499:8;2481:5;:27::i;:::-;2538:5;2515:10;:20;2526:8;2515:20;;;;;;;;;;;:28;;;;;;;;;;;;:::i;:::-;;2672:8;2665:15;;1420:1266;;;;:::o;11335:135:0:-;11405:4;11429:20;:33;11450:11;11429:33;;;;;;;;;;;;;;;;;;;;;;;;;;;11422:40;;11335:135;;;:::o;35725:85::-;35764:13;35797:5;35790:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;35725:85;:::o;16281:204::-;16340:7;16368:16;16376:7;16368;:16::i;:::-;16360:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16453:15;:24;16469:7;16453:24;;;;;;;;;;;;;;;;;;;;;16446:31;;16281:204;;;:::o;15567:421::-;15631:13;15647:16;15655:7;15647;:16::i;:::-;15631:32;;15688:5;15682:11;;:2;:11;;;;15674:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15766:5;15752:19;;:10;:19;;;:58;;;;15775:35;15792:5;15799:10;15775:16;:35::i;:::-;15752:58;15744:150;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15934:2;15907:15;:24;15923:7;15907:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;15972:7;15968:2;15952:28;;15961:5;15952:28;;;;;;;;;;;;15567:421;;;:::o;27379:96::-;27423:7;27450:10;:17;;;;27443:24;;27379:96;:::o;17958:290::-;18102:39;18121:10;18133:7;18102:18;:39::i;:::-;18094:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;18208:32;18222:4;18228:2;18232:7;18208:13;:32::i;:::-;17958:290;;;:::o;26988:232::-;27068:7;27104:16;27114:5;27104:9;:16::i;:::-;27096:5;:24;27088:80;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27186:12;:19;27199:5;27186:19;;;;;;;;;;;;;;;27206:5;27186:26;;;;;;;;;;;;;;;;27179:33;;26988:232;;;;:::o;18894:134::-;18981:39;18998:4;19004:2;19008:7;18981:39;;;;;;;;;;;;:16;:39::i;:::-;18894:134;;;:::o;309:22:1:-;;;;;;;;;;;;;:::o;27821:199:0:-;27879:7;27915:13;:11;:13::i;:::-;27907:5;:21;27899:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27995:10;28006:5;27995:17;;;;;;;;;;;;;;;;27988:24;;27821:199;;;:::o;464:45:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14908:228:0:-;14963:7;14983:13;14999:11;:20;15011:7;14999:20;;;;;;;;;;;;;;;;;;;;;14983:36;;15055:1;15038:19;;:5;:19;;;;15030:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15123:5;15116:12;;;14908:228;;;:::o;14471:211::-;14526:7;14571:1;14554:19;;:5;:19;;;;14546:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14640:34;:17;:24;14658:5;14640:24;;;;;;;;;;;;;;;:32;:34::i;:::-;14633:41;;14471:211;;;:::o;3085:111:1:-;3142:13;3170:10;:20;3181:8;3170:20;;;;;;;;;;;3163:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3085:111;;;:::o;35925:89:0:-;35966:13;35999:7;35992:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;35925:89;:::o;16786:248::-;16872:10;16866:16;;:2;:16;;;;16858:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16962:8;16925:18;:30;16944:10;16925:30;;;;;;;;;;;;;;;:34;16956:2;16925:34;;;;;;;;;;;;;;;;:45;;;;;;;;;;;;;;;;;;17013:2;16986:40;;17001:10;16986:40;;;17017:8;16986:40;;;;;;;;;;;;;;;;;;;;;;16786:248;;:::o;19747:268::-;19854:31;19867:4;19873:2;19877:7;19854:12;:31::i;:::-;19904:48;19927:4;19933:2;19937:7;19946:5;19904:22;:48::i;:::-;19896:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19747:268;;;;:::o;36221:205::-;36279:13;36313:16;36321:7;36313;:16::i;:::-;36305:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36399:10;:19;36410:7;36399:19;;;;;;;;;;;36392:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36221:205;;;:::o;2692:387:1:-;2775:7;2799:22;2812:8;2799:12;:22::i;:::-;2791:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2879:10;2858:31;;:17;2866:8;2858:7;:17::i;:::-;:31;;;2850:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3003:5;2980:10;:20;2991:8;2980:20;;;;;;;;;;;:28;;;;;;;;;;;;:::i;:::-;;2692:387;;;;:::o;17364:147:0:-;17444:4;17468:18;:25;17487:5;17468:25;;;;;;;;;;;;;;;:35;17494:8;17468:35;;;;;;;;;;;;;;;;;;;;;;;;;17461:42;;17364:147;;;;:::o;961:123:1:-;1023:4;1056:1;1044:8;:13;;:34;;;;;1073:5;;1061:8;:17;;1044:34;1037:41;;961:123;;;:::o;28914:202:0:-;28978:24;28990:2;28994:7;28978:11;:24::i;:::-;29015:40;29043:2;29047:7;29015:27;:40::i;:::-;29068;29100:7;29068:31;:40::i;:::-;28914:202;;:::o;20217:155::-;20274:4;20291:13;20307:11;:20;20319:7;20307:20;;;;;;;;;;;;;;;;;;;;;20291:36;;20362:1;20345:19;;:5;:19;;;;20338:26;;;20217:155;;;:::o;20742:333::-;20827:4;20852:16;20860:7;20852;:16::i;:::-;20844:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;20928:13;20944:16;20952:7;20944;:16::i;:::-;20928:32;;20990:5;20979:16;;:7;:16;;;:51;;;;21023:7;20999:31;;:20;21011:7;20999:11;:20::i;:::-;:31;;;20979:51;:87;;;;21034:32;21051:5;21058:7;21034:16;:32::i;:::-;20979:87;20971:96;;;20742:333;;;;:::o;28404:245::-;28490:38;28510:4;28516:2;28520:7;28490:19;:38::i;:::-;28541:47;28574:4;28580:7;28541:32;:47::i;:::-;28601:40;28629:2;28633:7;28601:27;:40::i;:::-;28404:245;;;:::o;10014:114::-;10079:7;10106;:14;;;10099:21;;10014:114;;;:::o;23991:356::-;24113:4;24140:15;:2;:13;;;:15::i;:::-;24135:60;;24179:4;24172:11;;;;24135:60;24207:13;24239:2;24223:36;;;24260:10;24272:4;24278:7;24287:5;24223:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;24223:70:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;24223:70:0;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;24223:70:0;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;24223:70:0;;;;;;;;;;;;;;;;24207:86;;12673:10;24322:16;;24312:26;;;:6;:26;;;;24304:35;;;23991:356;;;;;;;:::o;21330:335::-;21416:1;21402:16;;:2;:16;;;;21394:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21475:16;21483:7;21475;:16::i;:::-;21474:17;21466:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21560:2;21537:11;:20;21549:7;21537:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;21573:33;:17;:21;21591:2;21573:21;;;;;;;;;;;;;;;:31;:33::i;:::-;21649:7;21645:2;21624:33;;21641:1;21624:33;;;;;;;;;;;;21330:335;;:::o;30411:186::-;30525:12;:16;30538:2;30525:16;;;;;;;;;;;;;;;:23;;;;30496:17;:26;30514:7;30496:26;;;;;;;;;;;:52;;;;30559:12;:16;30572:2;30559:16;;;;;;;;;;;;;;;30581:7;30559:30;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;30559:30:0;;;;;;;;;;;;;;;;;;;;;;30411:186;;:::o;30798:164::-;30902:10;:17;;;;30875:15;:24;30891:7;30875:24;;;;;;;;;;;:44;;;;30930:10;30946:7;30930:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;30930:24:0;;;;;;;;;;;;;;;;;;;;;;30798:164;:::o;22946:459::-;23060:4;23040:24;;:16;23048:7;23040;:16::i;:::-;:24;;;23032:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23143:1;23129:16;;:2;:16;;;;23121:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23199:23;23214:7;23199:14;:23::i;:::-;23235:35;:17;:23;23253:4;23235:23;;;;;;;;;;;;;;;:33;:35::i;:::-;23281:33;:17;:21;23299:2;23281:21;;;;;;;;;;;;;;;:31;:33::i;:::-;23350:2;23327:11;:20;23339:7;23327:20;;;;;;;;;;;;:25;;;;;;;;;;;;;;;;;;23389:7;23385:2;23370:27;;23379:4;23370:27;;;;;;;;;;;;22946:459;;;:::o;31587:1148::-;31853:22;31878:32;31908:1;31878:12;:18;31891:4;31878:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;31853:57;;31921:18;31942:17;:26;31960:7;31942:26;;;;;;;;;;;;31921:47;;32089:14;32075:10;:28;32071:328;;32120:19;32142:12;:18;32155:4;32142:18;;;;;;;;;;;;;;;32161:14;32142:34;;;;;;;;;;;;;;;;32120:56;;32226:11;32193:12;:18;32206:4;32193:18;;;;;;;;;;;;;;;32212:10;32193:30;;;;;;;;;;;;;;;:44;;;;32343:10;32310:17;:30;32328:11;32310:30;;;;;;;;;;;:43;;;;32071:328;;32488:12;:18;32501:4;32488:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;31587:1148;;;;:::o;8473:422::-;8533:4;8741:12;8852:7;8840:20;8832:28;;8886:1;8879:4;:8;8872:15;;;8473:422;;;:::o;10136:91::-;10218:1;10200:7;:14;;;:19;;;;;;;;;;;10136:91;:::o;24515:175::-;24615:1;24579:38;;:15;:24;24595:7;24579:24;;;;;;;;;;;;;;;;;;;;;:38;;;24575:108;;24669:1;24634:15;:24;24650:7;24634:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;24575:108;24515:175;:::o;10235:110::-;10316:21;10335:1;10316:7;:14;;;:18;;:21;;;;:::i;:::-;10299:7;:14;;:38;;;;10235:110;:::o;5538:184::-;5596:7;5629:1;5624;:6;;5616:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5676:9;5692:1;5688;:5;5676:17;;5713:1;5706:8;;;5538:184;;;;:::o;57:3251:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
                "source": "pragma solidity ^0.5.0;\r\n\r\nimport \"./ERC721Full.sol\";\r\n\r\ncontract MNFTH is ERC721Full {\r\n  using SafeMath for uint256;\r\n  //string[] public colors;\r\n  //mapping(string => bool) _colorExists;\r\n\r\n  //ID of pixels created\r\n  using Counters for Counters.Counter;\r\n  Counters.Counter private _pixelIdTracker;\r\n\r\n  address public _writer;\r\n  mapping (address => uint256) internal balances;\r\n  uint256 internal maxId;\r\n  //mapping (uint256 => bool) internal burned;\r\n\r\n  mapping (uint256 => string) public colorArray;\r\n\r\n  uint256 _initialSupply = 10000;\r\n\r\n  constructor()ERC721Full(\"Million NFT Home Page\", \"MNFTH\") public { \r\n      _writer = msg.sender; //Owner of the contract is the one who deploys it\r\n      \r\n      //balances[msg.sender] = _initialSupply; //Set contract owner to all initial tokens\r\n      \r\n      maxId = _initialSupply; //Set maxId to number of tokens\r\n\r\n      //_supportedInterfaces[this.balanceOf.selector ^ this.ownerOf.selector]\r\n  }\r\n\r\n  function isValidToken(uint256 _tokenId) internal view returns(bool){\r\n      return _tokenId != 0 && _tokenId <= maxId;\r\n  }\r\n\r\n  // function initialDistribution() private {\r\n  //     require(balances[msg.sender] < 5); //only people with less than 5 tokens can mint FIX ME\r\n  //     balances[msg.sender] = balances[msg.sender].add(1); //setting to 1 as an example FIX ME\r\n  //     emit Transfer(_writer, msg.sender, 1); //emit transfer of token\r\n\r\n  // }\r\n\r\n  function mintPixel(uint256 token_id, string memory color) public returns (uint256) { //where tokenURI is json file containing, x coord, y coord, owner, price,\r\n    \r\n    //####### this might not even be needed due to the ERC721 contract already handling this ############\r\n    //function mintPixel(uint256 token_id, address user, string memory tokenURI) public returns (uint256) { //where tokenURI is json file containing, x coord, y coord, owner, price,\r\n    //ERC 721 handles minting tokens that already have an owner, through the require()\r\n    //just need to double check that the rest of the code is using that library\r\n    \r\n    require(isValidToken(token_id), \"Invalid token ID\"); \r\n    //validate pixel has not been created before\r\n    //require(ownerOf(token_id) == _writer, \"This token is owned by someone, therefore can't be minted\");\r\n\r\n    //#################### END #############\r\n\r\n    //_pixelIdTracker.increment();  //not needed since pixelID will be handled on web client side\r\n    //uint256 newPixelID = _pixelIdTracker.current();\r\n    \r\n    _mint(msg.sender, token_id);\r\n    colorArray[token_id] = color;\r\n    //_setTokenURI(token_id, tokenURI);\r\n    \r\n    //updatePixelMapping() //file read by website for quick load\r\n\r\n    return token_id;\r\n  }\r\n\r\n  function updatePixelMapping(uint256 token_id, string memory color) public returns (uint256) {\r\n    require(isValidToken(token_id), \"Invalid token ID\"); \r\n    require(ownerOf(token_id) == msg.sender, \"You do not own this pixel\"); \r\n\r\n    //verify color is valid? any security risk?\r\n\r\n    colorArray[token_id] = color; //update color on blockchain\r\n    //update token URI? probably\r\n\r\n  }\r\n\r\n  function readColor(uint256 token_id) public view returns(string memory){\r\n    return colorArray[token_id];\r\n  }\r\n\r\n  // function bulkBuyPixels(uint token_id, uint x, uint y) public {\r\n  //   for(uint i=0; i < x;)\r\n  // }\r\n}\r\n",
                  "sourcePath": "K:/git/MNFTH/src/contracts/MNFTH.sol",
                    "ast": {
    "absolutePath": "/K/git/MNFTH/src/contracts/MNFTH.sol",
      "exportedSymbols": {
      "MNFTH": [
        1592
      ]
    },
    "id": 1593,
      "nodeType": "SourceUnit",
        "nodes": [
          {
            "id": 1456,
            "literals": [
              "solidity",
              "^",
              "0.5",
              ".0"
            ],
            "nodeType": "PragmaDirective",
            "src": "0:23:1"
          },
          {
            "absolutePath": "/K/git/MNFTH/src/contracts/ERC721Full.sol",
            "file": "./ERC721Full.sol",
            "id": 1457,
            "nodeType": "ImportDirective",
            "scope": 1593,
            "sourceUnit": 1455,
            "src": "27:26:1",
            "symbolAliases": [],
            "unitAlias": ""
          },
          {
            "baseContracts": [
              {
                "arguments": null,
                "baseName": {
                  "contractScope": null,
                  "id": 1458,
                  "name": "ERC721Full",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1454,
                  "src": "75:10:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC721Full_$1454",
                    "typeString": "contract ERC721Full"
                  }
                },
                "id": 1459,
                "nodeType": "InheritanceSpecifier",
                "src": "75:10:1"
              }
            ],
            "contractDependencies": [
              9,
              110,
              372,
              930,
              955,
              1288,
              1309,
              1434,
              1454
            ],
            "contractKind": "contract",
            "documentation": null,
            "fullyImplemented": true,
            "id": 1592,
            "linearizedBaseContracts": [
              1592,
              1454,
              1434,
              1309,
              1288,
              955,
              930,
              110,
              372,
              9
            ],
            "name": "MNFTH",
            "nodeType": "ContractDefinition",
            "nodes": [
              {
                "id": 1462,
                "libraryName": {
                  "contractScope": null,
                  "id": 1460,
                  "name": "SafeMath",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 257,
                  "src": "97:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_SafeMath_$257",
                    "typeString": "library SafeMath"
                  }
                },
                "nodeType": "UsingForDirective",
                "src": "91:27:1",
                "typeName": {
                  "id": 1461,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "110:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              {
                "id": 1465,
                "libraryName": {
                  "contractScope": null,
                  "id": 1463,
                  "name": "Counters",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 322,
                  "src": "228:8:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Counters_$322",
                    "typeString": "library Counters"
                  }
                },
                "nodeType": "UsingForDirective",
                "src": "222:36:1",
                "typeName": {
                  "contractScope": null,
                  "id": 1464,
                  "name": "Counters.Counter",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 282,
                  "src": "241:16:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$282_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  }
                }
              },
              {
                "constant": false,
                "id": 1467,
                "name": "_pixelIdTracker",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "262:40:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$282_storage",
                  "typeString": "struct Counters.Counter"
                },
                "typeName": {
                  "contractScope": null,
                  "id": 1466,
                  "name": "Counters.Counter",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 282,
                  "src": "262:16:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$282_storage_ptr",
                    "typeString": "struct Counters.Counter"
                  }
                },
                "value": null,
                "visibility": "private"
              },
              {
                "constant": false,
                "id": 1469,
                "name": "_writer",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "309:22:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 1468,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "309:7:1",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 1473,
                "name": "balances",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "336:46:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "typeName": {
                  "id": 1472,
                  "keyType": {
                    "id": 1470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "345:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "336:28:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueType": {
                    "id": 1471,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "356:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1475,
                "name": "maxId",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "387:22:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1474,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "387:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 1479,
                "name": "colorArray",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "464:45:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                  "typeString": "mapping(uint256 => string)"
                },
                "typeName": {
                  "id": 1478,
                  "keyType": {
                    "id": 1476,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "464:27:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                    "typeString": "mapping(uint256 => string)"
                  },
                  "valueType": {
                    "id": 1477,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "484:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  }
                },
                "value": null,
                "visibility": "public"
              },
              {
                "constant": false,
                "id": 1482,
                "name": "_initialSupply",
                "nodeType": "VariableDeclaration",
                "scope": 1592,
                "src": "516:30:1",
                "stateVariable": true,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 1480,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "516:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": {
                  "argumentTypes": null,
                  "hexValue": "3130303030",
                  "id": 1481,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "541:5:1",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10000_by_1",
                    "typeString": "int_const 10000"
                  },
                  "value": "10000"
                },
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 1498,
                  "nodeType": "Block",
                  "src": "618:337:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1492,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1489,
                          "name": "_writer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1469,
                          "src": "628:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1490,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1607,
                            "src": "638:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "638:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "628:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 1493,
                      "nodeType": "ExpressionStatement",
                      "src": "628:20:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "id": 1494,
                          "name": "maxId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1475,
                          "src": "814:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1495,
                          "name": "_initialSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1482,
                          "src": "822:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "814:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 1497,
                      "nodeType": "ExpressionStatement",
                      "src": "814:22:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 1499,
                "implemented": true,
                "kind": "constructor",
                "modifiers": [
                  {
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "4d696c6c696f6e204e465420486f6d652050616765",
                        "id": 1485,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "577:23:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_6de3a3137151fe952de0a25a11141abaa82e490a5784ead2368557b94137a5e8",
                          "typeString": "literal_string \"Million NFT Home Page\""
                        },
                        "value": "Million NFT Home Page"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d4e465448",
                        "id": 1486,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "602:7:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_ab6d69586f5902d803096deaacf5effee8da684eefe696a3d3deab23ebc6bc96",
                          "typeString": "literal_string \"MNFTH\""
                        },
                        "value": "MNFTH"
                      }
                    ],
                    "id": 1487,
                    "modifierName": {
                      "argumentTypes": null,
                      "id": 1484,
                      "name": "ERC721Full",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1454,
                      "src": "566:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC721Full_$1454_$",
                        "typeString": "type(contract ERC721Full)"
                      }
                    },
                    "nodeType": "ModifierInvocation",
                    "src": "566:44:1"
                  }
                ],
                "name": "",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1483,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "564:2:1"
                },
                "returnParameters": {
                  "id": 1488,
                  "nodeType": "ParameterList",
                  "parameters": [],
                  "src": "618:0:1"
                },
                "scope": 1592,
                "src": "553:402:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 1514,
                  "nodeType": "Block",
                  "src": "1028:56:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 1512,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1508,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1506,
                            "name": "_tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1501,
                            "src": "1044:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 1507,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1056:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1044:13:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1511,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1509,
                            "name": "_tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1501,
                            "src": "1061:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 1510,
                            "name": "maxId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1475,
                            "src": "1073:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1061:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1044:34:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "functionReturnParameters": 1505,
                      "id": 1513,
                      "nodeType": "Return",
                      "src": "1037:41:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 1515,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "isValidToken",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1502,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1501,
                      "name": "_tokenId",
                      "nodeType": "VariableDeclaration",
                      "scope": 1515,
                      "src": "983:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1500,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "983:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "982:18:1"
                },
                "returnParameters": {
                  "id": 1505,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1504,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 1515,
                      "src": "1023:4:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 1503,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1023:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1022:6:1"
                },
                "scope": 1592,
                "src": "961:123:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "internal"
              },
              {
                "body": {
                  "id": 1545,
                  "nodeType": "Block",
                  "src": "1503:1183:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1526,
                                "name": "token_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1517,
                                "src": "2076:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 1525,
                              "name": "isValidToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1515,
                              "src": "2063:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (uint256) view returns (bool)"
                              }
                            },
                            "id": 1527,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2063:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "496e76616c696420746f6b656e204944",
                            "id": 1528,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2087:18:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                              "typeString": "literal_string \"Invalid token ID\""
                            },
                            "value": "Invalid token ID"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                              "typeString": "literal_string \"Invalid token ID\""
                            }
                          ],
                          "id": 1524,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1610,
                            1611
                          ],
                          "referencedDeclaration": 1611,
                          "src": "2055:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2055:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1530,
                      "nodeType": "ExpressionStatement",
                      "src": "2055:51:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 1532,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1607,
                              "src": "2487:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 1533,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2487:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 1534,
                            "name": "token_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1517,
                            "src": "2499:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 1531,
                          "name": "_mint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1095
                          ],
                          "referencedDeclaration": 1095,
                          "src": "2481:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                            "typeString": "function (address,uint256)"
                          }
                        },
                        "id": 1535,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2481:27:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1536,
                      "nodeType": "ExpressionStatement",
                      "src": "2481:27:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1541,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1537,
                            "name": "colorArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1479,
                            "src": "2515:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                              "typeString": "mapping(uint256 => string storage ref)"
                            }
                          },
                          "id": 1539,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1538,
                            "name": "token_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1517,
                            "src": "2526:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2515:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1540,
                          "name": "color",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1519,
                          "src": "2538:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "2515:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 1542,
                      "nodeType": "ExpressionStatement",
                      "src": "2515:28:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1543,
                        "name": "token_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1517,
                        "src": "2672:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "functionReturnParameters": 1523,
                      "id": 1544,
                      "nodeType": "Return",
                      "src": "2665:15:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 1546,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "mintPixel",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1520,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1517,
                      "name": "token_id",
                      "nodeType": "VariableDeclaration",
                      "scope": 1546,
                      "src": "1439:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1516,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1439:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1519,
                      "name": "color",
                      "nodeType": "VariableDeclaration",
                      "scope": 1546,
                      "src": "1457:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 1518,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1457:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1438:39:1"
                },
                "returnParameters": {
                  "id": 1523,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1522,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 1546,
                      "src": "1494:7:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1521,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1494:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "1493:9:1"
                },
                "scope": 1592,
                "src": "1420:1266:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 1578,
                  "nodeType": "Block",
                  "src": "2784:295:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 1557,
                                "name": "token_id",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1548,
                                "src": "2812:8:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 1556,
                              "name": "isValidToken",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1515,
                              "src": "2799:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (uint256) view returns (bool)"
                              }
                            },
                            "id": 1558,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2799:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "496e76616c696420746f6b656e204944",
                            "id": 1559,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2823:18:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                              "typeString": "literal_string \"Invalid token ID\""
                            },
                            "value": "Invalid token ID"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                              "typeString": "literal_string \"Invalid token ID\""
                            }
                          ],
                          "id": 1555,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1610,
                            1611
                          ],
                          "referencedDeclaration": 1611,
                          "src": "2791:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1560,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2791:51:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1561,
                      "nodeType": "ExpressionStatement",
                      "src": "2791:51:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 1568,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 1564,
                                  "name": "token_id",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1548,
                                  "src": "2866:8:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "id": 1563,
                                "name": "ownerOf",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [
                                  466
                                ],
                                "referencedDeclaration": 466,
                                "src": "2858:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_address_$",
                                  "typeString": "function (uint256) view returns (address)"
                                }
                              },
                              "id": 1565,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2858:17:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 1566,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1607,
                                "src": "2879:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 1567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2879:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "2858:31:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "596f7520646f206e6f74206f776e207468697320706978656c",
                            "id": 1569,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2891:27:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_131990d2c34e65ff5153a088fac781dfe8206282fb33937e9f5dc196a813ecec",
                              "typeString": "literal_string \"You do not own this pixel\""
                            },
                            "value": "You do not own this pixel"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            {
                              "typeIdentifier": "t_stringliteral_131990d2c34e65ff5153a088fac781dfe8206282fb33937e9f5dc196a813ecec",
                              "typeString": "literal_string \"You do not own this pixel\""
                            }
                          ],
                          "id": 1562,
                          "name": "require",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [
                            1610,
                            1611
                          ],
                          "referencedDeclaration": 1611,
                          "src": "2850:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                            "typeString": "function (bool,string memory) pure"
                          }
                        },
                        "id": 1570,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2850:69:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_tuple$__$",
                          "typeString": "tuple()"
                        }
                      },
                      "id": 1571,
                      "nodeType": "ExpressionStatement",
                      "src": "2850:69:1"
                    },
                    {
                      "expression": {
                        "argumentTypes": null,
                        "id": 1576,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 1572,
                            "name": "colorArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1479,
                            "src": "2980:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                              "typeString": "mapping(uint256 => string storage ref)"
                            }
                          },
                          "id": 1574,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 1573,
                            "name": "token_id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1548,
                            "src": "2991:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": true,
                          "nodeType": "IndexAccess",
                          "src": "2980:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string storage ref"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "argumentTypes": null,
                          "id": 1575,
                          "name": "color",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1550,
                          "src": "3003:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "src": "2980:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "id": 1577,
                      "nodeType": "ExpressionStatement",
                      "src": "2980:28:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 1579,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "updatePixelMapping",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1551,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1548,
                      "name": "token_id",
                      "nodeType": "VariableDeclaration",
                      "scope": 1579,
                      "src": "2720:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1547,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2720:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 1550,
                      "name": "color",
                      "nodeType": "VariableDeclaration",
                      "scope": 1579,
                      "src": "2738:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 1549,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2738:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2719:39:1"
                },
                "returnParameters": {
                  "id": 1554,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1553,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 1579,
                      "src": "2775:7:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1552,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2775:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "2774:9:1"
                },
                "scope": 1592,
                "src": "2692:387:1",
                "stateMutability": "nonpayable",
                "superFunction": null,
                "visibility": "public"
              },
              {
                "body": {
                  "id": 1590,
                  "nodeType": "Block",
                  "src": "3156:40:1",
                  "statements": [
                    {
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1586,
                          "name": "colorArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1479,
                          "src": "3170:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string storage ref)"
                          }
                        },
                        "id": 1588,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1587,
                          "name": "token_id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1581,
                          "src": "3181:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3170:20:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "functionReturnParameters": 1585,
                      "id": 1589,
                      "nodeType": "Return",
                      "src": "3163:27:1"
                    }
                  ]
                },
                "documentation": null,
                "id": 1591,
                "implemented": true,
                "kind": "function",
                "modifiers": [],
                "name": "readColor",
                "nodeType": "FunctionDefinition",
                "parameters": {
                  "id": 1582,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1581,
                      "name": "token_id",
                      "nodeType": "VariableDeclaration",
                      "scope": 1591,
                      "src": "3104:16:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1580,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3104:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3103:18:1"
                },
                "returnParameters": {
                  "id": 1585,
                  "nodeType": "ParameterList",
                  "parameters": [
                    {
                      "constant": false,
                      "id": 1584,
                      "name": "",
                      "nodeType": "VariableDeclaration",
                      "scope": 1591,
                      "src": "3142:13:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 1583,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "3142:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "src": "3141:15:1"
                },
                "scope": 1592,
                "src": "3085:111:1",
                "stateMutability": "view",
                "superFunction": null,
                "visibility": "public"
              }
            ],
            "scope": 1593,
            "src": "57:3251:1"
          }
        ],
          "src": "0:3310:1"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "/K/git/MNFTH/src/contracts/MNFTH.sol",
        "exportedSymbols": {
        "MNFTH": [
          1592
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.5",
            ".0"
          ]
        },
        "id": 1456,
        "name": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "attributes": {
          "SourceUnit": 1455,
          "absolutePath": "/K/git/MNFTH/src/contracts/ERC721Full.sol",
          "file": "./ERC721Full.sol",
          "scope": 1593,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1457,
        "name": "ImportDirective",
        "src": "27:26:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            9,
            110,
            372,
            930,
            955,
            1288,
            1309,
            1434,
            1454
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1592,
            1454,
            1434,
            1309,
            1288,
            955,
            930,
            110,
            372,
            9
          ],
          "name": "MNFTH",
          "scope": 1593
        },
        "children": [
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC721Full",
                  "referencedDeclaration": 1454,
                  "type": "contract ERC721Full"
                },
                "id": 1458,
                "name": "UserDefinedTypeName",
                "src": "75:10:1"
              }
            ],
            "id": 1459,
            "name": "InheritanceSpecifier",
            "src": "75:10:1"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 257,
                  "type": "library SafeMath"
                },
                "id": 1460,
                "name": "UserDefinedTypeName",
                "src": "97:8:1"
              },
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 1461,
                "name": "ElementaryTypeName",
                "src": "110:7:1"
              }
            ],
            "id": 1462,
            "name": "UsingForDirective",
            "src": "91:27:1"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Counters",
                  "referencedDeclaration": 322,
                  "type": "library Counters"
                },
                "id": 1463,
                "name": "UserDefinedTypeName",
                "src": "228:8:1"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Counters.Counter",
                  "referencedDeclaration": 282,
                  "type": "struct Counters.Counter"
                },
                "id": 1464,
                "name": "UserDefinedTypeName",
                "src": "241:16:1"
              }
            ],
            "id": 1465,
            "name": "UsingForDirective",
            "src": "222:36:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_pixelIdTracker",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct Counters.Counter",
              "value": null,
              "visibility": "private"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Counters.Counter",
                  "referencedDeclaration": 282,
                  "type": "struct Counters.Counter"
                },
                "id": 1466,
                "name": "UserDefinedTypeName",
                "src": "262:16:1"
              }
            ],
            "id": 1467,
            "name": "VariableDeclaration",
            "src": "262:40:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_writer",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "stateMutability": "nonpayable",
                  "type": "address"
                },
                "id": 1468,
                "name": "ElementaryTypeName",
                "src": "309:7:1"
              }
            ],
            "id": 1469,
            "name": "VariableDeclaration",
            "src": "309:22:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "balances",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1470,
                    "name": "ElementaryTypeName",
                    "src": "345:7:1"
                  },
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 1471,
                    "name": "ElementaryTypeName",
                    "src": "356:7:1"
                  }
                ],
                "id": 1472,
                "name": "Mapping",
                "src": "336:28:1"
              }
            ],
            "id": 1473,
            "name": "VariableDeclaration",
            "src": "336:46:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "maxId",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 1474,
                "name": "ElementaryTypeName",
                "src": "387:7:1"
              }
            ],
            "id": 1475,
            "name": "VariableDeclaration",
            "src": "387:22:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "colorArray",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => string)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => string)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint256",
                      "type": "uint256"
                    },
                    "id": 1476,
                    "name": "ElementaryTypeName",
                    "src": "473:7:1"
                  },
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string"
                    },
                    "id": 1477,
                    "name": "ElementaryTypeName",
                    "src": "484:6:1"
                  }
                ],
                "id": 1478,
                "name": "Mapping",
                "src": "464:27:1"
              }
            ],
            "id": 1479,
            "name": "VariableDeclaration",
            "src": "464:45:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "_initialSupply",
              "scope": 1592,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 1480,
                "name": "ElementaryTypeName",
                "src": "516:7:1"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3130303030",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 10000",
                  "value": "10000"
                },
                "id": 1481,
                "name": "Literal",
                "src": "541:5:1"
              }
            ],
            "id": 1482,
            "name": "VariableDeclaration",
            "src": "516:30:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "scope": 1592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1483,
                "name": "ParameterList",
                "src": "564:2:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1488,
                "name": "ParameterList",
                "src": "618:0:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1454,
                      "type": "type(contract ERC721Full)",
                      "value": "ERC721Full"
                    },
                    "id": 1484,
                    "name": "Identifier",
                    "src": "566:10:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4d696c6c696f6e204e465420486f6d652050616765",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"Million NFT Home Page\"",
                      "value": "Million NFT Home Page"
                    },
                    "id": 1485,
                    "name": "Literal",
                    "src": "577:23:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4d4e465448",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"MNFTH\"",
                      "value": "MNFTH"
                    },
                    "id": 1486,
                    "name": "Literal",
                    "src": "602:7:1"
                  }
                ],
                "id": 1487,
                "name": "ModifierInvocation",
                "src": "566:44:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1469,
                              "type": "address",
                              "value": "_writer"
                            },
                            "id": 1489,
                            "name": "Identifier",
                            "src": "628:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1607,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1490,
                                "name": "Identifier",
                                "src": "638:3:1"
                              }
                            ],
                            "id": 1491,
                            "name": "MemberAccess",
                            "src": "638:10:1"
                          }
                        ],
                        "id": 1492,
                        "name": "Assignment",
                        "src": "628:20:1"
                      }
                    ],
                    "id": 1493,
                    "name": "ExpressionStatement",
                    "src": "628:20:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1475,
                              "type": "uint256",
                              "value": "maxId"
                            },
                            "id": 1494,
                            "name": "Identifier",
                            "src": "814:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1482,
                              "type": "uint256",
                              "value": "_initialSupply"
                            },
                            "id": 1495,
                            "name": "Identifier",
                            "src": "822:14:1"
                          }
                        ],
                        "id": 1496,
                        "name": "Assignment",
                        "src": "814:22:1"
                      }
                    ],
                    "id": 1497,
                    "name": "ExpressionStatement",
                    "src": "814:22:1"
                  }
                ],
                "id": 1498,
                "name": "Block",
                "src": "618:337:1"
              }
            ],
            "id": 1499,
            "name": "FunctionDefinition",
            "src": "553:402:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "isValidToken",
              "scope": 1592,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 1515,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1500,
                        "name": "ElementaryTypeName",
                        "src": "983:7:1"
                      }
                    ],
                    "id": 1501,
                    "name": "VariableDeclaration",
                    "src": "983:16:1"
                  }
                ],
                "id": 1502,
                "name": "ParameterList",
                "src": "982:18:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1515,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 1503,
                        "name": "ElementaryTypeName",
                        "src": "1023:4:1"
                      }
                    ],
                    "id": 1504,
                    "name": "VariableDeclaration",
                    "src": "1023:4:1"
                  }
                ],
                "id": 1505,
                "name": "ParameterList",
                "src": "1022:6:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1505
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1501,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 1506,
                                "name": "Identifier",
                                "src": "1044:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 1507,
                                "name": "Literal",
                                "src": "1056:1:1"
                              }
                            ],
                            "id": 1508,
                            "name": "BinaryOperation",
                            "src": "1044:13:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1501,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 1509,
                                "name": "Identifier",
                                "src": "1061:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1475,
                                  "type": "uint256",
                                  "value": "maxId"
                                },
                                "id": 1510,
                                "name": "Identifier",
                                "src": "1073:5:1"
                              }
                            ],
                            "id": 1511,
                            "name": "BinaryOperation",
                            "src": "1061:17:1"
                          }
                        ],
                        "id": 1512,
                        "name": "BinaryOperation",
                        "src": "1044:34:1"
                      }
                    ],
                    "id": 1513,
                    "name": "Return",
                    "src": "1037:41:1"
                  }
                ],
                "id": 1514,
                "name": "Block",
                "src": "1028:56:1"
              }
            ],
            "id": 1515,
            "name": "FunctionDefinition",
            "src": "961:123:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mintPixel",
              "scope": 1592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token_id",
                      "scope": 1546,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1516,
                        "name": "ElementaryTypeName",
                        "src": "1439:7:1"
                      }
                    ],
                    "id": 1517,
                    "name": "VariableDeclaration",
                    "src": "1439:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "color",
                      "scope": 1546,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1518,
                        "name": "ElementaryTypeName",
                        "src": "1457:6:1"
                      }
                    ],
                    "id": 1519,
                    "name": "VariableDeclaration",
                    "src": "1457:19:1"
                  }
                ],
                "id": 1520,
                "name": "ParameterList",
                "src": "1438:39:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1546,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1521,
                        "name": "ElementaryTypeName",
                        "src": "1494:7:1"
                      }
                    ],
                    "id": 1522,
                    "name": "VariableDeclaration",
                    "src": "1494:7:1"
                  }
                ],
                "id": 1523,
                "name": "ParameterList",
                "src": "1493:9:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                                  "typeString": "literal_string \"Invalid token ID\""
                                }
                              ],
                              "overloadedDeclarations": [
                                1610,
                                1611
                              ],
                              "referencedDeclaration": 1611,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 1524,
                            "name": "Identifier",
                            "src": "2055:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1515,
                                  "type": "function (uint256) view returns (bool)",
                                  "value": "isValidToken"
                                },
                                "id": 1525,
                                "name": "Identifier",
                                "src": "2063:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1517,
                                  "type": "uint256",
                                  "value": "token_id"
                                },
                                "id": 1526,
                                "name": "Identifier",
                                "src": "2076:8:1"
                              }
                            ],
                            "id": 1527,
                            "name": "FunctionCall",
                            "src": "2063:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "496e76616c696420746f6b656e204944",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Invalid token ID\"",
                              "value": "Invalid token ID"
                            },
                            "id": 1528,
                            "name": "Literal",
                            "src": "2087:18:1"
                          }
                        ],
                        "id": 1529,
                        "name": "FunctionCall",
                        "src": "2055:51:1"
                      }
                    ],
                    "id": 1530,
                    "name": "ExpressionStatement",
                    "src": "2055:51:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1095
                              ],
                              "referencedDeclaration": 1095,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 1531,
                            "name": "Identifier",
                            "src": "2481:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address payable"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1607,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 1532,
                                "name": "Identifier",
                                "src": "2487:3:1"
                              }
                            ],
                            "id": 1533,
                            "name": "MemberAccess",
                            "src": "2487:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1517,
                              "type": "uint256",
                              "value": "token_id"
                            },
                            "id": 1534,
                            "name": "Identifier",
                            "src": "2499:8:1"
                          }
                        ],
                        "id": 1535,
                        "name": "FunctionCall",
                        "src": "2481:27:1"
                      }
                    ],
                    "id": 1536,
                    "name": "ExpressionStatement",
                    "src": "2481:27:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1479,
                                  "type": "mapping(uint256 => string storage ref)",
                                  "value": "colorArray"
                                },
                                "id": 1537,
                                "name": "Identifier",
                                "src": "2515:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1517,
                                  "type": "uint256",
                                  "value": "token_id"
                                },
                                "id": 1538,
                                "name": "Identifier",
                                "src": "2526:8:1"
                              }
                            ],
                            "id": 1539,
                            "name": "IndexAccess",
                            "src": "2515:20:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1519,
                              "type": "string memory",
                              "value": "color"
                            },
                            "id": 1540,
                            "name": "Identifier",
                            "src": "2538:5:1"
                          }
                        ],
                        "id": 1541,
                        "name": "Assignment",
                        "src": "2515:28:1"
                      }
                    ],
                    "id": 1542,
                    "name": "ExpressionStatement",
                    "src": "2515:28:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1523
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1517,
                          "type": "uint256",
                          "value": "token_id"
                        },
                        "id": 1543,
                        "name": "Identifier",
                        "src": "2672:8:1"
                      }
                    ],
                    "id": 1544,
                    "name": "Return",
                    "src": "2665:15:1"
                  }
                ],
                "id": 1545,
                "name": "Block",
                "src": "1503:1183:1"
              }
            ],
            "id": 1546,
            "name": "FunctionDefinition",
            "src": "1420:1266:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "updatePixelMapping",
              "scope": 1592,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token_id",
                      "scope": 1579,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1547,
                        "name": "ElementaryTypeName",
                        "src": "2720:7:1"
                      }
                    ],
                    "id": 1548,
                    "name": "VariableDeclaration",
                    "src": "2720:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "color",
                      "scope": 1579,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1549,
                        "name": "ElementaryTypeName",
                        "src": "2738:6:1"
                      }
                    ],
                    "id": 1550,
                    "name": "VariableDeclaration",
                    "src": "2738:19:1"
                  }
                ],
                "id": 1551,
                "name": "ParameterList",
                "src": "2719:39:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1579,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1552,
                        "name": "ElementaryTypeName",
                        "src": "2775:7:1"
                      }
                    ],
                    "id": 1553,
                    "name": "VariableDeclaration",
                    "src": "2775:7:1"
                  }
                ],
                "id": 1554,
                "name": "ParameterList",
                "src": "2774:9:1"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_b44e5a2e76d616f71f124d91f8560c46215c55a45ba6a1b6e492edf2295dcc48",
                                  "typeString": "literal_string \"Invalid token ID\""
                                }
                              ],
                              "overloadedDeclarations": [
                                1610,
                                1611
                              ],
                              "referencedDeclaration": 1611,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 1555,
                            "name": "Identifier",
                            "src": "2791:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1515,
                                  "type": "function (uint256) view returns (bool)",
                                  "value": "isValidToken"
                                },
                                "id": 1556,
                                "name": "Identifier",
                                "src": "2799:12:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1548,
                                  "type": "uint256",
                                  "value": "token_id"
                                },
                                "id": 1557,
                                "name": "Identifier",
                                "src": "2812:8:1"
                              }
                            ],
                            "id": 1558,
                            "name": "FunctionCall",
                            "src": "2799:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "496e76616c696420746f6b656e204944",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Invalid token ID\"",
                              "value": "Invalid token ID"
                            },
                            "id": 1559,
                            "name": "Literal",
                            "src": "2823:18:1"
                          }
                        ],
                        "id": 1560,
                        "name": "FunctionCall",
                        "src": "2791:51:1"
                      }
                    ],
                    "id": 1561,
                    "name": "ExpressionStatement",
                    "src": "2791:51:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_131990d2c34e65ff5153a088fac781dfe8206282fb33937e9f5dc196a813ecec",
                                  "typeString": "literal_string \"You do not own this pixel\""
                                }
                              ],
                              "overloadedDeclarations": [
                                1610,
                                1611
                              ],
                              "referencedDeclaration": 1611,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 1562,
                            "name": "Identifier",
                            "src": "2850:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        466
                                      ],
                                      "referencedDeclaration": 466,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 1563,
                                    "name": "Identifier",
                                    "src": "2858:7:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1548,
                                      "type": "uint256",
                                      "value": "token_id"
                                    },
                                    "id": 1564,
                                    "name": "Identifier",
                                    "src": "2866:8:1"
                                  }
                                ],
                                "id": 1565,
                                "name": "FunctionCall",
                                "src": "2858:17:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address payable"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1607,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1566,
                                    "name": "Identifier",
                                    "src": "2879:3:1"
                                  }
                                ],
                                "id": 1567,
                                "name": "MemberAccess",
                                "src": "2879:10:1"
                              }
                            ],
                            "id": 1568,
                            "name": "BinaryOperation",
                            "src": "2858:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "596f7520646f206e6f74206f776e207468697320706978656c",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"You do not own this pixel\"",
                              "value": "You do not own this pixel"
                            },
                            "id": 1569,
                            "name": "Literal",
                            "src": "2891:27:1"
                          }
                        ],
                        "id": 1570,
                        "name": "FunctionCall",
                        "src": "2850:69:1"
                      }
                    ],
                    "id": 1571,
                    "name": "ExpressionStatement",
                    "src": "2850:69:1"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "string storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1479,
                                  "type": "mapping(uint256 => string storage ref)",
                                  "value": "colorArray"
                                },
                                "id": 1572,
                                "name": "Identifier",
                                "src": "2980:10:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1548,
                                  "type": "uint256",
                                  "value": "token_id"
                                },
                                "id": 1573,
                                "name": "Identifier",
                                "src": "2991:8:1"
                              }
                            ],
                            "id": 1574,
                            "name": "IndexAccess",
                            "src": "2980:20:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1550,
                              "type": "string memory",
                              "value": "color"
                            },
                            "id": 1575,
                            "name": "Identifier",
                            "src": "3003:5:1"
                          }
                        ],
                        "id": 1576,
                        "name": "Assignment",
                        "src": "2980:28:1"
                      }
                    ],
                    "id": 1577,
                    "name": "ExpressionStatement",
                    "src": "2980:28:1"
                  }
                ],
                "id": 1578,
                "name": "Block",
                "src": "2784:295:1"
              }
            ],
            "id": 1579,
            "name": "FunctionDefinition",
            "src": "2692:387:1"
          },
          {
            "attributes": {
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "readColor",
              "scope": 1592,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token_id",
                      "scope": 1591,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 1580,
                        "name": "ElementaryTypeName",
                        "src": "3104:7:1"
                      }
                    ],
                    "id": 1581,
                    "name": "VariableDeclaration",
                    "src": "3104:16:1"
                  }
                ],
                "id": 1582,
                "name": "ParameterList",
                "src": "3103:18:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1591,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 1583,
                        "name": "ElementaryTypeName",
                        "src": "3142:6:1"
                      }
                    ],
                    "id": 1584,
                    "name": "VariableDeclaration",
                    "src": "3142:13:1"
                  }
                ],
                "id": 1585,
                "name": "ParameterList",
                "src": "3141:15:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1585
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1479,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "colorArray"
                            },
                            "id": 1586,
                            "name": "Identifier",
                            "src": "3170:10:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1581,
                              "type": "uint256",
                              "value": "token_id"
                            },
                            "id": 1587,
                            "name": "Identifier",
                            "src": "3181:8:1"
                          }
                        ],
                        "id": 1588,
                        "name": "IndexAccess",
                        "src": "3170:20:1"
                      }
                    ],
                    "id": 1589,
                    "name": "Return",
                    "src": "3163:27:1"
                  }
                ],
                "id": 1590,
                "name": "Block",
                "src": "3156:40:1"
              }
            ],
            "id": 1591,
            "name": "FunctionDefinition",
            "src": "3085:111:1"
          }
        ],
        "id": 1592,
        "name": "ContractDefinition",
        "src": "57:3251:1"
      }
    ],
      "id": 1593,
        "name": "SourceUnit",
          "src": "0:3310:1"
  },
  "compiler": {
    "name": "solc",
      "version": "0.5.16+commit.9c3226ce.Emscripten.clang"
  },
  "networks": {
    "97": {
      "events": { },
      "links": { },
      "address": "0x79234274F1AD22832f409C29aca867eAeF5B5BF8",
        "transactionHash": "0xc3713f8a20bf2cfa4d6e70608281d0b59f001ea39d5d92e43985e076ff3a528c"
    },
    "5777": {
      "events": { },
      "links": { },
      "address": "0x79234274F1AD22832f409C29aca867eAeF5B5BF8",
        "transactionHash": "0xdabca6a76a07a039ee7d1dec1230139dcd4fbdcfc35ecff41ec4737a0434ab33"
    }
  },
  "schemaVersion": "3.3.4",
    "updatedAt": "2021-04-24T03:18:51.450Z",
      "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
          "params": {
          "to": "address to be approved for the given token ID",
            "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
          "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
          "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner.",
          "params": {
          "operator": "operator address which you want to query the approval of",
            "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "name()": {
        "details": "Gets the token name.",
          "return": "string representing the token name"
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID.",
          "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "address currently marked as the owner of the given token ID"
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
          "params": {
          "from": "current owner of the token",
            "to": "address to receive the ownership of the given token ID",
              "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg.sender to be the owner, approved, or operator",
          "params": {
          "_data": "bytes data to send along with a safe transfer check",
            "from": "current owner of the token",
              "to": "address to receive the ownership of the given token ID",
                "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf.",
          "params": {
          "approved": "representing the status of the approval to be set",
            "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "See `IERC165.supportsInterface`.      * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "Gets the token symbol.",
          "return": "string representing the token symbol"
      },
      "tokenByIndex(uint256)": {
        "details": "Gets the token ID at a given index of all the tokens in this contract Reverts if the index is greater or equal to the total number of tokens.",
          "params": {
          "index": "uint256 representing the index to be accessed of the tokens list"
        },
        "return": "uint256 token ID at the given index of the tokens list"
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "Gets the token ID at a given index of the tokens list of the requested owner.",
          "params": {
          "index": "uint256 representing the index to be accessed of the requested tokens list",
            "owner": "address owning the tokens list to be accessed"
        },
        "return": "uint256 token ID at the given index of the tokens list owned by the requested address"
      },
      "tokenURI(uint256)": {
        "details": "Returns an URI for a given token ID. Throws if the token ID does not exist. May return an empty string.",
          "params": {
          "tokenId": "uint256 ID of the token to query"
        }
      },
      "totalSupply()": {
        "details": "Gets the total amount of tokens stored by the contract.",
          "return": "uint256 representing the total amount of tokens"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address. Usage of this method is discouraged, use `safeTransferFrom` whenever possible. Requires the msg.sender to be the owner, approved, or operator.",
          "params": {
          "from": "current owner of the token",
            "to": "address to receive the ownership of the given token ID",
              "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": { }
  }
}
