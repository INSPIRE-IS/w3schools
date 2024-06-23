// import { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { IAuthProps, AuthProps } from '@/interface/iauthProps';
// import { SQLiteService } from '@/services/localdb';
// import { IUser } from '@/interface/iuser';
// import { IPreference } from '@/interface/iprefences';
// import { testBoolean } from '@/utils/TestBoolean';
// import { writeLogs } from '@/utils/WriteLogs';
// //import { postLoginData } from '@/services/remotedb';

// export const TOKEN_KEY = 'MyJWT';
// export const AUTH_STATE = 'AuthUser';
// // export const API_URL = process.env.EXPO_PUBLIC_API_URL;
//  export const API_URL = "http://appgate.elcb.co.za:9888/MidasMobiGo/rest/MidasMobiGoService/";
// //export const API_URL = "http://172.14.1.43:8080/MidasMobiGo/rest/MidasMobiGoService/";
// export const APP_VERSION = '1.0.36';

// const AuthContext = createContext<IAuthProps>({});
// //axios.defaults.headers.common['ResponseType'] = 'application/json';
// //axios.defaults.headers.common['dataType'] = 'json';

// export const useAuth = () => {
//     return useContext(AuthContext);
// }

// export const AuthProvider = ({ children }: any) => {

//     const [authState, setAuthState] = useState<AuthProps>(
//         { tt_userid: null, tt_user: null, tt_pass: null, tt_br: null, tt_type: null, tt_token: null, tt_date: null, isLoaded: null, authenticated: null, check: null, log: null, theme: null }
//     );


//     useEffect(() => {
//         loadToken();
//     }, []);

//     const loadToken = async () => {
//         // const token =  await AsyncStorage.getItem(TOKEN_KEY);
//         // const user = await AsyncStorage.getItem(AUTH_STATE);
//         let isChecked = false;
//         let isLog = false;
//         let theme = '';
//         const authUser:IUser = await SQLiteService.getUser();
//         console.log('authUser--------------48', authUser.isLoaded);
//         const preferences:IPreference[] = await SQLiteService.getPreferences();

//           if (preferences.length == 0) {console.log('response', 'no preferences');}
//           else {
//             const checked = preferences.find((item:IPreference) => item.key.indexOf('Terms n Policy Accepted') >= 0);
//             if(checked !=undefined){isChecked = testBoolean(checked.value);}
//             const logged = preferences.find((item:IPreference) => item.key.indexOf('Add Log Data') >= 0);
//             if(logged !=undefined){isLog = testBoolean(logged.value);}
//             const themed = preferences.find((item:IPreference) => item.key.indexOf('Theme') >= 0);
//             if(themed !=undefined){theme = themed.value;}
//           }


//         if (authUser.isLoaded == 'true') {
//             console.log('authUser--------------52', authUser)
//             console.log("stored: ", authUser.tt_token);
//             const isloaded = authUser.isLoaded == 'true' ? true : false;
//             const authenticated = authUser.authenticated == 'true' ? true : false;
//             setAuthState({
//                 tt_userid: authUser.tt_userid,
//                 tt_user: authUser.tt_user,
//                 tt_pass: authUser.tt_pass,
//                 tt_br: authUser.tt_br,
//                 tt_type: authUser.tt_type,
//                 tt_token: authUser.tt_token,
//                 tt_date: authUser.tt_date,
//                 isLoaded: isloaded,
//                 authenticated: authenticated,
//                 check: isChecked,
//                 log: isLog,
//                 theme: theme
//             });
//         } else {
//             console.log("err token: ");
//             setAuthState({
//                 tt_userid: null,
//                 tt_user: null,
//                 tt_pass: null,
//                 tt_br: null,
//                 tt_type: null,
//                 tt_token: null,
//                 tt_date: null,
//                 isLoaded: true,
//                 authenticated: false,
//                 check: isChecked,
//                 log: isLog,
//                 theme: theme
//             });
//         }
//         console.log('authState', authState);
//     };

//     // not used
//     // const register = async (ipcUserID: string, ipcUserName: string) => {
//     //     try{
//     //         console.log('register');
//     //         return await axios.post(`${API_URL}/users`, {ipcUserID, ipcUserName});
//     //     }catch(e){
//     //         return {error: true, msg: (e as any).response.data.msg};
//     //     }
//     // };

//     const updateAuth = async (
//         tt_type?: string,
//         check?: boolean,
//         log?: boolean,
//         theme?: string
//       ): Promise<void> => {
//         setAuthState(prevState => ({
//           ...prevState,
//           ...(tt_type !== undefined && { tt_type }), // Only update if cType is provided
//           ...(check !== undefined && { check }), // Only update if isChecked is provided
//           ...(log !== undefined && { log }), // Only update if isLog is provided
//           ...(theme !== undefined && { theme }), // Only update if theme is provided
//         }));
//         check !== undefined && await SQLiteService.updatePreferences({key:'Terms n Policy Accepted',value:check.toString()});
//         log !== undefined && await SQLiteService.updatePreferences({key:'Add Log Data',value:log.toString()});
//         theme !== undefined && await SQLiteService.updatePreferences({key:'Theme',value:theme});
//       };

