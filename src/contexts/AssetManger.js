
import { createContext, useState } from 'react';

const defaultData = {}
const AssetManagerContext = createContext({
    assets: defaultData,
    setAssets: () => {}
});

export const AssetManagerContextProvider = ({children}) => {
    
    const [assets, setAssets] = useState(defaultData);

    return <AssetManagerContext.Provider
        value={{assets, setAssets}}
    >
        {children}
    </AssetManagerContext.Provider>
}

export default AssetManagerContext;