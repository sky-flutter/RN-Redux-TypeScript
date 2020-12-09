export async function callApi(api: any, options: any, resolve: any, reject: any) {
    try {
        const response = await fetch(api, options);
        const json = await response.json();
        return resolve(json);
    }
    catch (error) {
        return reject(error);
    }
}