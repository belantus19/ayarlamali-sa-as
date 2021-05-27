client.on('message',async(msg)=>{
  let i = await db.fetch(`selam_${msg.guild.id}`);
  if (i === 'açık'){
    if(msg.content.toLowerCase() === 'sa'){
      msg.reply('Aleyküm Selam, Hoşgeldin')
    }
  }
});
