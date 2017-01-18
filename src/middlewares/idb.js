import idb from "idb";


export const DB_NAME = 'veris_client';
export const OBJ_STORE = 'veris-redux';
export const KEY = 'redux';

const dbPromise = idb.open(DB_NAME, 1, upgradeDB => {
    upgradeDB.createObjectStore(OBJ_STORE);
});

const idbMiddleware = (store) => (next) => (action) => {
    dbPromise.then(db => {
        const tx = db.transaction(OBJ_STORE, 'readwrite');
        tx.objectStore(OBJ_STORE).put({...store.getState()}, KEY);
        return tx.complete;
    });
    next(action);
};

export default idbMiddleware;
