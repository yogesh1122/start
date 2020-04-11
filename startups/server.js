

module.exports = (app) => {

    const port = process.env.Port || 3000;

    app.listen(port, () => {
        console.log(`app listing on ${port}`)
    })
}