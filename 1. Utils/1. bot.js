const token_dev = 'isi_token_bot_disini'; // Token bot harus diisi
const bot = new lumpia.init(token_dev);

bot.options.log_id =  ini_id_tele_untuk_debug;

/**
 * Mengatur webhook untuk bot
 */
function setWebHook() {
  let url = 'https://script.google.com/macros/s/exec';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}

/**
 * Menangani POST request
 * @param {Object} e - Objek request
 */
function doPost(e) {
    bot.doPost(e);
}

/**
 * Fungsi untuk memulai bot
 * @param {Object} ctx - Konteks
 */
bot.start(ctx => {
    ctx.reply("hallo semua");
})

// Jalankan: > (clasp push) -dan (clasp deploy --deploymentId ID DEPLOYMENT)
