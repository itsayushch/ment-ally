import json
from flask import Flask, request
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from bson import json_util

app = Flask(__name__)

load_dotenv()

print(os.getenv('MONGO_URL'))

# Connect to the MongoDB database (you should replace the URL with your MongoDB URL)
client = MongoClient(os.getenv('MONGO_URL'))
db = client['database']

bg_collection = db['beginner']
ex_collection = db['expert']

def jsonify(data):
    return json.loads(json_util.dumps(data))


######################################## Beginners ####################################################

@app.route('/', methods=['GET'])
def create_beginner():
    return jsonify({"message": "Success"}), 200

@app.route('/create/beginner', methods=['POST'])
def create_beginner():
    data = request.get_json()
    if data:
        beginner_id = bg_collection.insert_one(data).inserted_id
        return jsonify({"message": "Beginner created", "bg_id": str(beginner_id)}), 201
    else:
        return jsonify({"error": "Invalid data"}), 400

@app.route('/beginners', methods=['GET'])
def list_beginners():
    beginners = bg_collection.find({})
    # for beginner in beginners:
    #     beginner['_id'] = str(beginner['_id'])
    return jsonify(beginners), 200

@app.route('/beginners/<bg_id>', methods=['GET'])
def get_beginner(bg_id):
    bg = bg_collection.find_one({"user_id": bg_id})
    if bg:
        return jsonify(bg), 200
    else:
        return jsonify({"error": "Beginner not found"}), 404

@app.route('/beginners/<bg_id>', methods=['PUT'])
def update_beginner(bg_id):
    data = request.get_json()
    if data:
        result = bg_collection.update_one({"user_id": bg_id}, {"$set": data})
        if result.modified_count:
            return jsonify({"message": "Beginner updated"}), 200
        else:
            return jsonify({"error": "Beginner not found"}), 404
    else:
        return jsonify({"error": "Invalid data"}), 400

@app.route('/beginners/<bg_id>', methods=['DELETE'])
def delete_beginner(bg_id):
    result = bg_collection.delete_one({"user_id": bg_id})
    if result.deleted_count:
        return jsonify({"message": "Beginner deleted"}), 200
    else:
        return jsonify({"error": "Beginner not found"}), 404




######################################## Experts ####################################################


@app.route('/create/expert', methods=['POST'])
def create_expert():
    data = request.get_json()
    if data:
        expert_id = ex_collection.insert_one(data).inserted_id
        return jsonify({"message": "Expert created", "ex_id": str(expert_id)}), 201
    else:
        return jsonify({"error": "Invalid data"}), 400

@app.route('/experts', methods=['GET'])
def list_experts():
    experts = ex_collection.find({})
    return jsonify(experts), 200

@app.route('/experts/<ex_id>', methods=['GET'])
def get_expert(ex_id):
    exp = ex_collection.find_one({"user_id": ex_id})
    if exp:
        return jsonify(exp), 200
    else:
        return jsonify({"error": "Expert not found"}), 404

@app.route('/experts/<ex_id>', methods=['PUT'])
def update_expert(ex_id):
    data = request.get_json()
    if data:
        result = bg_collection.update_one({"user_id": ex_id}, {"$set": data})
        if result.modified_count:
            return jsonify({"message": "Expert updated"}), 200
        else:
            return jsonify({"error": "Expert not found"}), 404
    else:
        return jsonify({"error": "Invalid data"}), 400


@app.route('/experts/<ex_id>', methods=['DELETE'])
def delete_expert(ex_id):
    result = ex_collection.delete_one({"user_id": ex_id})
    if result.deleted_count:
        return jsonify({"message": "Expert deleted"}), 200
    else:
        return jsonify({"error": "Expert not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)


