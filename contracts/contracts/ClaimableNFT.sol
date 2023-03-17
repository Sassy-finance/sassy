// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {DataTypes} from "./types/DataTypes.sol";

contract ClaimableNFT is
    ERC721,
    ERC721Enumerable,
    Pausable,
    Ownable,
    ERC721Burnable
{
    using Counters for Counters.Counter;
    address public nftRegistry;
    uint256 public MAX_LOAN_THRESHOLD;
    uint256 public MIN_CREDIT_SCORE_THRESHOLD;

    Counters.Counter private _tokenIdCounter;
    mapping(uint256 => DataTypes.LoanParameters) loanParameters;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxLoanThreshold,
        uint256 _minCreditScoreThreshold,
        address _nftRegistry
    ) ERC721(name, symbol) {
        MAX_LOAN_THRESHOLD = _maxLoanThreshold;
        MIN_CREDIT_SCORE_THRESHOLD = _minCreditScoreThreshold;
        nftRegistry = _nftRegistry;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(
        DataTypes.LoanParameters memory _loanParameters
    ) public returns (uint256) {
        require(
            _loanParameters.notional <= MAX_LOAN_THRESHOLD,
            "Max loan exceeded"
        );
        require(
            _loanParameters.creditScore >= MIN_CREDIT_SCORE_THRESHOLD,
            "Not enough credit score"
        );
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        loanParameters[tokenId] = _loanParameters;
        _safeMint(nftRegistry, tokenId);
        return tokenId;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721) {
        super._burn(tokenId);
    }

    function getRiskParams(
        uint256 tokenId
    ) public view returns (DataTypes.LoanParameters memory) {
        return loanParameters[tokenId];
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
