# __init__.py - start here
import traceback
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS


def create_app():
    # Init #
    app = Flask(__name__,
                static_folder="../frontend/build/static",
                template_folder="../frontend/build")
    app.config["SECRET_KEY"] = "Foobar123"
    CORS(app)

    # Need to import here due to circular import issues
    from .routes.test import test_routes
    app.register_blueprint(test_routes)

    # Other routes #
    @app.route("/api/")
    def api_test():
        return "Testing API."

    # react frontend
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def frontend(path):
        return render_template("index.html")

    # Error handling
    @app.teardown_request
    def teardown_request(exception):
        if exception:
            print(exception)
            return jsonify({"Error": str(exception)})

    # Error handling
    @app.errorhandler(Exception)
    def handle_srvr_err(exception):
        # We don't want to return the python file name
        e = traceback.format_exc()
        if exception:
            print(e)
            return jsonify({"Error": str(e)})

    app.app_context().push()

    return app
