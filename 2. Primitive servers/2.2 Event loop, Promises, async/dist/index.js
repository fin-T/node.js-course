"use strict";
/*
To test the functionality of the functions for a job, uncomment only the code that is within the scope of that job.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 1.
let urlForGetIP = 'https://api.ipify.org/?format=json';
function printIP(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(urlForGetIP);
            let data = yield response.json();
            console.log("IP: " + data.ip);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// printIP(urlForGetIP);
// 2.
function getMyIP(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(urlForGetIP);
            let data = yield response.json();
            return data.ip;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
// (async () => {
//     try {
//         const myIP = await getMyIP(urlForGetIP);
//         console.log("IP: ", myIP);
//     } catch (error) {
//         console.log(error);
//     }
// })();
// 3.
let urlForGetNames = 'https://random-data-api.com/api/name/random_name';
// 3.1
// /**
//  * Using Promise.all
//  */
// async function getNames(url: string) {
//     try {
//         let response1 = await fetch(url);
//         let response2 = await fetch(url);
//         let response3 = await fetch(url);
//         let responses = await Promise.all([response1, response2, response3]);
//         let data = await Promise.all([responses[0].json(), responses[1].json(), responses[2].json()]);
//         let names = [data[0].name, data[1].name, data[2].name]
//         return names;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }
// (async () => {
//     try {
//         let names = await getNames(urlForGetNames);
//         console.log("3 names: " + names?.join(", ") + ".");
//     } catch (error) {
//         console.log(error);
//     }
// })();
// 3.2
// /**
//  * Using async/await but without Promise.all
//  */
// async function getNames(url: string) {
//     try {
//         let response1 = await fetch(urlForGetNames); 
//         let response2 = await fetch(urlForGetNames); 
//         let response3 = await fetch(urlForGetNames); 
//         let data1 = await response1.json();
//         let data2 = await response2.json();
//         let data3 = await response3.json();
//         return [data1.name, data2.name, data3.name];
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }
// (async () => {
//     try {
//         let names = await getNames(urlForGetNames);
//         console.log("3 names: " + names?.join(", ") + ".");
//     } catch (error) {
//         console.log(error);
//     }
// })();
// 3.3
// /**
//  * Uses exclusively promises (no async/await, no Promise.all).
//  */
// function getName(urlForGetNames: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//         fetch(urlForGetNames)
//             .then(response => response.json())
//             .then(response => response.name)
//             .then(result => resolve(result))
//             .catch(result => reject(result));
//     });
// }
// function getThreeName(urlForGetNames: string): Promise<string> {
//     let promises = Array.from({ length: 3 }, () => getName(urlForGetNames));
//     let threeNames: string[] = [];
//     return new Promise((resolve, reject) => {
//         let addedNames = 0;
//         promises.forEach((promise, index) => {
//             promise
//                 .then(name => {
//                     threeNames[index] = name;
//                     addedNames++;
//                     if (addedNames === 3) {
//                         let res = "3 names: " + threeNames.join(", ") + ".";
//                         resolve(res);
//                     }
//                 })
//                 .catch(error => reject(error))
//         })
//     })
// }
// getThreeName(urlForGetNames).then(threeNames => console.log(threeNames)).catch(err => console.log(err));
// 4. 
let urlForGetRundomUser = 'https://ransdom-data-api.com/api/users/random_user';
// /**
//  * @param getMyIP Streaming IP.
//  * @returns Callback function.
//  */
// function function1(getMyIP: callbackFunction) {
//     return getMyIP(urlForGetIP);
// }
// /**
//  * Can be executed asynchronously, uses function1.
//  */
// function function2() {
//     return function1(getMyIP).then(res => console.log(res)).catch(err => console.log(err));
// }
// async function run() {
//     await function2();
//     console.log("AA");
//     await function2();
//     console.log("AA");
// }
// run();
// 6.
// /**
//  * Can be executed asynchronously.
//  * 
//  * @returns Current address.
//  */
// async function function1(): Promise<string> {
//     let response = await fetch(urlForGetIP);
//     let data = await response.json();
//     let ip = await data.ip;
//     return ip;
// }
// /**
//  * Uses function1 to get the IP.
//  * 
//  * @param callback Will be called when an ip is received, with the first parameter equal to that ip.
//  */
// async function function2(callback: (param: string) => void) {
//     let ip: string = await function1();
//     callback(ip);
// }
// /**
//  * Prints to console your current ip.
//  * 
//  * @param ip Your current ip.
//  */
// function callback(ip: string): void {
//     console.log("Your IP: " + ip);
// }
// function2(callback);
