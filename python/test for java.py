from flask import Flask, render_template
app = Flask(__name__)


@app.route('/quiz1')
def quiz1():
    return render_template('quizpage1.html')


@app.route('/quiz1')
def quiz1():
    game = 0
    game += 1


if __name__ == '__main__':
    app.run(debug=True)
