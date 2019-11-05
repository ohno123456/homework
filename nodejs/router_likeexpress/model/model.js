let app = {
    login: function (req, res) {
        console.log('login');
        res.end("this is login page");
    },
    register: function (req, res) {
        console.log('register');
        res.end("this is register page");
    },
    home: function (req, res) {
        console.log('home');
        res.end("this is default home page");
    }

}

exports.router = app;