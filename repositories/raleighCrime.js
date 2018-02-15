'use strict'

const Request = require('async-request')

const baseUrl = "https://data.raleighnc.gov/resource/3bhm-we7a.json?"

const repository = {
    async get(query) {
        const url = `${baseUrl}${query}`

        const response = await Request(url)

        return JSON.parse(response.body)
    }
}

module.exports = repository