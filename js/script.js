let consol = document.getElementById("console");
let log = document.getElementById("log")
function ConsolFocus(){
     consol.focus();
}
ConsolFocus();
let commands = [];
commands["goto"] = {
     name: "goto",
     prop1: "url",
     description: "opens a window with this site",
     noProperty: function () {
          log.innerHTML += "invalid property using<br>use instead   " + this.name + " [" + this.prop1 + "]<br>";
     },
     hasProperties: function (prop1) {
          if (prop1.startsWith("https://"))
               window.open(prop1);
          else
               window.open("https://" + prop1);
     }
};
commands["help"] = {
     name: "help",
     prop1: "Command name",
     description: "Show command syntaxis and description",
     noProperty: function () {
          for (var key in commands) 
               if (commands.hasOwnProperty(key))
                    log.innerHTML += commands[key].name + " [" + commands[key].prop1 + "] -" + commands[key].description + "<br>";

     },
     hasProperties: function(name){
          try {
               log.innerHTML += commands[name].name + " [" + commands[name].prop1 + "] -" + commands[name].description + "<br>";
          } catch (error) {
               log.innerHTML += "Command not found ¯\\_(ツ)_/¯<br>";
          }
     }
}









function handler(command) {
     command_arr = command.split(" ");
     log.innerHTML += command + "<br>";
     if (command_arr.length == 1) {

          try {
               commands[command_arr[0]].noProperty();

          } catch (error) {
               log.innerHTML += "Command not found<br> Enter help for additional information<br>";
          }

     }
     else {
          commands[command_arr[0]].hasProperties(command_arr[1], command_arr[2], command_arr[3]);
     }




     consol.value = "";
}
