Feedback on this guide is appreciated.

# Discord.RSS Clone

**This repository is only for users who want to use Discord.RSS at Repl.it**

The main repository is located at https://github.com/synzen/Discord.RSS, and the web repository at https://github.com/synzen/Discord.RSS-Web.

This is a fork of the Discord.RSS repository at https://github.com/synzen/Discord.RSS-Clone

***

Driven by the lack of comprehensive RSS bots available, I have decided to try my hand at creating one of my own. Designed with as much customization as possible for both users and bot hosters, while also (or should be) easy to understand.

All documentation can be found at https://docs.discordrss.xyz/.

### Publicly Hosted Instance

Don't want to bother hosting your own instance? Use the publicly hosted one!

https://discordapp.com/oauth2/authorize?client_id=268478587651358721&scope=bot&permissions=19456


### Web Interface

Discord.RSS also comes with a web interface! To run the web interface, see the documentation.

![UI Screenshot](https://i.imgur.com/CD8mbRh.png)

### Hosting on Repl.it

#### Disclaimer

You can't make projects private when using a free account on Repl.it. All the code will be availabe to the public. It is recommended you type the necessary information (token, clientid, database) in a .env file instead of the config.json files.

#### Setup

1. Create an account at Repl.it and click the run on repl.it button.

<p><a href="https://repl.it/github/Lebestnoob/Discord.RSS-Clone"><img alt="Run on Repl.it" src="https://repl.it/badge/github/Lebestnoob/Discord.RSS-Clone" /></a></p>

2. To configure the bot, create a file named .env

3. Look at the .env.examaple file, this contains the lines of text that should be present in the newly created .env file.

3. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the MongoDB database and [Redis Labs](https://redislabs.com/) for the Redis database.

4. Choose what you want to run, if you only want the bot, type bot in DRSS_START= on the .env file. Otherwise, type bot-web, for the bot and web interface.

5. Use a tool like [Uptime Robot](https://uptimerobot.com/) to send an HTTP request to your projects webpage every 30 minutes to prevent the bot from going offline.

6. Once you are done, click the run button at the top of the page. If everything was setup properly, the bot should be online.

#### Updating

See https://docs.discordrss.xyz/setting-up/staying-updated. Since using `npm install` will remove the required node v12.16 automatically, you must install it again after updating:

```
git reset --hard origin/master && npm install && npm install --no-save node@12.16.3
```
