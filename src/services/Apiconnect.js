import Axios from 'axios';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';

const ENC_KEY = 'd0baramatpuchhnakip@55w0rdky@h@1';
// const API_URL = 'https://whopapi.huepixel.com/api/';
const API_URL = 'http://localhost:3000/api/';
const tkn = localStorage.getItem('token');

let AuthStr = '--';
if (tkn) {
    // console.log('---------');
    // console.log(tkn);
    // console.log('---0-----');
    AuthStr = tkn;
}

class Apiconnect {
    encrypt = (txt) => {
        var _ciphertext = CryptoAES.encrypt(txt, ENC_KEY).toString();
        return _ciphertext;
    };
    encrypt_obj = (txt) => {
        var _ciphertext = CryptoAES.encrypt(JSON.stringify(txt), ENC_KEY).toString();
        return _ciphertext;
    };

    decrypt = (ciphertext) => {
        var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), ENC_KEY);
        return _ciphertext.toString(CryptoENC);
    };
    decrypt_obj = (ciphertext) => {
        var _ciphertext = CryptoAES.decrypt(ciphertext.toString(), ENC_KEY);
        return JSON.parse(_ciphertext.toString(CryptoENC));
    };

    getData(urlpart) {
        // console.warn(AuthStr);
        // console.warn(API_URL+urlpart);
        return Axios.get(API_URL + urlpart, { headers: { authorization: AuthStr } });
    }
    getData_arr(urlpart, data) {
        return Axios.get(API_URL + urlpart, data, { headers: { authorization: AuthStr } });
    }

    postData(urlpart, data) {
        // console.warn(AuthStr);
        // console.warn(API_URL+urlpart);
        // console.warn(data);
        return Axios.post(API_URL + urlpart, data, { headers: { authorization: AuthStr } });
    }

    postDataNoauth(urlpart, data) {
        return Axios.post(API_URL + urlpart, data);
    }

    deleteData(urlpart) {
        return Axios.delete(API_URL + urlpart, { headers: { authorization: AuthStr } });
    }
}
var api = new Apiconnect();
export default api;
