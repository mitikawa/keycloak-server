// Simulating a replay attack
// If nonce (number user once) protection is not implemented, both requests will return a token.
// Otherwise, if nonce is implemented and the request doesn't contain it, the process is aborted.
// [ { message: 'Unauthenticated' }, { message: 'Unauthenticated' } ]

const url =
  "http://host.docker.internal:3000/callback?session_state=224e61a6-7f90-439d-b235-6c5b0c7f74a5&code=499419a0-70c3-4bac-acb6-31f89c75a3bb.224e61a6-7f90-439d-b235-6c5b0c7f74a5.0adba732-b5b7-4ffe-ae7c-29a9862b173b";

const request1 = fetch(url);
const request2 = fetch(url);

Promise.all([request1, request2])
  .then(async (responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((jsons) => console.log(jsons));

