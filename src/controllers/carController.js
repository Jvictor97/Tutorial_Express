exports.getCars = (req, res) => {
    res.send({
        cars: [
            'Fiesta',
            'Palio',
            'Jeep Renegade',
            'Dodge Viper'
        ]
    })
}