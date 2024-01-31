from flask import Flask, redirect, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def get():
    return "Hello world"

@app.route('/login')
def login():
    login_params = {
        'client_id': 'fullcycle-client',
        'redirect_uri': 'http://localhost:3000/callback',
        'response_type': 'code',
        'scope': 'openid'
    }

    url = f'http://localhost:8080/realms/fullcycle-realm/protocol/openid-connect/auth?{"&".join([f"{key}={value}" for key, value in login_params.items()])}'
    print(url)
    return redirect(url)

@app.route('/callback')
def callback():
    code = request.args.get('code')

    body_params = {
        'client_id': 'fullcycle-client',
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': 'http://localhost:3000/callback'
    }

    url = 'http://host.docker.internal:8080/realms/fullcycle-realm/protocol/openid-connect/token'

    response = requests.post(url, headers={'Content-Type': 'application/x-www-form-urlencoded'}, data=body_params)

    result = response.json()

    print(result)

    return jsonify(result)

if __name__ == '__main__':
    app.run(port=3000)
