from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run()

# A project I will include on this portfolio page is a simple algorithmic structure potentially coming from a web scraping tool that suggests a graph of how often something is said by a politician or someone.
