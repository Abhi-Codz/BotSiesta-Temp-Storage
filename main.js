const Discord = require('discord.js');
require("dotenv").config();
// const {fetchNeko} = require("nekos-best.js");
const fetch = require('cross-fetch');

const client = new Discord.Client({
     intents:  [
         "GUILDS", 
         "GUILD_MESSAGES",
         "GUILD_MEMBERS"
        ] 
    })

// const welcome = require("./welcome");

client.once('ready', () => {
    console.log('code name');

  //  welcome(client);
});

client.login(process.env.BOTTOKEN);

/*const welcomeChannelId = "894571100565020682"

client.on("guildMemberAdd", (member) => 
{
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Konnichiwa <@${member.id}> Welcome to the server!`})
})*/

const jokes = [
    'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.',
    '“Debugging” is like being the detective in a crime drama where you are also the murderer.',
    'The best thing about a Boolean is that even if you are wrong, you are only off by a bit.',
    'A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn’t.',
    'Why do Java programmers have to wear glasses? Because they do not C#.',
    `What’s the best thing about Switzerland?: I don’t know, but the flag is a big plus.`,
    `I invented a new word!: Plagiarism!`,
    `Hear about the new restaurant called Karma?: There’s no menu - You get what you deserve.`,
    `Where are average things manufactured?:  The satisfactory.`,
    `Why should the number 288 never be mentioned?: It’s two gross.`,
    `What did the bald man exclaim when he received a comb for a present?: Thanks— I’ll never part with it!`
 ];

 const baseball = [
    'Foul Ball!',
    'Hit by pitch! (you go to first base😩)',
    'Ground Ball. ERROR THROW!!! (Single)',
    'Homerun!!',
    'Triple!',
    'Double!',
    'Single!',
    'Ball.',
    'Ground ball.', 
    'Swung and miss!',
    'Foul tipped into catchers glove. (Strike)',
    'Line Drive caught.',
    'Foul tipped into catchers glove.',
    'Ground Rule Double.',
    'Ground ball ERROR.',
    'Hit by pitch.',
    'Swung too early.',
    'Swung wayyy too late.',
    'Fly out.',
    'Pop up.',
 ]
 
 // fetchNeko('hug', 15).then(console.log);

 /*client.setActivity(`Currently in ${client.guilds.cache.size} servers`);
 module.exports.run = async (client, msg, arguments) => {
    const guild = client.guilds.get("566596189827629066");
    setInterval(function() {
       var memberCount = guild.members.filter(member => !member.user.bot).size;
       var memberCountChannel = client.channels.get("626462657817477131");
       memberCountChannel.setName(`${guild.name} has ${memberCount} members!`);
    }, 1000);
 };*/

client.on('message', gotMessage);

const replies = [
    `Geez don't make me work hard`,
    `Kawaii Emilia-Tan's my best friend!`,
    `Please stay by my side forever...`,
    `How can I help you?`,
    `I'm not cute? Isn't it a bit harsh?`,
    `Yes, I am frighteningly cool`,
    `私はただのかわいいじゃない`,
    `私はいつもあなたのためにそこにいます`
]


