# Lambda response creator

A function to create the response object for AWS Lambdas

## Installation

```
npm install lambda-response --save
```

## Usage

```js
const lambdaResponse = require('lambda-response')

const data = {
  foo: 'bar'
}

//optional
const options = {
  cors: true  //default true
}

lambdaResponse.success(200, data, options)
```

### Response

```
{
  statusCode: '200',
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Content-Type': "application/json"
  },
  body: JSON.stringify({ "foo": "bar" })
}
```


## Tests
```
npm test
```

### Coverage

```
npm run-script test-travis
```

## Author

[Palmabit](https://palmabit.com)

## License

[MIT license](LICENSE)
