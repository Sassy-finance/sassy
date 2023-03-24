import { createContext } from "react";

export const User = createContext({
    isLogged: false,
    loginMetamask: () => {},
    provider: undefined,
    signer: undefined,
    signerObj: undefined
});
