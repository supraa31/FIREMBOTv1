module.exports = {
 
    kod: "yaz",
    async run(client, message, args){
        if(!args) return message.channel.send('Ne yazılacağını belirmelisin.')
        args[0]
        message.channel.send(`${args} `)
    },
   };