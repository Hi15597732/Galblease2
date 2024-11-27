from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    query = request.form['query']
    response = requests.get(f'https://www.google.com/search?q={query}&safe=active&ssui=on')
    return response.text

if __name__ == '__main__':
    app.run(debug=True)
