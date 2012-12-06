var data = require("self").data;
var pageMod = require("page-mod");
 
pageMod.PageMod({
  include: [ /.*github.com\/.*\/issues\/.*/, /.*github.com\/.*\/pull\/.*/ ],
  contentScriptFile: data.url("index.js"),
  contentScriptWhen: "ready"
});