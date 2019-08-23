#import pymongo
#import json
#import geocoder
#import config

from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "hello homo"

if __name__=="__main__":
    app.run(debug=True)
