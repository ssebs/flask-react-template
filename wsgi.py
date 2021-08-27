# wsgi.py - module that will run in production w/ gunicorn
from projname import create_app

app = create_app()

if __name__ == "__main__":
    app.run()
