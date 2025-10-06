import { REST, Routes } from 'discord.js';

// ここにコマンドを追加していく
const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    }
];

const token = process.env.TOKEN;
if (!token) {
    throw new Error('TOKEN environment variable is not defined.');
}
const rest = new REST({ version: '10'}).setToken(token);

try{
    console.log('Started refreshing application (/) commands.');

    const clientId = process.env.CLIENT_ID;
    if (!clientId) {
        throw new Error('CLIENT_ID environment variable is not defined.');
    }
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
} catch(error){
    console.error(error);
}