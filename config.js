const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_15_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU5LFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDYwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA4LFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZVgxZmxDSUFnK0xzT2lTM2prNUdlT0VyZHBUNTFrdm9TWTRWeWcyTUIrTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc3MTg5MzA0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTJERDI4N0Q1REI3NzUxODE4NjRCQ0QzNUQ0MzFDMUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMyMDA3NzQ1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzE4OTMwNDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2MTg3RjBBM0VFMUIzMDMyQkRGM0VCQ0IyMEU5NDY0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjAwNzc0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHajFVazVnUVFxS25EaDJVWlBOYWx3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzZjFiZTk0LWZjZTYtNDFkOS1iMDllLTE2NzYzZWNiZWEzNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTksXG4gICAgICAyOCxcbiAgICAgIDg2LFxuICAgICAgMTE4LFxuICAgICAgMTI4LFxuICAgICAgMjE0LFxuICAgICAgMTIsXG4gICAgICA1LFxuICAgICAgODUsXG4gICAgICA5NSxcbiAgICAgIDQzLFxuICAgICAgODksXG4gICAgICA4MyxcbiAgICAgIDIzLFxuICAgICAgMTQsXG4gICAgICAyMjUsXG4gICAgICA0NCxcbiAgICAgIDU5LFxuICAgICAgMjAwLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDIwMSxcbiAgICAgIDMxLFxuICAgICAgNzUsXG4gICAgICAyNTMsXG4gICAgICA4MCxcbiAgICAgIDE2MSxcbiAgICAgIDIzOSxcbiAgICAgIDQ5LFxuICAgICAgMTY5LFxuICAgICAgNyxcbiAgICAgIDE1NCxcbiAgICAgIDUzLFxuICAgICAgMTc5LFxuICAgICAgMTY5LFxuICAgICAgMTc1LFxuICAgICAgMTI1LFxuICAgICAgMTgzLFxuICAgICAgMjcsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBSlM5RE1ZOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzE4OTMwNDE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA5MDA2NTMwNDI0ODY0OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2agvCdmpLwnZqD8J2akfCdmoTwnZqg8J2ZsFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hUTVmNERFTHF1OGJrR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNER6RjkzajRPSExEb0VGKzcrYURBTGVUT0krSFpXbmRKZEtWc1hnZ1d3dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSdlpVeDZqeGQ4UmR6RDN1Qm1zc3o1MmNVeFNMUkpjZENFVlZ2NTBzWjU4azdkS09GODM0aXMrSDJRbXovbFhEeTRkVjZOVnZrNlU4T1NqSTkvNUxCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKMWJSUllZbnplK2xtYUZPYUhpcXdvbU9SbXNTd0xUK0ZmdEZpeXg0V292Q2duV1hiRGVURFlPQ2x3QnpaNnkzUnI5VE91bjhsUzNQSys2S3NJQkVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3MTg5MzA0MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwMDc3NDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGNCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY0Ky5qc29uIjogIntcImtleURhdGFcIjpcIkxEY3JCVllMTVdxemlVMjJ4OHdyQ1Q5VHJIa1pRcUhFbkpBWEhicFdjdjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MTIwNDQ1NCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIwMDc3MjM0MTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sithuwa-MD",
  ownername:process.env.OWNER_NAME|| "Sithuwah ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
