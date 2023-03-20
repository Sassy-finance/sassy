// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

library DataTypes {
    struct LoanParameters {
        uint256 notional;
        uint256 rate;
    }
    struct NFTClaim {
        address collection;
        uint256 tokenId;
    }
}
