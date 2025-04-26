from telegram import Update
from telegram.ext import Application, CommandHandler, MessageHandler, filters, CallbackContext
import asyncio

async def start_game(update: Update, context: CallbackContext):
    url = "https://samvel10.github.io/sudoku/" 
    await update.message.reply_text(f"Click here to play the game: {url}")

async def help(update: Update, context: CallbackContext):
    await update.message.reply_text('Send /start_game to play the game!')


async def echo(update: Update, context):
    await update.message.reply_text("you entred wrong word")

async def start(update: Update, context):
    await update.message.reply_text("You can use /start,  /help or /start_game to play the game!")

def main():
    TOKEN = "7372222771:AAHFqpG_kN1M-riAfvR3adJukRVcry1xzcM"
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("start_game", start_game))
    app.add_handler(CommandHandler("help", help))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    print("Bot is running...")
    app.run_polling()

if __name__ == '__main__':
    main()
