Hooks.once('ready', async function() {
    if(!game.user.isGM){
        document.documentElement.style.setProperty('--myDisplay', "none");
    }
});