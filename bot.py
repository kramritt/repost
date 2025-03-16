import discord
import os

intents = discord.Intents.default()
client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')

@client.event
async def on_message(message):
    if message.channel.type == discord.ChannelType.news:
        try:
            await message.publish()
            print("Message published!")
        except Exception as e:
            print("Failed to publish:", e)

client.run("your_bot_token_here")
