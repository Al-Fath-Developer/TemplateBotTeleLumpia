// Import libraries
// Import Google Sheets library

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("text", ctx => {
    // Extract user information
    const username = ctx.from.username;
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;
    const user_id = ctx.from.id;

    // Append text log to Google Sheets
    sheet_text_log.appendRow([new Date(), user_id, username, fullname, ctx.message.text]);
});

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("caption", ctx => {
    // Extract user information
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;
    const username = ctx.from.username;
    const user_id = ctx.from.id;

    // Check for drive_id
    if (ctx.drive_id != null) {
        // Append caption log to Google Sheets
        sheet_text_log.appendRow([new Date(), user_id, username, fullname, ctx.message.caption, ctx.drive_id]);
    }
});

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("photo", ctx => {
    // Extract user information
    const username = ctx.from.username;
    const user_id = ctx.from.id;
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;

    // Get photo details from Drive
    const photo_file = DriveApp.getFileById(ctx.drive_id);
    const photo_url = photo_file.getUrl();
    const photo_name = photo_file.getName();
    const photo_size = photo_file.getSize();
    const photo_type = photo_file.getMimeType();

    // Append photo log to Google Sheets
    sheet_file_log.appendRow([new Date(), user_id, username, fullname, photo_name, photo_size, photo_type, photo_url]);
});

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("document", ctx => {
    // Extract user information
    const username = ctx.from.username;
    const user_id = ctx.from.id;
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;

    // Get document details from Drive
    const doc_file = DriveApp.getFileById(ctx.drive_id);
    const doc_url = doc_file.getUrl();
    const doc_name = doc_file.getName();
    const doc_size = doc_file.getSize();
    const doc_type = doc_file.getMimeType();

    // Append document log to Google Sheets
    sheet_file_log.appendRow([new Date(), user_id, username, fullname, doc_name, doc_size, doc_type, doc_url]);
});

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("audio", ctx => {
    // Extract user information
    const username = ctx.from.username;
    const user_id = ctx.from.id;
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;

    // Get audio details from Drive
    const audio_file = DriveApp.getFileById(ctx.drive_id);
    const audio_url = audio_file.getUrl();
    const audio_name = audio_file.getName();
    const audio_size = audio_file.getSize();
    const audio_type = audio_file.getMimeType();

    // Append audio log to Google Sheets
    sheet_file_log.appendRow([new Date(), user_id, username, fullname, audio_name, audio_size, audio_type, audio_url]);
});

/**
 * @param {Object} ctx - The context object containing information about the message
 */
bot.on("video", ctx => {
    // Extract user information
    const username = ctx.from.username;
    const user_id = ctx.from.id;
    const fullname = ctx.from.first_name + " " + ctx.from.last_name;

    // Get video details from Drive
    const video_file = DriveApp.getFileById(ctx.drive_id);
    const video_url = video_file.getUrl();
    const video_name = video_file.getName();
    const video_size = video_file.getSize();
    const video_type = video_file.getMimeType();

    // Append video log to Google Sheets
    sheet_file_log.appendRow([new Date(), user_id, username, fullname, video_name, video_size, video_type, video_url]);
});
