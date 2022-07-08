from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def ledger():
    f_simple = open('../data/simple_ledger.json')
    f_dup = open('../data/duplicate_ledger.json')
    f_comp = open('../data/complicated_ledger.json')
    data = json.load(f_comp)
    return {"data": data}

if __name__ == '__main__':
    app.run()