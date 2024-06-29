// lumpia.verbose = true;  biar dapet info di log nya
// lumpia.DEBUG = true  biar klo kita nge chat, langsugn dapeet json nya
function handleImageUpdate(){

let message = {"update_id":819256643,"message":{"message_id":22,"from":{"id":2043329651,"is_bot":false,"first_name":"Tio","last_name":"Haidar Hanif","username":"atiohaidar","language_code":"en"},"chat":{"id":2043329651,"first_name":"Tio","last_name":"Haidar Hanif","username":"atiohaidar","type":"private"},"date":1719643756,"photo":[{"file_id":"AgACAgUAAxkBAAMWZn-ubH-8UksrlZL1FyN7-6RiziUAAom7MRvG_QFUQTETKcn-M-EBAAMCAANzAAM1BA","file_unique_id":"AQADibsxG8b9AVR4","file_size":1508,"width":53,"height":90},{"file_id":"AgACAgUAAxkBAAMWZn-ubH-8UksrlZL1FyN7-6RiziUAAom7MRvG_QFUQTETKcn-M-EBAAMCAANtAAM1BA","file_unique_id":"AQADibsxG8b9AVRy","file_size":16070,"width":190,"height":320},{"file_id":"AgACAgUAAxkBAAMWZn-ubH-8UksrlZL1FyN7-6RiziUAAom7MRvG_QFUQTETKcn-M-EBAAMCAAN4AAM1BA","file_unique_id":"AQADibsxG8b9AVR9","file_size":28885,"width":313,"height":526}]}}
bot.handleUpdate(message)

}