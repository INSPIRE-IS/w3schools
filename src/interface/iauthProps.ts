
export interface IAuthProps{
    authState?: {
        tt_userid: string | null;
        tt_user: string | null;
        tt_pass: string | null;
        tt_br: string | null;
        tt_type: string | null;
        tt_token: string | null; 
        tt_date: string | null; 
        isLoaded: boolean | null;
        authenticated: boolean | null;
        check: boolean | null;
        log: boolean | null;
        theme: string | null;
    };

    onUpdate?: (cType?: string,isChecked?: boolean,isLog?: boolean,theme?: string) => Promise<any>;
    onLogin?: (ipcUserID: string, ipcPword: string) => Promise<any>;
    onLogout?: (tt_userid: string) => Promise<boolean> | false;
}
    //onRegister?: (ipcUserID: string, ipcPword: string) => Promise<any>;

export type AuthProps = 
{
    tt_userid: string | null;
    tt_user: string | null;
    tt_pass: string | null;
    tt_br: string | null;
    tt_type: string | null;
    tt_token: string | null;
    tt_date: string | null;
    isLoaded: boolean | null;
    authenticated: boolean | null;
    check: boolean | null;
    log: boolean | null;
    theme: string | null;
}