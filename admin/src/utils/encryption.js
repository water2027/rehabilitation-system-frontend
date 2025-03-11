// const CryptoJS = require('crypto-js');
import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.SECRET_KEY || 'dev key'

class EncryptionService {
  static encrypt(data) {
    const jsonString = JSON.stringify(data)
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString()
    return encrypted
  }

  /**
   *
   * @param {string} data
   * @returns {Object} Response
   * @returns {any} Response.data
   * @returns {number} Response.code
   * @returns {string} Response.message
   */
  static decrypt(data) {
    try {
      const decrypted = CryptoJS.AES.decrypt(data, SECRET_KEY)
      const jsonString = decrypted.toString(CryptoJS.enc.Utf8)
      return JSON.parse(jsonString)
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

export default EncryptionService
