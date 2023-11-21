
import numpy as np
import pandas as pd
from tensorflow.keras.models import load_model
import os
import cv2
from flask import Flask , request, render_template
#from werkzeug.utils import secure_filename
#from gevent.pywsgi import WSGIServer
labels_df = pd.read_csv("labels.csv")
breed = labels_df["breed"].unique()
id2breed = {i: name for i, name in enumerate(breed)}
def read_image(path, size):
    image = cv2.imread(path, cv2.IMREAD_COLOR)
    image = cv2.resize(image, (size, size))
    image = image / 255.0
    image = image.astype(np.float32)
    return image
app = Flask(__name__)

model = load_model("model_final2.h5",compile=False)
                 
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict',methods = ['GET','POST'])
def upload():
    if request.method == 'POST':
        f = request.files['image']
        print("current path")
        basepath = os.path.dirname(__file__)
        print("current path", basepath)
        filepath = os.path.join(basepath,'uploads',f.filename)
        print("upload folder is ", filepath)
        f.save(filepath)
        image = read_image(filepath, 224)
        image = np.expand_dims(image, axis=0)
        pred = model.predict(image)[0]
        label_idx = np.argmax(pred)
        breed_name = id2breed[label_idx]
        print(breed_name)
    return breed_name
if __name__ == '__main__':
    app.run(debug = True)