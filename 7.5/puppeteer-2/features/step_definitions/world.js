const { setWorldConstructor } = require('cucumber');

class CustomWorld {
    constructor() {
        this.page = null;
    }
}

setWorldConstructor(CustomWorld);