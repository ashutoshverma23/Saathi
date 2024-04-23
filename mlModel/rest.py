from flask import Flask, request, jsonify
from flask_cors import CORS 
from chat import get_response
from flask import render_template

app = Flask(__name__)
CORS(app)

@app.route('/')
def index_get():
    return render_template('base.html')


@app.route('/predict', methods = ['POST'])
def predict():
    data = request.get_json()
    text = data.get('message')
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == '__main__':
    app.run(debug=True, port=8080)




