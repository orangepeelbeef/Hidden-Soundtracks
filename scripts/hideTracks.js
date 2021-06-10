Hooks.once('ready', async function() {
    if(!game.user.isGM){
        document.documentElement.style.setProperty('--myDisplay', "none");
        document.documentElement.style.setProperty('--myHidden', "hidden");
        document.documentElement.style.setProperty('--myFlex', "none");

    }
});