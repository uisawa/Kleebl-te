var a = new (require("node-telegram-bot-api").TelegramBot)(process.env.a, {polling: true})
a.on("message", b => a.sendMessage(b.chat.id, JSON.stringify(b)))