async function gotMessage(msg)
{
    let tokens = msg.content.split('');

    console.log(msg.content);
    if(msg.content === '.siesta')
    {
        const index = Math.floor(Math.random() * replies.length);
        msg.reply(replies[index]);
    }
    else if(msg.content === '.joke')
    {
        const index = Math.floor(Math.random() * jokes.length);
        msg.reply(jokes[index]);
    }
    else if(msg.content === '.swing')
    {
        const index = Math.floor(Math.random() * baseball.length);
        msg.reply(baseball[index]);
    }
    else if(msg.content === '.help')
    {
        msg.reply('PREFIX: ```.```' + 'SIESTA: ```.siesta```' + 'HELP: ```.help```' + 'JOKE: ```.joke```' + 'BASEBALL: ```.swing```' + 'INTERACTION GIF with {@ping}: ```.hug | .pat | .sigh | .dance | .sing | .blush | .cry | .smile | .cuddle | .snuggle | .sleep | .highfive | .jump | .bite | .run | .scare | .lick | .coffee | .icecream | .eat | .handhold | .kiss | .punch | .kick | .slap | .fumo | .poke | .boop | .pout | .yo | .bye | .protect | .hide | .lonely | .disappear | .lazy | .yeet | .fbi | .kill | .mad | .angry | .confuse | .scream | .love | .stare | .die | .smug | .ok```' + 'DEMONSLAYER INTERACTION GIF with {@ping}: ```.breathof(thunder, water, mist and flame) | .hinokami kagura dance```' + 'MHA INTERACTION GIF with {@ping}: ```.smash```' + 'JJK INTERACTION GIF with {@ping}: ```.kokusen | .ryoiki tenkai | jackpot```' + 'BLEACH INTERACTION GIF with {@ping}: ```.bankai | .shikai | .getsuga tensho```' + 'DRAGON BALL INTERACTION GIF with {@ping}: ```.kamehameha | .transform | .kaioken```' + 'ONE PIECE INTERACTION GIF with {@ping}: ```.diable jambe```' + 'NARUTO INTERACTION GIF with {@ping}: ```.rasengan | .chidori```' + "PRETTY GIRL INTERACTION GIF with {@ping}: ```.ve' | .emilia-tan```" + "FORGER INTERACTION GIF with {@ping}: ```.anya```" + 'VOLLEYBALL INTERACTION GIF with {@ping}: ```.spike | .set | .serve```');
    }  
    /*else if(msg.content == ".hug")
    {
       let keywords = "anime hug";
       if(tokens.length > 1)
        {
            keywords = tokens.slice(1, tokens.length).join("");
        }*/   
       //  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentFilter = G`;
        /*let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter = G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        msg.reply(json.results[index].url +
        `
        *Hugs*`
        );*/
    /*else if (msg.content.startsWith(".hug"))
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        if (mentionedMember) 
        {
            // msg.reply(`${mentionedMember} *Hugs* ${json.results[index].url}`);
            msg.reply(json.results[index].url + 
            `
            *Hugs* ${mentionedMember}`
            )
        } 
        else 
        {
            msg.reply(json.results[index].url +
            `
            *Hugs*`
        );
        }
    }*/
        // msg.reply(`${msg.author} hugs`);
    else if (msg.content.startsWith(".hug")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Hug!",
            description: `${msg.author}, ${mentionedMember ? `*Hugs* ${mentionedMember}` : "*Hugs*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
    /*else if (msg.content.startsWith(".hug")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
    
        // Construct the embed message
        const embed = {
            title: "Hugs!",
            description: mentionedMember ? `*Hugs* ${mentionedMember}` : "*Hugs*",
            color: 0xFFD700, // Gold color
            thumbnail: {
                url: json.results[index].media[0].gif.url,
                width: 500, // Adjust the width of the thumbnail (in pixels)
                height: 500 // Adjust the height of the thumbnail (in pixels)
            }
        };
    
        // Send the embed message
        msg.channel.send({ embed: embed });
    }*/
    
    else if (msg.content.startsWith(".pat")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepatting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Pat!",
            description: `${msg.author}, ${mentionedMember ? `*Pats* ${mentionedMember}` : "*Pats*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
            msg.channel.send({ embed: embed });
    }

    
    else if (msg.content.startsWith(".cry")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecrying&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Cry!",
            description: `${msg.author}, ${mentionedMember ? `..Their innocent eyes are crying ${mentionedMember}` : "*Cries*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".cuddle")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecuddling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Cuddle!",
            description: `${msg.author}, ${mentionedMember ? `*Cuddles* with ${mentionedMember}` : "*Cuddles*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".sleep")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesleeping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Sleep!",
            description: `${msg.author}, ${mentionedMember ? `*Sleeps* along ${mentionedMember}` : "*Sleeps*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".slap")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeslapping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Slap!",
            description: `${msg.author}, ${mentionedMember ? `*Slaps* poor ${mentionedMember}` : "*Slaps*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    

    else if (msg.content.startsWith(".kick")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekicking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kick!",
            description: `${msg.author}, ${mentionedMember ? `*Kicks* poor ${mentionedMember}` : "*Kicks*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
    
    else if (msg.content.startsWith(".kiss")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekissing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kiss!",
            description: `${msg.author}, ${mentionedMember ? `*Kisses* ${mentionedMember}` : "*Kisses*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".bite")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animebiting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Bite!",
            description: `${msg.author}, ${mentionedMember ? `*Bites* on ${mentionedMember}` : "*Bites*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
    
    else if (msg.content.startsWith(".punch")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepunching&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Punch!",
            description: `${msg.author}, ${mentionedMember ? `*Punches* poor ${mentionedMember}` : "*Punches*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".dance")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedance&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Dance!",
            description: `${msg.author}, ${mentionedMember ? `Shares the stage whilst **dancing** with ${mentionedMember}` : "*Dances*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".fumo")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=fumos&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Fumo!",
            description: `${msg.author}, ${mentionedMember ? `**Fumo.. Fumo.. Fumo...** ${mentionedMember}` : "**Fumo.. Fumo.. Fumo...**"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".smash")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=smashMHA&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Smash!",
            description: `${msg.author}, ${mentionedMember ? `**One for all..** *Smashes* ${mentionedMember}` : "**One for all..** *Smashes*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".breathofthunder")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=thunderbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Thunder Breathing!",
            description: `${msg.author}, ${mentionedMember ? `*Uses Thunder Breathing* on  ${mentionedMember}` : "*Uses Thunder Breathing*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".breathofwater")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=waterbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Water Breathing!",
            description: `${msg.author}, ${mentionedMember ? `*Uses Water Breathing* on  ${mentionedMember}` : "*Uses Water Breathing*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".hinokami kagura")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=hinokamikaguradance&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Sun Breathing!",
            description: `${msg.author}, ${mentionedMember ? `*Uses Sun Breathing* on  ${mentionedMember}` : "*Uses Sun Breathing*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".breathofflame")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=flamebreathingdemonslayer&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Flame Breathing!",
            description: `${msg.author}, ${mentionedMember ? `*Uses Flame Breathing* on  ${mentionedMember}` : "*Uses Flame Breathing*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".breathofmist")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=mistbreathing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Mist Breathing!",
            description: `${msg.author}, ${mentionedMember ? `*Uses Mist Breathing* on  ${mentionedMember}` : "*Uses Mist Breathing*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".poke")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepoking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Poke!",
            description: `${msg.author}, ${mentionedMember ? `*Pokes* ${mentionedMember}` : "*Pokes*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".boop")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeboop&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Boop!",
            description: `${msg.author}, ${mentionedMember ? `Wholesomely *boops* at ${mentionedMember}` : "*Boops*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".lick")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelicking&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Lick!",
            description: `${msg.author}, ${mentionedMember ? `*Licks* ${mentionedMember}` : "*Licks*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".snuggle")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesnuggling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Snuggle!",
            description: `${msg.author}, ${mentionedMember ? `Tightly *snuggles* with ${mentionedMember}` : "Tightly *snuggles*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".blush")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeblushing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Blush!",
            description: `${msg.author}, ${mentionedMember ? `*Blushes* in presence of ${mentionedMember}` : "*Blushes*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }   
    
    else if (msg.content.startsWith(".kill")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animekilling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kill!",
            description: `${msg.author}, ${mentionedMember ? `*Unalives* poor ${mentionedMember}` : "*Unalives*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".handhold")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehandhold&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Handhold!",
            description: `${msg.author}, ${mentionedMember ? `Holds hands with.. ${mentionedMember}` : "Holds hands with.."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".highfive")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehighfive&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Highfive!",
            description: `${msg.author}, ${mentionedMember ? `*Directs* a highfive at ${mentionedMember}` : "*Highfives*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".yeet")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animethrowing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Yeet!",
            description: `${msg.author}, ${mentionedMember ? `*Yeets* ${mentionedMember} away` : "*Yeets*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".fbi")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animefbi&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "FBI!",
            description: `${msg.author}, ${mentionedMember ? `*Calls* the **FBI** at ${mentionedMember} (Lol, good luck).` : "*Calls* the **FBI**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".run")) 
        {
            const mentionedMember = msg.mentions.members.first();
            let url = `https://api.tenor.com/v1/search?q=animerunning&key=${process.env.TENORKEY}&contentFilter=G`;
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            console.log(json);
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed = 
            {
                title: "Run!",
                description: `${msg.author}, ${mentionedMember ? `*Runs* away from ${mentionedMember}` : "*Runs away*"}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embed: embed });
        }    


    else if (msg.content.startsWith(".pout")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animepouting&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Pout!",
            description: `${msg.author}, ${mentionedMember ? `Adorably *pouts* at ${mentionedMember}` : "*Adorably pouts*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }  

    else if (msg.content.startsWith(".disappear")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedisappear&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Disappear!",
            description: `${msg.author}, ${mentionedMember ? `*Disappears* from the sight of ${mentionedMember}` : "*Disappears from the sight*."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".yo")) 
        {
            const mentionedMember = msg.mentions.members.first();
            let url = `https://api.tenor.com/v1/search?q=animehello&key=${process.env.TENORKEY}&contentFilter=G`;
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            console.log(json);
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed = 
            {
                title: "Yo!",
                description: `${msg.author}, ${mentionedMember ? `*Says*, "Yo Cutie" to ${mentionedMember}` : `*Says*, "Yo Cutie"`}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embed: embed });
        }    

    else if (msg.content.startsWith(".bye")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesayonara&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Bye!",
            description: `${msg.author}, ${mentionedMember ? `*Bids* a bye, ${mentionedMember}` : "*Bids* a bye."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }   
     
    else if (msg.content.startsWith(".protect")) 
        {
            const mentionedMember = msg.mentions.members.first();
            let url = `https://api.tenor.com/v1/search?q=nanamikentojjk&key=${process.env.TENORKEY}&contentFilter=G`;
            let response = await fetch(url);
            let json = await response.json();
            const index = Math.floor(Math.random() * json.results.length);
            console.log(json);
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            const embed = 
            {
                title: "Protect!",
                description: `${msg.author}, ${mentionedMember ? `*Proceeds to Protect*, Beloved Nanamin with ${mentionedMember}` : "*Proceeds to Protect*, Beloved Nanamin."}`,
                image: 
                {
                    url: json.results[index].media[0].gif.url
                },
                color: parseInt(randomColor, 16)
            };
            msg.channel.send({ embed: embed });
        }

        else if (msg.content.startsWith(".lonely")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelonely&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Lonely!",
            description: `${msg.author}, ${mentionedMember ? `*Feels Lonely* without, ${mentionedMember}` : "*Feels Lonely*."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    

    else if (msg.content.startsWith(".mad")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animemad&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Mad!",
            description: `${msg.author}, ${mentionedMember ? `Is mad at ${mentionedMember}` : "Is mad."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".angry")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeangry&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Angry!",
            description: `${msg.author}, ${mentionedMember ? `Is angry with ${mentionedMember}` : "Is angry."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    

    else if (msg.content.startsWith(".hide")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animehide&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Hide!",
            description: `${msg.author}, ${mentionedMember ? `*Hides* from ${mentionedMember}` : "*Hides*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".coffee")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animecoffee&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Coffee!",
            description: `${msg.author}, ${mentionedMember ? `*Brews* and *Sips* coffee with ${mentionedMember}` : "*Brews* and *Sips* coffee."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    } 

        else if (msg.content.startsWith(".confuse")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeconfused&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Confuse!",
            description: `${msg.author}, ${mentionedMember ? `${mentionedMember}.. They're confused` : "Is confused."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    

    else if (msg.content.startsWith(".scream")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animescreaming&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Scream!",
            description: `${msg.author}, ${mentionedMember ? `*Screams* at ${mentionedMember}` : "*Screams*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".scare")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animescaring&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Scare!",
            description: `${msg.author}, ${mentionedMember ? `BOOO *Scares* ${mentionedMember}` : "BOOO *Scares*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".icecream")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeicecream&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Ice-cream!",
            description: `${msg.author}, ${mentionedMember ? `Gladly, *shares* their ice-cream with ${mentionedMember}` : "*Licks* their icecream."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    

    else if (msg.content.startsWith(".jump")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animejumping&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Jump!",
            description: `${msg.author}, ${mentionedMember ? `*Jumps* on ${mentionedMember}` : "*Jumps*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".stare")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animestaring&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Stare!",
            description: `${msg.author}, ${mentionedMember ? `*Stares* at ${mentionedMember}` : "*Stares*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
        
    else if (msg.content.startsWith(".love")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeloving&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Love!",
            description: `${msg.author}, ${mentionedMember ? `*Makes* love with ${mentionedMember}` : "*Loves*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".ok")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animethumbsup&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Ok!",
            description: `${msg.author}, ${mentionedMember ? `*Okays'* with ${mentionedMember}` : "*Okays'*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".die")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animedeath&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Die!",
            description: `${msg.author}, ${mentionedMember ? `*Dies* along ${mentionedMember}` : "*Dies*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }     
    
    else if (msg.content.startsWith(".smug")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesmugging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Smug!",
            description: `${msg.author}, ${mentionedMember ? `*Smugs* at ${mentionedMember}` : "*Smugs*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".smile")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesmiling&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Smile!",
            description: `${msg.author}, ${mentionedMember ? `Their pastel lips **smile** at ${mentionedMember}` : "*Smiles*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".lazy")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animelazy&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Lazy!",
            description: `${msg.author}, ${mentionedMember ? `Is too lazy to work.. ${mentionedMember}` : "Is too lazy to work.."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".sigh")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesighing&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Sigh!",
            description: `${msg.author}, ${mentionedMember ? `*Sighs* on ${mentionedMember}` : "*Sighs*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".kokusen")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=blackflashjjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kokusen!",
            description: `${msg.author}, ${mentionedMember ? `Lands a **BLACK FLASH** on ${mentionedMember}` : "Lands a **BLACK FLASH**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".ryoiki tenkai")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=domainexpansionjjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Ryoiki Tenkai!",
            description: `${msg.author}, ${mentionedMember ? `Casts their **DOMAIN**.. Trapping ${mentionedMember}` : "Casts their **DOMAIN**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
    
    else if (msg.content.startsWith(".bankai")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=bankaibleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Bankai!",
            description: `${msg.author}, ${mentionedMember ? `Unleashes their **Ban.. KAIII** against ${mentionedMember}` : "Unleashes their **Ban.. KAIII**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".shikai")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=shikaibleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Shikai!",
            description: `${msg.author}, ${mentionedMember ? `Unleashes their **SHIKAI** in ${mentionedMember}'s presence` : "Unleashes their **SHIKAI**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".rasengan")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=rasengannaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Rasengan!",
            description: `${msg.author}, ${mentionedMember ? `Uses **RASENGAN** on ${mentionedMember}` : "Uses **RASENGAN**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".chidori")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=chidorinaruto&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Chidori!",
            description: `${msg.author}, ${mentionedMember ? `Counters by using **CHIDORI** on ${mentionedMember}` : "Counters by using **CHIDORI**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".sing")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animesinging&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Sing!",
            description: `${msg.author}, ${mentionedMember ? `*Jams* and *Sings* with ${mentionedMember}` : "*Jams* and *Sings*."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".kamehameha")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=kamehameha&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kamehameha!",
            description: `${msg.author}, ${mentionedMember ? `Uses the Legendary **KAA.. MEE.. HAAA.. MEEE... HAAAAAA...** on ${mentionedMember}` : "Uses the Legendary **KAA.. MEE.. HAAA.. MEEE... HAAAAAA...**"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".diable jambe")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=diablejambeonepiece&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Diable Jambe!",
            description: `${msg.author}, ${mentionedMember ? `Rocks by using **DIABLE JAMBE** against ${mentionedMember}` : "Rocks by using **DIABLE JAMBE**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".jackpot")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=hakarijjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Jackpot!",
            description: `${msg.author}, ${mentionedMember ? `Hits a **JACKPOT**, against the odds of ${mentionedMember} !!` : "Hits a **JACKPOT** !!"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
    
    else if (msg.content.startsWith(".ve'")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=nobarakugisakijjk&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Ve'!",
            description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, no kidding, **Ve's the BEST GIRL.**` : "**Ve's the BEST GIRL.**"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".transform")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=dragonballtransformation&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Transform!",
            description: `${msg.author}, ${mentionedMember ? `*Transforms* against  ${mentionedMember}. They're **MAJESTIC** in all their forms.` : "They're **MAJESTIC** in all their forms."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".getsuga tensho")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=getsugatenshobleach&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Getsuga Tensho!",
            description: `${msg.author}, ${mentionedMember ? `Uses mystical.. **GETSUGA.. TENSHOOO** on ${mentionedMember}` : "Uses mystical.. **GETSUGA.. TENSHOOO**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".kaioken")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=dragonballkaioken&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Kaioken!",
            description: `${msg.author}, ${mentionedMember ? `Applies the **KAIO.. KEN** on a battle against ${mentionedMember}` : "Applies the **KAIO.. KEN**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".eat")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=animeeating&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Eat!",
            description: `${msg.author}, ${mentionedMember ? `Enjoys their meal with ${mentionedMember}` : "Enjoys their meal."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".anya")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=anyaforger&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Anya!",
            description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, *(Likes Penuts.)*` : "*(Likes Penuts.)*"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".emilia-tan")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=emiliarezero&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Emilia-Tan!",
            description: `${msg.author}, ${mentionedMember ? `${mentionedMember}, did you know, **Emilia-Tan's a MAJOR FAIRY !!**` : "**Emilia-Tan's a MAJOR FAIRY !!**"}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".spike")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikyuuspike&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Spike!",
            description: `${msg.author}, ${mentionedMember ? `*Spikes* at **FULL TEMPO** to ${mentionedMember}` : "*Spikes* at **FULL TEMPO**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }

    else if (msg.content.startsWith(".set")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikyuuset&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Set!",
            description: `${msg.author}, ${mentionedMember ? `*Sets* with **MAXIMUM ANALYSIS** to ${mentionedMember}` : "*Sets* with **MAXIMUM ANALYSIS**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }    
    
    else if (msg.content.startsWith(".serve")) 
    {
        const mentionedMember = msg.mentions.members.first();
        let url = `https://api.tenor.com/v1/search?q=haikuuserve&key=${process.env.TENORKEY}&contentFilter=G`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        console.log(json);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const embed = 
        {
            title: "Serve!",
            description: `${msg.author}, ${mentionedMember ? `*Serves* at **FULL FLARE** to ${mentionedMember}` : "*Serves* at **FULL FLARE**."}`,
            image: 
            {
                url: json.results[index].media[0].gif.url
            },
            color: parseInt(randomColor, 16)
        };
        msg.channel.send({ embed: embed });
    }
}