// ==============================
const discord  = require('discord.js-selfbot');
const client = new discord.Client();
const token = "NzM3MzkxNTAxMDMzNjAzMjEz.GzAvYF.7X2_Ci9-mHpfUB2RIRO-X-V_8mkjcOdUu2D40U" // <=============== put your token here
const owner = "" 
const ownername = "ज्ञ  𝐌𝐚𝐧𝐢⸸𝐌𝐁𝐍 ᵍᵒʳᵍⁱ#0169" 

// ==============================
client.on('ready', () => {  
    console.log(`Logged in as ${client.user.tag}!`);
    setInterval(() => {
    const channel = client.channels.cache.get("#1215494462923350047");
    if (!channel) return console.error("Channel Peyda nshd =(");
    channel.join().then(connection => {
      connection.voice.setSelfDeaf(true); // false or true
      connection.voice.setSelfMute(false); // false or true
	console.log(`join ${channel} shdm =D`);
    }).catch(e => {
      console.error(e);
    });
    }, 10000);
    });

client.login(token);
