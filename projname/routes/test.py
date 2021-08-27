# routes/test.py
from flask import Blueprint, request, jsonify

test_routes = Blueprint("test_routes", __name__)


@test_routes.route("/api/test", methods=["GET"])
def test():
    return "Test route"


@test_routes.route("/api/test", methods=["POST"])
def post_test():
    if not request.json:
        return jsonify({"Status": "No data sent"}), 400
    data = request.json["data"]
    return jsonify({"Status": "You sent some data", "Data": data})


@test_routes.route("/api/test/<string:query>")
def test_query(query):
    return "You said: " + query
