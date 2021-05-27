const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client,message,args) => {
 if(!message.member.hasPermission('"ADMINISTRATOR"')) return message.channel.send(new Discord.MessageEmbed().setDescription('Bu komutu kullanabilmek için yönetici yetkisine sahip olman gerek :warning:'))
 if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription('Yanlış Kullanım (!selam aç/kapat) :warning:'))

 if(args[0] === 'aç'){
     db.set(`selam_${message.guild.id}`,`açık`)
     message.channel.send(new Discord.MessageEmbed().setDescription(`**Başarıyla selam sistemini açtınız, artık bot \`sa\` yazıldığında otomatik \`Aleyküm Selam\` diyecek.**`))
 };
 if(args[0] === 'kapat'){
     db.set(`selam_${message.guild.id}`,`kapalı`)
     message.channel.send(new Discord.MessageEmbed().setDescription(`**Başarıyla selam sistemini kapadınız, artık bot \`sa\` yazıldığında otomatik \`Aleyküm Selam\` demiyecek.**`))
 }
};

exports.conf = {
    permLevel:0,
    guildOnly:true,
    aliases:['sa','as'],
    enabled:true
};

exports.help = {
    name:"selam",
    description:"sa as ayarlama",
    uasge:"!selam aç/kapat"
}
