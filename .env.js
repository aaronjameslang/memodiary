const value = { memodiary : require('dotenv').config().parsed }
require('fs').writeFileSync('.env.json', JSON.stringify(value, null, 2))
