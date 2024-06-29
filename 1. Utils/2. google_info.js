const MasterSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
const sheet_text_log = MasterSpreadsheet.getSheetByName("Log: Text")
const sheet_file_log = MasterSpreadsheet.getSheetByName("Log: Files")
const id_folder_user_files = "ID FOLDER FILE"
const folder_user_files = DriveApp.getFolderById(id_folder_user_files)