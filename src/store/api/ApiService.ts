export async function callApi(api: any, resolve: any, reject: any) {
    try {
        const response = await fetch(api);
        const json = await response.json();
        return resolve(json);
    }
    catch (error) {
        return reject(error);
    }
}