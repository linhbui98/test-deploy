module.exports = {
    getImages: (req, res) => {
        res.render('index', {
            title: 'HTTP/1.x vs HTTP/2',
        })
    }
};