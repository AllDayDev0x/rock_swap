import { BigNumber } from '@ethersproject/bignumber'
import { getAddress } from '@ethersproject/address'
import { Contract } from '@ethersproject/contracts'
import { AddressZero } from '@ethersproject/constants'
import { ethers } from 'ethers'
// import { Fraction } from '../entities'

export function isAddress(value) {
    try {
        return getAddress(value)
    } catch {
        return false
    }
}

export function getSigner(library, account) {
    return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library, account) {
    return account ? getSigner(library, account) : library
}

export function getContract(address, ABI, library, account) {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }

    return new Contract(address, ABI, getProviderOrSigner(library, account))
}

// export const formatFromBalance = (value, decimals = 18) => {
//     if (value) {
//         return Fraction.from(BigNumber.from(value), BigNumber.from(10).pow(decimals)).toString()
//     } else {
//         return ''
//     }
// }

// export const formatBalance = (value, decimals = 18, maxFraction = 0) => {
//     const formatted = ethers.utils.formatUnits(value, decimals)
//     if (maxFraction > 0) {
//         const split = formatted.split('.')
//         if (split.length > 1) {
//             return split[0] + '.' + split[1].substr(0, maxFraction)
//         }
//     }
//     return formatted
// }

export const parseBalance = (value, decimals = 18) => {
    return ethers.utils.parseUnits(value || '0', decimals)
}

export const isEmptyValue = (text) =>
    ethers.BigNumber.isBigNumber(text)
        ? ethers.BigNumber.from(text).isZero()
        : text === '' || text.replace(/0/g, '').replace(/\./, '') === ''

export const errorFilter = (err) => {
    let status =
        'Transaction failed because you have insufficient funds or sales not started'
    let status1 = 
        'Sent incorrect ETH value'

    if (JSON.stringify(err).indexOf('insufficient') > -1)
        return status
    if (JSON.stringify(err).indexOf(status1) > -1)
        return status1

    if (err.message)
        return err.message.substr(err.message.indexOf(':') + 1)

    if (!err.error) 
        return err

    let errorContainer =
    err.error && err.error.message ? err.error.message : ''
    let errorBody = errorContainer.substr(errorContainer.indexOf(':') + 1)

    return errorBody
}

export const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.substr(0, n)}...${str.substr(str.length - n, str.length)}`;
    }
    return "";
};