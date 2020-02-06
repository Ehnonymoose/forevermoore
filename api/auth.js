export default function (request, response) {
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
    let { password } = JSON.parse(body);

    if (password === 'potato') {
      response.statusCode = 200;
      response.end(JSON.stringify({ success: true }));
    } else {
      response.statusCode = 401;
      response.end(JSON.stringify({ success: false, message: 'Incorrect password!' }));
    }
  });
}
