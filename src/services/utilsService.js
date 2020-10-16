import path from 'path'
import CryptoJS from 'crypto-js'

export default {

    generateIdentifier: (id) => {
        return String(id).padStart(10, '0').concat('/', new Date().getFullYear())
    },

    renameFile: () => {
        const filename = Date.now().toString() + Math.random().toString()
        return CryptoJS.MD5(filename).toString()
    },

    formatUploadPath: (filename) => {
        const currentYear = new Date().getFullYear().toString()
        return path.format({ root: 'uploads/' + currentYear + '/', name: filename, ext: '.pdf' })
    },

    formatDownloadPath: (artigo) => {
        return path.format({ root: artigo.created_at.getFullYear() + '/', name: artigo.arquivo, ext: '.pdf' })
    }

}