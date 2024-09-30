import React, { useContext } from 'react'
import assetManagerContext from '../contexts/AssetManger'

export default function useAssets() {
    const { assets, setAssets } = useContext(assetManagerContext);
    return { assets, setAssets }
}
