'use strict'

const success = (data, options) => {
  const opt = typeof options === 'object' ? options : {}

  const headers = {
    'Content-Type': 'application/json'
  }

  if (opt.cors !== false) {
    headers['Access-Control-Allow-Origin'] = '*'
  }

  data = data || {}

  return {
    statusCode: typeof opt.statusCode !== 'undefined' ? opt.statusCode.toString() : '200',
    body: JSON.stringify(data),
    headers: headers
  }
}

module.exports = {
  success: success
}