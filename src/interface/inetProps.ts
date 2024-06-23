
export interface INetProps{
    netState?: {
        type: string | undefined;
        isConnected: boolean | null;
        isInternetReachable: boolean | null;
        isWifiEnabled: boolean | undefined;
        details: any;
    };
}