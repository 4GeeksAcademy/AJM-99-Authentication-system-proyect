"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from sqlalchemy import select
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():
    
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"error":"Missing data, please add fill all the fields"}), 400
    
    existing_user = db.session.execute(select(User).where(User.email == email)).scalar_one_or_none()
    
    if existing_user:
        return jsonify({"error":"There is already an account associated to this email"}), 400
    
    new_user = User (email = email)
    new_user.set_password(password)

    db.session.add(new_user)
    db.session.commit()
    return jsonify("Your user has been created successfully"), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error":"Missing data, please fill all the fields"}), 400
    
    existing_user = db.session.execute(select(User).where(User.email == email)).scalar_one_or_none()

    if existing_user is None:
        return jsonify({"error":"Incorrect email or password"}), 400
    if existing_user.check_password(password):
        access_token = create_access_token(identity=str(existing_user.id))
        return jsonify({"msg":"Login successfull", "token": access_token}), 200
    else:
        return jsonify({"error":"Incorrect email or password"}), 400

@api.route('/theXfiles', methods=['GET'])
@jwt_required()
def access_to_the_X_files():
    user_id = get_jwt_identity()
    user = db.session.get(User, int(user_id))
    if not user:
        return jsonify({"error":"User not found"}), 404
    return jsonify("W3lc0m3, y0u hav3 acc3ss t0 th3 X fil3s, n0w y0u kn0w th3 truth. B3 CAR3FUL!!"), 200


    