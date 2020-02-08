import loadjs from 'loadjs';

export default async (url, id) => {
    await loadjs(url, {returnPromise: true});
    return window[id].default();
}