//     const login = async (ipcUserID: string, ipcPword: string) => {

//         console.log('auth login');

//         try {
//             const url = `${API_URL}inMobilogin`;
//             const postData = {"ttLogin": [{"tt-user": ipcUserID,"tt-pass": ipcPword}]};
//             try {
//                 const results = await axios.post(url, postData);
//                 console.log('Login successful:', results.data.response.lcJson);
//                 console.log('results----------------',  results);
//                 // [{"tt-user":"devatstbn","tt-br":"BN","tt-result":"200 - Login Succesful"}]

//                 if (results) {
//                     console.log('here i am',JSON.stringify(results.data.response.lcJson));
//                     const response = results.data.response.lcJson;
//                     // const encodedString = results.data[0]['tt-hash'].split('Bearer ');
//                     // const decodedString = atob(encodedString[0]);
//                     // console.log('decodedString-----------------', decodedString);
//                     console.log('response----------------',  response[0]);
//                     setAuthState(prevState => ({
//                         ...prevState,
//                         //...(ipcUserID && { ipcUserID }), // Only update if ipcUserID is truthy
//                         //...(ipcUserName && { ipcUserName: ipcUserName }), // Only update if ipcUserName is truthy
//                         ...(response[0]['tt-userid'] && { tt_userid: response[0]['tt-userid'] }), // Only update if tt-br is truthy
//                         ...(response[0]['tt-user'] && { tt_user: response[0]['tt-user'] }), // Only update if tt-br is truthy
//                         ...(response[0]['tt-br'] && { tt_br: response[0]['tt-br'] }), // Only update if tt-br is truthy
//                         tt_type: 'CSR', // Always update this
//                         ...(response[0]['tt-bearer'] && { tt_token: response[0]['tt-bearer'] }),
//                         ...(response[0]['tt-logdate'] && { tt_date: response[0]['tt-logdate'] }),
//                         isLoaded: true, // Always update this
//                         authenticated: true, // Always update this
//                     }));

//                     const iuser: IUser =
//                     {
//                         tt_userid: response[0]['tt-userid'],
//                         tt_user: response[0]['tt-user'],
//                         tt_pass: ipcPword,
//                         tt_br: response[0]['tt-br'],
//                         tt_type: 'CSR',//set to POD initially
//                         tt_token: response[0]['tt-bearer'],
//                         tt_date: response[0]['tt-logdate'],
//                         isLoaded: 'true',
//                         authenticated: 'true'
//                     }
//                     console.log('------------iuser---------', iuser);
//                     //axios.defaults.headers.common['Authorization'] = 'Bearer NoTokenFromServerYet'; // `Bearer ${result.data.token}`;
//                     //await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
//                     //await AsyncStorage.setItem(TOKEN_KEY, 'NoTokenFromServerYet');
//                     // await SQLiteService.deleteUsers()
//                     await SQLiteService.addUser(iuser)
//                         .then(response => { console.log('user saved successfully:', response); })
//                         .catch((err: any) => { console.warn(err); });
                     

//                     // await AsyncStorage.setItem(AUTH_STATE, JSON.stringify({
//                     //     ipcUserID: ipcUserID,
//                     //     ipcUserName: ipcUserName,
//                     //     tt_br: results.data[0]['tt-br'],
//                     //     cType: 'CSR',//set to POD initially
//                     //     token: results.data[0]['tt-user'] + '-' + results.data[0]['tt-br'],
//                     //     isLoaded: true,
//                     //     authenticated: true
//                     // }));

//                     return results;
//                 }
//             } catch (err) {
//                 writeLogs('remotedb', 'Error login: ' + err);
//                 throw err; // Rethrow the error to be handled by the caller if needed
//             }
//             //const results = await axios.get(`${API_URL}inMobilogin`,{params:{ipcUserID:ipcUserID,ipcPword:ipcPword}});

//         } catch (e) {
//             console.log('login err ---', JSON.stringify(e));
//             return { error: true, msg: 'auth error' };
//             // return {error: true, msg: (e as any).response.data.msg};
//             // return {error: true, msg: (e as any).response.data.msg};
//         }
//     };

//     const logout = async (tt_userid:string): Promise<boolean> => {
//             console.log("lets logout");
//         try {
//             //await AsyncStorage.multiRemove([TOKEN_KEY, AUTH_STATE, "ListItems", "ListItem", "ItemDetail", "Detail", "PartDetail"]);
//             const response = await SQLiteService.deleteUsers();
//             console.log('logout -------------------------------------------- res', response)
//             const old = authState;

//             setAuthState({
//                 tt_userid: null,
//                 tt_user: null,
//                 tt_pass: null,
//                 tt_br: null,
//                 tt_type: null,
//                 tt_token: null,
//                 tt_date: null,
//                 isLoaded: true,
//                 authenticated: false,
//                 check: old.check,
//                 log: old.log,
//                 theme: old.theme
//             });
//             return true;

//         } catch (err: any) {
//             console.log('Error', err);
//             return false;
//         }
//     };

//     const value = {
//         //onRegister: register,
//         onUpdate: updateAuth,
//         onLogin: login,
//         onLogout: logout,
//         authState
//     };

//     return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }


