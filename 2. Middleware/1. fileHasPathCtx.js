/**
 * Mengambil path file dari pesan berdasarkan tipe file
 * @param {object} ctx - Konteks pesan
 */
bot.on("photo", ctx => {
    let idx_best_qulity = ctx.update.message.photo.length - 1;
    let id_photo = ctx.update.message.photo[idx_best_qulity].file_id;
    let url_to_path = "https://api.telegram.org/bot" + ctx.tg.token + "/getFile?file_id=" + id_photo;
    let json_to_path = UrlFetchApp.fetch(url_to_path);
    let file_path = JSON.parse(json_to_path)["result"]["file_path"];
    let url_file = "https://api.telegram.org/file/bot" + ctx.tg.token + "/" + file_path;
    ctx.url_file = url_file;
    Logger.log("berhasil");
});

/**
 * Mengambil path file dari pesan berdasarkan tipe file
 * @param {object} ctx - Konteks pesan
 */
bot.on("document", ctx => {
    let id_document = ctx.update.message.document.file_id;
    let url_to_path = "https://api.telegram.org/bot" + ctx.tg.token + "/getFile?file_id=" + id_document;
    let json_to_path = UrlFetchApp.fetch(url_to_path);
    let file_path = JSON.parse(json_to_path)["result"]["file_path"];
    let url_file = "https://api.telegram.org/file/bot" + ctx.tg.token + "/" + file_path;
    ctx.url_file = url_file;
    ctx.filename = ctx.update.message.document.file_name;
    Logger.log("berhasil" + url_file);
});

/**
 * Mengambil path file dari pesan berdasarkan tipe file
 * @param {object} ctx - Konteks pesan
 */
bot.on("audio", ctx => {
    let id_audio = ctx.update.message.audio.file_id;
    let url_to_path = "https://api.telegram.org/bot" + ctx.tg.token + "/getFile?file_id=" + id_audio;
    let json_to_path = UrlFetchApp.fetch(url_to_path);
    let file_path = JSON.parse(json_to_path)["result"]["file_path"];
    let url_file = "https://api.telegram.org/file/bot" + ctx.tg.token + "/" + file_path;
    ctx.url_file = url_file;
    Logger.log("berhasil" + url_file);
});

/**
 * Mengambil path file dari pesan berdasarkan tipe file
 * @param {object} ctx - Konteks pesan
 */
bot.on("video", ctx => {
    let id_video = ctx.update.message.video.file_id;
    let url_to_path = "https://api.telegram.org/bot" + ctx.tg.token + "/getFile?file_id=" + id_video;
    let json_to_path = UrlFetchApp.fetch(url_to_path);
    let file_path = JSON.parse(json_to_path)["result"]["file_path"];
    let url_file = "https://api.telegram.org/file/bot" + ctx.tg.token + "/" + file_path;
    ctx.url_file = url_file;
    Logger.log("berhasil" + url_file);
});

/**
 * Mengambil path file dari pesan berdasarkan tipe file
 * @param {object} ctx - Konteks pesan
 */
bot.on("voice", ctx => {
    let id_voice = ctx.update.message.voice.file_id;
    let url_to_path = "https://api.telegram.org/bot" + ctx.tg.token + "/getFile?file_id=" + id_voice;
    let json_to_path = UrlFetchApp.fetch(url_to_path);
    let file_path = JSON.parse(json_to_path)["result"]["file_path"];
    let url_file = "https://api.telegram.org/file/bot" + ctx.tg.token + "/" + file_path;
    ctx.url_file = url_file;
    Logger.log("berhasil" + url_file);
});
