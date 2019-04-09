var tokenOutput={
  "contracts" : 
  {
    "test/FixedSupplyToken.sol:ApproveAndCallFallback" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"receiveApproval\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
      "bin" : ""
    },
    "test/FixedSupplyToken.sol:ERC20Interface" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
      "bin" : ""
    },
    "test/FixedSupplyToken.sol:FixedSupplyToken" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"recoverTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"symbol\",\"type\":\"string\"},{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"decimals\",\"type\":\"uint8\"},{\"name\":\"fixedSupply\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
      "bin" : "60806040523480156200001157600080fd5b5060405162000f4638038062000f46833981018060405260808110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b505060208083015160409093015191945091925090620000f690339062000c44620001a2821b17901c565b83516200010b906002906020870190620001e2565b50825162000121906003906020860190620001e2565b506004805460ff191660ff8416179055600581905560008054610100908190046001600160a01b03908116835260066020908152604080852086905584548151878152915194900490921693927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050505062000287565b60005460ff1615620001b357600080fd5b6000805460ff196001600160a01b0390931661010002610100600160a81b031990911617919091166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200022557805160ff191683800117855562000255565b8280016001018555821562000255579182015b828111156200025557825182559160200191906001019062000238565b506200026392915062000267565b5090565b6200028491905b808211156200026357600081556001016200026e565b90565b610caf80620002976000396000f3fe6080604052600436106100e85760003560e01c806379ba50971161008a578063cae9ca5111610059578063cae9ca511461035b578063d4ee1d9014610423578063dd62ed3e14610438578063f2fde38b14610473576100e8565b806379ba5097146102c75780638da5cb5b146102dc57806395d89b411461030d578063a9059cbb14610322576100e8565b806318160ddd116100c657806318160ddd146101ff57806323b872dd14610226578063313ce5671461026957806370a0823114610294576100e8565b8063069c9fae146100ed57806306fdde0314610128578063095ea7b3146101b2575b600080fd5b3480156100f957600080fd5b506101266004803603604081101561011057600080fd5b506001600160a01b0381351690602001356104a6565b005b34801561013457600080fd5b5061013d61063f565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017757818101518382015260200161015f565b50505050905090810190601f1680156101a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101be57600080fd5b506101eb600480360360408110156101d557600080fd5b506001600160a01b0381351690602001356106d5565b604080519115158252519081900360200190f35b34801561020b57600080fd5b5061021461073c565b60408051918252519081900360200190f35b34801561023257600080fd5b506101eb6004803603606081101561024957600080fd5b506001600160a01b0381358116916020810135909116906040013561077f565b34801561027557600080fd5b5061027e61088a565b6040805160ff9092168252519081900360200190f35b3480156102a057600080fd5b50610214600480360360208110156102b757600080fd5b50356001600160a01b0316610893565b3480156102d357600080fd5b506101266108ae565b3480156102e857600080fd5b506102f161093a565b604080516001600160a01b039092168252519081900360200190f35b34801561031957600080fd5b5061013d61094e565b34801561032e57600080fd5b506101eb6004803603604081101561034557600080fd5b506001600160a01b0381351690602001356109ac565b34801561036757600080fd5b506101eb6004803603606081101561037e57600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103ae57600080fd5b8201836020820111156103c057600080fd5b803590602001918460018302840111640100000000831117156103e257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a5c945050505050565b34801561042f57600080fd5b506102f1610ba7565b34801561044457600080fd5b506102146004803603604081101561045b57600080fd5b506001600160a01b0381358116916020013516610bb6565b34801561047f57600080fd5b506101266004803603602081101561049657600080fd5b50356001600160a01b0316610be1565b60005461010090046001600160a01b031633146104c257600080fd5b6001600160a01b0382166105215760005461010090046001600160a01b03166108fc82156104f057826104f3565b30315b6040518115909202916000818181858888f1935050505015801561051b573d6000803e3d6000fd5b5061063b565b6000546001600160a01b038084169163a9059cbb9161010090910416831561054957836105bf565b60408051600160e01b6370a0823102815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b15801561059257600080fd5b505afa1580156105a6573d6000803e3d6000fd5b505050506040513d60208110156105bc57600080fd5b50515b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561060e57600080fd5b505af1158015610622573d6000803e3d6000fd5b505050506040513d602081101561063857600080fd5b50505b5050565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106cb5780601f106106a0576101008083540402835291602001916106cb565b820191906000526020600020905b8154815290600101906020018083116106ae57829003601f168201915b5050505050905090565b3360008181526007602090815260408083206001600160a01b038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a35060015b92915050565b600080805260066020527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f85460055461077a9163ffffffff610c1f16565b905090565b6001600160a01b0383166000908152600660205260408120546107a8908363ffffffff610c1f16565b6001600160a01b03851660009081526006602090815260408083209390935560078152828220338352905220546107e5908363ffffffff610c1f16565b6001600160a01b038086166000908152600760209081526040808320338452825280832094909455918616815260069091522054610829908363ffffffff610c3416565b6001600160a01b0380851660008181526006602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a35060019392505050565b60045460ff1690565b6001600160a01b031660009081526006602052604090205490565b6001546001600160a01b031633146108c557600080fd5b600154600080546040516001600160a01b0393841693610100909204909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001805460008054610100600160a81b0319166101006001600160a01b038416021790556001600160a01b0319169055565b60005461010090046001600160a01b031681565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156106cb5780601f106106a0576101008083540402835291602001916106cb565b336000908152600660205260408120546109cc908363ffffffff610c1f16565b33600090815260066020526040808220929092556001600160a01b038516815220546109fe908363ffffffff610c3416565b6001600160a01b0384166000818152600660209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b3360008181526007602090815260408083206001600160a01b038816808552908352818420879055815187815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a3604051600160e01b638f4ffcb102815233600482018181526024830186905230604484018190526080606485019081528651608486015286516001600160a01b038a1695638f4ffcb195948a94938a939192909160a490910190602085019080838360005b83811015610b36578181015183820152602001610b1e565b50505050905090810190601f168015610b635780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610b8557600080fd5b505af1158015610b99573d6000803e3d6000fd5b506001979650505050505050565b6001546001600160a01b031681565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205490565b60005461010090046001600160a01b03163314610bfd57600080fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600082821115610c2e57600080fd5b50900390565b8181018281101561073657600080fd5b60005460ff1615610c5457600080fd5b6000805460ff196001600160a01b0390931661010002610100600160a81b03199091161791909116600117905556fea165627a7a72305820f2b5ffbbdf74bfe0e61eb6f9bb04e8a058032c03ffc3de51f924605dbfcac9bb0029"
    },
    "test/FixedSupplyToken.sol:Owned" : 
    {
      "abi" : "[{\"constant\":false,\"inputs\":[{\"name\":\"token\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"recoverTokens\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"acceptOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"newOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"}]",
      "bin" : "608060405234801561001057600080fd5b50610396806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063069c9fae1461005c57806379ba50971461008a5780638da5cb5b14610092578063d4ee1d90146100b6578063f2fde38b146100be575b600080fd5b6100886004803603604081101561007257600080fd5b506001600160a01b0381351690602001356100e4565b005b61008861027d565b61009a610309565b604080516001600160a01b039092168252519081900360200190f35b61009a61031d565b610088600480360360208110156100d457600080fd5b50356001600160a01b031661032c565b60005461010090046001600160a01b0316331461010057600080fd5b6001600160a01b03821661015f5760005461010090046001600160a01b03166108fc821561012e5782610131565b30315b6040518115909202916000818181858888f19350505050158015610159573d6000803e3d6000fd5b50610279565b6000546001600160a01b038084169163a9059cbb9161010090910416831561018757836101fd565b60408051600160e01b6370a0823102815230600482015290516001600160a01b038716916370a08231916024808301926020929190829003018186803b1580156101d057600080fd5b505afa1580156101e4573d6000803e3d6000fd5b505050506040513d60208110156101fa57600080fd5b50515b6040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561024c57600080fd5b505af1158015610260573d6000803e3d6000fd5b505050506040513d602081101561027657600080fd5b50505b5050565b6001546001600160a01b0316331461029457600080fd5b600154600080546040516001600160a01b0393841693610100909204909116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36001805460008054610100600160a81b0319166101006001600160a01b038416021790556001600160a01b0319169055565b60005461010090046001600160a01b031681565b6001546001600160a01b031681565b60005461010090046001600160a01b0316331461034857600080fd5b600180546001600160a01b0319166001600160a01b039290921691909117905556fea165627a7a72305820b5f203f7d34fc2c83ceb3db833091a1ef51ead174fca7f12960d6b0af676b88e0029"
    },
    "test/FixedSupplyToken.sol:SafeMath" : 
    {
      "abi" : "[]",
      "bin" : "604c6023600b82828239805160001a607314601657fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea165627a7a7230582006f60519bc4dfc02ddd387e2cb5218631fcca0c9fcc26494401010aedd15e1270029"
    },
    "test/FixedSupplyToken.sol:TokenInterface" : 
    {
      "abi" : "[{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"from\",\"type\":\"address\"},{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"name\":\"balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"to\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"spender\",\"type\":\"address\"},{\"name\":\"tokens\",\"type\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"approveAndCall\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"tokenOwner\",\"type\":\"address\"},{\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"name\":\"remaining\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"tokenOwner\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"tokens\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"}]",
      "bin" : ""
    }
  },
  "version" : "0.5.7+commit.6da8b019.Darwin.appleclang"
};