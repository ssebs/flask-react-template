# dev.py - for running projname package for development
from projname import create_app

app = create_app()
app.run(host="0.0.0.0", port=5000, debug=True)
