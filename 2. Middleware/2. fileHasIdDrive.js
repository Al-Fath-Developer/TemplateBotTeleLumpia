/**
 * Middleware untuk menghandle file yang dikirim oleh pengguna dan menyimpannya di Google Drive.
 * File akan diberi nama dengan format "caption|firstname" dan disimpan di folder "folder_user_files".
 */

bot.on("photo", ctx => {
    // Menyimpan nama depan pengguna
    const firstname = ctx.from.first_name

    let caption = ""
    if (ctx.message.caption != null) {
        caption = ctx.message.caption
    }
    let blob = UrlFetchApp.fetch(ctx.url_file).getBlob()
    let id = DriveApp.createFile(blob).setName(caption + "|" + firstname).moveTo(folder_user_files).getId();
    ctx.drive_id = id
})

bot.on("video", ctx => {
    // Menyimpan nama depan pengguna
    const firstname = ctx.from.first_name

    let caption = ""
    if (ctx.message.caption != null) {
        caption = ctx.message.caption
    }
    let blob = UrlFetchApp.fetch(ctx.url_file).getBlob()
    let id = DriveApp.createFile(blob).setName(caption + "|" + firstname).moveTo(folder_user_files).getId();
    ctx.drive_id = id
})

bot.on("voice", ctx => {
    // Menyimpan nama depan pengguna
    const firstname = ctx.from.first_name

    let caption = ""
    if (ctx.message.caption != null) {
        caption = ctx.message.caption
    }
    let blob = UrlFetchApp.fetch(ctx.url_file).getBlob()
    let id = DriveApp.createFile(blob).setName(caption + "|" + firstname).moveTo(folder_user_files).getId();
    ctx.drive_id = id
})

bot.on("audio", ctx => {
    // Menyimpan nama depan pengguna
    const firstname = ctx.from.first_name

    let caption = ""
    if (ctx.message.caption != null) {
        caption = ctx.message.caption
    }
    let blob = UrlFetchApp.fetch(ctx.url_file).getBlob()
    let id = DriveApp.createFile(blob).setName(caption + "|" + firstname).moveTo(folder_user_files).getId();
    ctx.drive_id = id
})

bot.on("document", ctx => {
    const filename = ctx.filename
    let blob = UrlFetchApp.fetch(ctx.url_file).getBlob()
    let id = DriveApp.createFile(blob).moveTo(folder_user_files).setName(filename).getId();
    ctx.drive_id = id
})
