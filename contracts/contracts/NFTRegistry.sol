// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import {DataTypes} from "./types/DataTypes.sol";
import {ClaimableNFT} from "./ClaimableNFT.sol";

contract NFTRegistry {
    mapping(address => DataTypes.NFTClaim) claimableNFT;

    function claim() public {
        require(claimableNFT[msg.sender].tokenId > 0, "No token to claim");

        //Execute proof

        ClaimableNFT(claimableNFT[msg.sender].collection).safeTransferFrom(
            address(this),
            msg.sender,
            claimableNFT[msg.sender].tokenId
        );
    }
}
