module.exports = (appMod = "prod") => require(`./webpack/${appMod}.config.js`);
