const Operators = {
    NOOP: 0, // No operation, skip query verification in circuit
    EQ: 1, // equal
    LT: 2, // less than
    GT: 3, // greater than
    IN: 4, // in
    NIN: 5, // not in
    NE: 6   // not equal
}

async function main() {

    const schemaBigInt = "23870957170138883652734263620937839261"

    const schemaClaimPathKey = "664911600394351984458363874301725352994596980129773175847129072633899723994"

    const requestId = 1;

    const queryTierA = {
        schema: schemaBigInt,
        claimPathKey: schemaClaimPathKey,
        operator: Operators.GT, // operator
        value: [1000000, ...new Array(63).fill(0).map(i => 0)], // for operators 1-3 only first value matters
    };

    const queryTierB = {
        schema: schemaBigInt,
        claimPathKey: schemaClaimPathKey,
        operator: Operators.GT, // operator
        value: [800000, ...new Array(63).fill(0).map(i => 0)], // for operators 1-3 only first value matters
    };

    const queryTierC = {
        schema: schemaBigInt,
        claimPathKey: schemaClaimPathKey,
        operator: Operators.GT, // operator
        value: [600000, ...new Array(63).fill(0).map(i => 0)], // for operators 1-3 only first value matters
    };


    const TierAAddress = "0x5FBd2d2deD32b125603fbE761da7554E3C47edC6"

    let tierAVerifier = await hre.ethers.getContractAt(
        "ClaimableNFT",
        TierAAddress
    )


    const validatorAddress = "0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450"; // sig validator

    try {
        await tierAVerifier.setZKPRequest(
            requestId,
            validatorAddress,
            queryTierA.schema,
            queryTierA.claimPathKey,
            queryTierA.operator,
            queryTierA.value
        );
        console.log("Request set for Tier A");
    } catch (e) {
        console.log("error: ", e);
    }

    const TierABddress = "0x878Fa6516CDD37a4413722de215653bC640dc062"

    let tierBVerifier = await hre.ethers.getContractAt(
        "ClaimableNFT",
        TierABddress
    )

    try {
        await tierBVerifier.setZKPRequest(
            requestId,
            validatorAddress,
            queryTierB.schema,
            queryTierB.claimPathKey,
            queryTierB.operator,
            queryTierB.value
        );
        console.log("Request set for Tier B");
    } catch (e) {
        console.log("error: ", e);
    }


    const TierCAddress = "0x516D41F0FB3E86D72b108C4f2aB352c5c65F3D26"

    let tierCVerifier = await hre.ethers.getContractAt(
        "ClaimableNFT",
        TierCAddress
    )


    try {
        await tierCVerifier.setZKPRequest(
            requestId,
            validatorAddress,
            queryTierC.schema,
            queryTierC.claimPathKey,
            queryTierC.operator,
            queryTierC.value
        );
        console.log("Request set for Tier C");
    } catch (e) {
        console.log("error: ", e);
    }
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  