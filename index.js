const Discord = require("discord.js-selfbot-v13") // npm i discord.js-selfbot-v13 (required)
const client = new Discord.Client({checkUpdate: false})
const sphinx = require("sphinx-self");
const keep_alive = require("./keep_alive.js");

new sphinx.Core(client).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })

client.login(process.env.TOKEN)

const client1 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client1).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'eng', time: 30000 })

client1.login(process.env.TOKEN1)

const client2 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client2).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'eng', time: 30000 })

client2.login(process.env.TOKEN2)

const client3 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client3).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })

client3.login(process.env.TOKEN3)

const client4 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client4).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })

client4.login(process.env.TOKEN4)

const client5 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client5).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })

client5.login(process.env.TOKEN5)

const client6 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client6).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'eng', time: 30000 })

client6.login(process.env.TOKEN6)

client7 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client7).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'eng', time: 30000 })

client7.login(process.env.TOKEN7)

const client8 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client8).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })
client8.login(process.env.TOKEN8)

const client9 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client9).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'ar', time: 30000 })
client9.login(process.env.TOKEN9)

const client10 = new Discord.Client({checkUpdate: false})
new sphinx.Core(client10).leveling({ channel: "1199689430634610799", randomLetters: false, type: 'eng', time: 30000 })
client10.login(process.env.TOKEN10)
