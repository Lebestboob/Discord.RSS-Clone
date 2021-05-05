<<<<<<< HEAD
Feedback on this guide is appreciated.

# Discord.RSS Clone

**This repository is only for users who want to use Discord.RSS at Repl.it**
=======
# MonitoRSS Clone (Formerly Discord.RSS)

**This repository is only for users who will clone MonitoRSS (formerly known as Discord.RSS) files directly.**
>>>>>>> 2eaccbad9acf0d1541924b48ab27d504f9cc0361

The main repository is located at https://github.com/synzen/MonitoRSS, and the web repository at https://github.com/synzen/MonitoRSS-Web.

This is a fork of the Discord.RSS repository at https://github.com/synzen/Discord.RSS-Clone

***

Driven by the lack of comprehensive RSS bots available, I have decided to try my hand at creating one of my own. Designed with as much customization as possible for both users and bot hosters, while also (or should be) easy to understand.

All documentation can be found at https://docs.monitorss.xyz/.

### Publicly Hosted Instance

Don't want to bother hosting your own instance? Use the publicly hosted one!

https://discordapp.com/oauth2/authorize?client_id=268478587651358721&scope=bot&permissions=19456


### Web Interface

MonitoRSS also comes with a web interface! To run the web interface, see the documentation.

![UI Screenshot](https://i.imgur.com/CD8mbRh.png)

<<<<<<< HEAD
### Hosting on Repl.it
=======
### Deploy to Heroku

You can deploy the bot in a simple way to Heroku using the button below. [Click here for detailed instructions](https://github.com/synzen/MonitoRSS/issues/45) - **you must have MongoDB hosted with its URI ready to also insert into `DRSS_DATABASE_URI` environment variable**.

<!-- [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) -->

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://dashboard.heroku.com/new?button-url=https://github.com/synzen/MonitoRSS-Clone&template=https://github.com/synzen/MonitoRSS-Clone/tree/master)

*If you want to deploy manually without the button, you can [follow this guide instead](https://github.com/synzen/MonitoRSS/issues/95).*
>>>>>>> 2eaccbad9acf0d1541924b48ab27d504f9cc0361

#### Disclaimer

<<<<<<< HEAD
You can't make projects private when using a free account on Repl.it. All the code will be availabe to the public. It is recommended you type the necessary information (token, clientid, database) in a .env file instead of the config.json files.
=======
MonitoRSS requires node.js v12.16. As of 23 May 2020, Glitch does not install v12.16 automatically, and must be manually installed. For MonitoRSS to work on Glitch, follow these steps.
>>>>>>> 2eaccbad9acf0d1541924b48ab27d504f9cc0361

#### Setup

1. Create an account at Repl.it and click the run on repl.it button.

<<<<<<< HEAD
<p><a href="https://repl.it/github/Lebestnoob/Discord.RSS-Clone"><img alt="Run on Repl.it" src="https://repl.it/badge/github/Lebestnoob/Discord.RSS-Clone" /></a></p>

2. To configure the bot, create a file named .env

3. Look at the .env.examaple file, this contains the lines of text that should be present in the newly created .env file.

3. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the MongoDB database and [Redis Labs](https://redislabs.com/) for the Redis database.

4. Choose what you want to run, if you only want the bot, type bot in DRSS_START= on the .env file. Otherwise, type bot-web, for the bot and web interface.
=======
[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/synzen/MonitoRSS-Clone)

2. Open terminal and run the following command. Adding the git remote will let you pull updates from the clone repo.
```
git remote add origin https://github.com/synzen/MonitoRSS-Clone.git && npm install --no-save node@12.16.3
```

3. Set up your [configs](https://docs.monitorss.xyz/configuration/bot-configuration). You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for the MongoDB database and [Redis Labs](https://redislabs.com/) for the Redis database.
4. Use a tool like [Uptime Robot](https://uptimerobot.com/) to prevent the bot from going offline.

If you want the web interface, you will need to follow the [web configuration](https://docs.monitorss.xyz/configuration/web-interface) and add the following in a file named .env:
>>>>>>> 2eaccbad9acf0d1541924b48ab27d504f9cc0361

5. Use a tool like [Uptime Robot](https://uptimerobot.com/) to send an HTTP request to your projects webpage every 30 minutes to prevent the bot from going offline.

6. Once you are done, click the run button at the top of the page. If everything was setup properly, the bot should be online.

#### Updating

See https://docs.monitorss.xyz/setting-up/staying-updated. Since using `npm install` will remove the required node v12.16 automatically, you must install it again after updating:

```
git reset --hard origin/master && npm install && npm install --no-save node@12.16.3
```
