class App{
    constructor(){
        this.serverName = "localhost";
    }

    getServerName(){
        console.log(this.serverName);
    }
}

const app = new App();
app.getServerName();