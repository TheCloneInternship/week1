var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        const setImmediate = () => {
            console.log(this.yelp);
        };
        setImmediate();
    }
    
};
foot.kick();