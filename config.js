const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID ||BWM-XMD;;;H4sIAAAAAAAAA5VV2ZKiSBT9l3yVatlBIypiEJBCUHGhxJrohwSSRXYyUbHCf5+glqh+mO6p4SkjSc49ec65l1dQVilGFurB9BXUbXqGBA1L0tcITMGsiyLUAgqEkEAwBaLGSPPJVbeXumzPr2pgiIX/Iqy88ZKrhLXG58yqU7eNwJmP4E6BuvPzNPgDYK8c5nTiFYGxyCzLvqnSyhAKnhNOAiqccek06V7NudLs40dwHxBh2qZlrNcJKlALcwv1Dkzb79HHOiFuZXG9TLxzc7sap8qrxc6M+lw7OWmgrEfEbpc2a1y+R59si2dN2O8Mtw2zM9IOmEszSI6rWeTEOnOy4rAacXyzfcre6eM0LlFohqgkKem/rbviLHdBumeT1NwJuyYxDvZNH8vLRO+YtdnnOHSC5mjBXne/R/wSHG13JHJn2Zuxoht1Yyvw9NpaxJo8KXM+lHecjp/ZE6f/StxpP7OS/R/ds/mTm7RI48hC5LXzMdrsF3K8J5iwpwJlGPnbYkXrgv9d3fVJZ3tLX1WUrGwJXZpHzvG3KqPVOefpeOs5h62lWM5lo3zRh6Rr/8TSJzN+zC1CeR4+C+S46NdXh67WVb+61QvSuLJd+15BvHTWeDTvX7kL5g7V0ZBfjnUQR+uZZ7pN8sQy6/5lsizXkjmKlc3j240y1JshmDJ3CrQoTjFpIUmrctiTJQrA8LxDQYvIm7pAIXhyu47EHm1XWSMx9fo4U2i5gdEt1EK477tNrmbbzWwVPwIK1G0VIIxR+JRiUrX9EmEMY4TB9O+fFCjRlbz7NlTjGApEaYuJW3Z1XsHw09TPlzAIqq4ku74M1GGBWjClv7YRIWkZ40HGroRtkKRnpCaQYDCNYI7RnQIhOqcBGvDAw60qwjC7bdsOdbOD5jd1I1wGyklVvh+h6TBEIe0/cIJIP/CBRD/4kiw/BHwkshNOEAVEAwqkHy0zfPNbB5PLla03KILkubu4S6bVDIbmK77Sj28uvEuPWhSCKWk7RAEfBllX76sMlX+aUt7aSwreXYiYzir7aTY37Ggeb+KXX3HfLQXT168xpVbhgHfk+YPiPVmAAsVbAtPh5qzASyIvShLLMFP2L/zjMugI6/pHiQigQAmHw+BUJSWuyhgGVZYKQ7kPLwagEBGY5hhMgWrZ5IyPum4ZLi1hw1DMWFFjBXx599kD7yHbMUtRO4w6uB177IxI445hVsZJPR/HzS6LT0/FUhDUdWBsN4//AgKmoHS4PN/v+JG2ky+NqURnZBsjDnbzjtlGppy0Z8VXUXxBo+2CNcnOn89Ku5vQ89QtE61fKE8cs2Sei5iWX0zaeLH7TlMeh2rvGfq1GM2PEt7ZpP7VrzHbb7prMLlmp4YX7XpePc/qDTxfhJ02PhsvY9fhbLlwedbivdJQE7xY7MYw6nhrdEirMDdJe73U6LM736ZD/jGV07fGef1IXJSityH3YcZ/efaVffpO/QLxMTV/k6+ZS/brmDm3RRYxk9hHY4mE+211aVlHzGrTvAqnNdqcylnmgvv9JwXqHJKoaovhp1b4EFAgh5goX727TwuECSxqMGUkTpBoiZE5ChS9Utc7AslnywNleJZRA+7/APok7aENCAAA '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

