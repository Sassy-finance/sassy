// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {DataTypes} from "./types/DataTypes.sol";
import "./lib/GenesisUtils.sol";
import "./interfaces/ICircuitValidator.sol";
import "./verifiers/ZKPVerifier.sol";

contract ClaimableNFT is
    ERC721,
    ERC721Enumerable,
    Pausable,
    Ownable,
    ERC721Burnable,
    ZKPVerifier
{
    using Counters for Counters.Counter;
    uint256 public MAX_LOAN_THRESHOLD;
    uint64 public constant TRANSFER_REQUEST_ID = 1;
    mapping(uint256 => address) public idToAddress;
    mapping(address => uint256) public addressToId;
    mapping(uint256 => DataTypes.LoanParameters) loanParameters;

    Counters.Counter private _tokenIdCounter;
    mapping(address => bool) isValidated;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxLoanThreshold
    ) ERC721(name, symbol) {
        MAX_LOAN_THRESHOLD = _maxLoanThreshold;
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
        require(isValidated[_msgSender()], "Not valid claim for this address");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        loanParameters[tokenId] = _loanParameters;
        _safeMint(_msgSender(), tokenId);
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

    function _beforeProofSubmit(
        uint64 /* requestId */,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that  challenge input is address of sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        // this is linking between msg.sender and
        require(
            _msgSender() == addr,
            "address in proof is not a sender address"
        );
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        require(
            requestId == TRANSFER_REQUEST_ID && addressToId[_msgSender()] == 0,
            "proof can not be submitted more than once"
        );
        isValidated[_msgSender()] = true;
    }
}
