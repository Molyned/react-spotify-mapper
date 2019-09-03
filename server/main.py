import pymongo
import config
import chart_studio
import chart_studio.plotly as py
from plotly.offline import plot
import plotly.graph_objs as go
import requests
from flask import Flask
chart_studio.tools.set_credentials_file(username=config.mapUsername, api_key=config.mapApiToken)
mapbox_access_token = config.mapAccessToken
client = pymongo.MongoClient('mongodb+srv://molyned:{}@spotifycluster-6btnk.mongodb.net/test?retryWrites=true&w=majority'.format(config.MONGO_PASSWORD))
database = client.business
collection = database.artistInfo
collection2 = database.artistInfo2
myCursor1 = collection.find()
app = Flask(__name__)

@app.route('/')
def getPlotData():
    return requests.get().content

def plotMaker():
    traceData = []
    for item in myCursor1:
        artistLat = item['artist'][0]['lat'] 
        artistLng = item['artist'][0]['lng'] 
        artistListeners = item['artist'][0]['listeners'] 
        artistName = item['name']
        trace = go.Scattermapbox(
                lat=artistLat,
                lon=artistLng,
                name = artistName,
                mode='markers',
                marker=dict(
                    size=10,
                    color= 'rgb(30, 215, 96)',
                    opacity=0.7
                ),
                text=artistListeners,
                
                hoverinfo='text')
        traceData.append(trace)

        mapLayout = go.Layout(
        title="Artist's Monthly Streamers W/ MongoDB",
        autosize=True,
        hovermode='closest',
        showlegend=True,
        mapbox=dict(
            accesstoken=mapbox_access_token,
            bearing=0,
            center=dict(
                lat=38,
                lon=-94
                ),
            pitch=0,
            zoom=3,
            style='light'
            ),
        )
    fig = dict(data=traceData, layout=mapLayout)
    plot(fig, filename="Artist's MongoDB") 

if __name__=="__main__":
    app.run(debug=True)
