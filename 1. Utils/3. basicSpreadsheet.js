// Utils/3. basicSpreadsheet.js

// Objek indeks untuk mempercepat pencarian
let index = {};

/**
 * Membuat entri baru di spreadsheet.
 * @param {Array} data - Data entri baru.
 * @param {string} sheetName - Nama sheet tempat entri akan ditambahkan.
 * @param {string} range - Lokasi range untuk menambahkan entri (contoh: 'A1:C1').
 */
function createEntry(data, sheetName) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    sheet.appendRow([...data]);
    index[data[0]] = data;
}

/**
 * Membaca entri dari spreadsheet berdasarkan ID.
 * @param {number} id - ID entri yang dicari.
 * @param {string} sheetName - Nama sheet tempat entri disimpan.
 * @param {string} range - Lokasi range data entri.
 * @returns {Array|null} - Data entri yang sesuai dengan ID atau null jika tidak ditemukan.
 */
function readEntryById(id, sheetName, range) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const data = sheet.getRange(range).getValues();
    for (let row of data) {
        if (row[0] === id) {
            return row;
        }
    }
    return null;
}

/**
 * Memperbarui entri di spreadsheet berdasarkan ID.
 * @param {number} id - ID entri yang akan diperbarui.
 * @param {Array} newData - Data baru untuk entri.
 * @param {string} sheetName - Nama sheet tempat entri disimpan.
 * @param {string} range - Lokasi range data entri.
 */
function updateEntryById(id, newData, sheetName, range) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const data = sheet.getRange(range).getValues();
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === id) {
            sheet.getRange(range).offset(i, 0, 1, newData.length).setValues([newData]);
            index[id] = newData;
            break;
        }
    }
}

/**
 * Menghapus entri dari spreadsheet berdasarkan ID.
 * @param {number} id - ID entri yang akan dihapus.
 * @param {string} sheetName - Nama sheet tempat entri disimpan.
 * @param {string} range - Lokasi range data entri.
 */
function deleteEntryById(id, sheetName, range) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const data = sheet.getRange(range).getValues();
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === id) {
            sheet.getRange(range).offset(i, 0, 1, data[i].length).clearContent();
            delete index[id];
            break;
        }
    }
}

/**
 * Mencari entri dalam spreadsheet berdasarkan kriteria tertentu.
 * @param {Object} criteria - Kriteria pencarian.
 * @param {string} sheetName - Nama sheet tempat entri disimpan.
 * @param {string} range - Lokasi range data entri.
 * @returns {Array} - Array entri yang sesuai dengan kriteria.
 */
function searchEntries(criteria, sheetName, range) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    const data = sheet.getRange(range).getValues();
    const headers = data[0]; // Mengambil header kolom sebagai referensi kunci
    const results = [];
    
    for (let i = 1; i < data.length; i++) {
        let row = data[i];
        let match = true;
        
        for (let key in criteria) {
            let columnIndex = headers.indexOf(key);
            if (columnIndex !== -1 && row[columnIndex] !== criteria[key]) {
                match = false;
                break;
            }
        }
        
        if (match) {
            results.push(row);
        }
    }
    
    return results;
}
    function coba(){

        // Membuat entri baru
// createEntry([3, 'Alice Johnson', 35], 'Data');

// // Membaca entri berdasarkan ID
// const entry = readEntryById(3, 'Data', 'A:C');
// console.log(entry);

// // Memperbarui entri berdasarkan ID
// updateEntryById(3, [3, 'John Updated', 32], 'Data', 'A:C');

// // Menghapus entri berdasarkan ID
// deleteEntryById(3, 'Data', 'A:C');
// 
// // Mencari entri berdasarkan kriteria
const results = searchEntries({ Age: 8 }, 'Data', 'A:C');
console.log(results);
    }
