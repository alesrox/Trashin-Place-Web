from flask import Flask, render_template, redirect, url_for #request, session, escape, abort

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', active=['active'])

@app.route('/home')
def to_home():
    return redirect(url_for('home'))

@app.route('/info')
def info():
    return render_template('info.html', active=['', 'active'])

@app.route('/ods')
def ods():
    return render_template('ods.html', active=['', '', 'active'])

@app.route('/about')
def aboutus():
    return render_template('aboutus.html', active=['', '', '', 'active'])

@app.route('/contact')
def contactus():
    return render_template('contactus.html', active=['', '', '', '', 'active'])

@app.route('/legalnote')
def legalnote():
    return render_template('legalnote.html', active=[])

@app.route('/cookiespolicy')
def cookiespolicy():
    return render_template('cookiespolicy.html', active=[])

@app.errorhandler(404)
def error_404(error):
    return render_template('error.html', error=f'Error {error}', active=['active'])

if __name__ == "__main__":
    app.run(debug = True, port=5000)