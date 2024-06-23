// import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
// import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
// import { INetProps } from '../interface/inetProps';

// const NetworkContext = createContext<INetProps>({});

// export const useNet = () => {
//     return useContext(NetworkContext);
// };

// type NetProps = {
//     type: string | undefined;
//     isConnected: boolean | null;
//     isInternetReachable: boolean | null;
//     isWifiEnabled: boolean | undefined;
//     details: any;
// };

// export const NetworkProvider = ({ children }: any) => {
//     const [netState, setNetState] = useState<NetProps>({
//         type: undefined,
//         isConnected: null,
//         isInternetReachable: null,
//         isWifiEnabled: undefined,
//         details: null
//     });

//     useEffect(() => {
//         const unsubscribe = NetInfo.addEventListener(checkConnectivity);
//         return () => unsubscribe();
//     }, []);

//     const checkConnectivity = (state: NetInfoState) => {
//         setNetState({
//             type: state.type,
//             isConnected: state.isConnected,
//             isInternetReachable: state.isInternetReachable,
//             isWifiEnabled: state.isWifiEnabled,
//             details: state.details,
//         });
//     };

//     const value = useMemo(() => ({ netState }), [netState]);

//     return (
//         <NetworkContext.Provider value={value}>
//             {children}
//         </NetworkContext.Provider>
//     );
// };
