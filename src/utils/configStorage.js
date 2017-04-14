var Config = window.require('electron').remote.require('electron-config');
const config = new Config();

/**
 * [setConfig storing key value config persistent]
 * @param {[Any]} 		key  
 * @param {[Any]} 		value 
 *
 * @see https://github.com/sindresorhus/electron-config 
 */
export function setConfig(key, value) {
    config.set(key, value);
}

/**
 * [getConfig getting data from the config store]
 * @param  {[Any]} 		key 
 * @return {[Any]}  
 *
 * @see https://github.com/sindresorhus/electron-config
 */
export function getConfig(key) {
    return config.get(key)
}