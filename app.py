from flask import Flask, jsonify, render_template
import numpy as np
import pandas
import plotly.express as px



#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/Amairani.github.io/blog.html")   
def project_overview():
    return render_template('blog.html')


@app.route("/templates/report_A_Trend_by_Category%20copy.html")   
def reportA():
    return render_template('report_A_Trend_by_Category%20copy.html')


@app.route("/templates/report_B_eCommerce%20copy.html")   
def report2():
    return render_template('report_B_eCommerce%20copy.html')

@app.route("/api/v1.0/reportC")   
def report3():
    return render_template('report_C_Outside_Indicators.html')


if __name__ == '__main__':
    app.run(debug=True)
