from flask_restful import Resource, reqparse
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_cors import CORS
from config import app, db, api, CORS, Migrate
from models import User, Wheel, Pedals, SimCockpit, Wishlist

# Create tables
with app.app_context():
    db.create_all()

# Resource Parsers
user_parser = reqparse.RequestParser()
user_parser.add_argument('username', type=str, help='Username is required', required=True)
user_parser.add_argument('email', type=str, help='Email is required', required=True)
user_parser.add_argument('password', type=str, help='Password is required', required=True)

product_parser = reqparse.RequestParser()
product_parser.add_argument('user_id', type=int, help='User ID is required', required=True)
product_parser.add_argument('brand', type=str, help='Brand is required', required=True)
product_parser.add_argument('img', type=str, help='Image is required', required=False)
product_parser.add_argument('model', type=str, help='Model is required', required=True)
product_parser.add_argument('price', type=float, help='Price is required', required=True)

wishlist_parser = reqparse.RequestParser()
wishlist_parser.add_argument('user_id', type=int, help='User ID is required', required=True)
wishlist_parser.add_argument('brand', type=str, help='Brand is required', required=True)
wishlist_parser.add_argument('img', type=str, help='Image is required', required=False)
wishlist_parser.add_argument('model', type=str, help='Model is required', required=True)
wishlist_parser.add_argument('price', type=float, help='Price is required', required=True)

# Resources
class UserResource(Resource):
    def get(self, user_id=None):
        if user_id:
            user = User.query.get(user_id)
            if user:
                return {'user': {'user_id': user.user_id, 'username': user.username, 'email': user.email}}
            else:
                return {'error': 'User not found'}, 404
        else:
            users = User.query.all()
            user_data = [{'user_id': user.user_id, 'username': user.username, 'email': user.email} for user in users]
            return user_data

    def post(self):
        args = user_parser.parse_args()

        # Validate password strength (you can customize this based on your requirements)
        if len(args['password']) < 8:
            return {'message': 'Password must be at least 8 characters long'}, 400

        # Hash the password before storing it
        hashed_password = generate_password_hash(args['password'], method='sha256')

        new_user = User(username=args['username'], email=args['email'], _password_hash=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201

class WheelResource(Resource):
    def get(self, wheel_id=None):
        if wheel_id:
            wheel = Wheel.query.get(wheel_id)
            if wheel:
                return {'wheel': {'id': wheel.id, 'user_id': wheel.user_id, 'brand': wheel.brand, 'img': wheel.img, 'model': wheel.model, 'price': wheel.price}}
            else:
                return {'error': 'Wheel not found'}, 404
        else:
            wheels = Wheel.query.all()
            wheel_data = [{'id': wheel.id, 'user_id': wheel.user_id, 'brand': wheel.brand, 'img': wheel.img, 'model': wheel.model, 'price': wheel.price} for wheel in wheels]
            return wheel_data

    def post(self):
        args = product_parser.parse_args()
        new_wheel = Wheel(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_wheel)
        db.session.commit()
        return {'message': 'Wheel created successfully'}, 201

class PedalsResource(Resource):
    def get(self, pedals_id=None):
        if pedals_id:
            pedals = Pedals.query.get(pedals_id)
            if pedals:
                return {'pedals': {'pedals_id': pedals.pedals_id, 'user_id': pedals.user_id, 'brand': pedals.brand, 'img': pedals.img, 'model': pedals.model, 'price': pedals.price}}
            else:
                return {'error': 'Pedals not found'}, 404
        else:
            all_pedals = Pedals.query.all()
            pedals_data = [{'pedals_id': pedals.pedals_id, 'user_id': pedals.user_id, 'brand': pedals.brand, 'img': pedals.img, 'model': pedals.model, 'price': pedals.price} for pedals in all_pedals]
            return pedals_data

    def post(self):
        args = product_parser.parse_args()
        new_pedals = Pedals(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_pedals)
        db.session.commit()
        return {'message': 'Pedals created successfully'}, 201

class SimCockpitResource(Resource):
    def get(self, cockpit_id=None):
        if cockpit_id:
            cockpit = SimCockpit.query.get(cockpit_id)
            if cockpit:
                return {'sim_cockpit': {'cockpit_id': cockpit.cockpit_id, 'user_id': cockpit.user_id, 'brand': cockpit.brand, 'img': cockpit.img, 'model': cockpit.model, 'price': cockpit.price}}
            else:
                return {'error': 'Sim Cockpit not found'}, 404
        else:
            all_cockpits = SimCockpit.query.all()
            cockpit_data = [{'cockpit_id': cockpit.cockpit_id, 'user_id': cockpit.user_id, 'brand': cockpit.brand, 'img': cockpit.img, 'model': cockpit.model, 'price': cockpit.price} for cockpit in all_cockpits]
            return cockpit_data

    def post(self):
        args = product_parser.parse_args()
        new_sim_cockpit = SimCockpit(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_sim_cockpit)
        db.session.commit()
        return {'message': 'Sim Cockpit created successfully'}, 201

class WishlistResource(Resource):
    def get(self, wishlist_id=None):
        if wishlist_id:
            wishlist_item = Wishlist.query.get(wishlist_id)
            if wishlist_item:
                return {'wishlist_item': {'id': wishlist_item.id, 'user_id': wishlist_item.user_id, 'brand': wishlist_item.brand, 'img': wishlist_item.img, 'model': wishlist_item.model, 'price': wishlist_item.price}}
            else:
                return {'error': 'Wishlist item not found'}, 404
        else:
            wishlist_items = Wishlist.query.all()
            wishlist_data = [{'id': item.id, 'user_id': item.user_id, 'brand': item.brand, 'img': item.img, 'model': item.model, 'price': item.price} for item in wishlist_items]
            return wishlist_data

    def post(self):
        args = wishlist_parser.parse_args()
        new_wishlist_item = Wishlist(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_wishlist_item)
        db.session.commit()
        return {'message': 'Item added to wishlist successfully'}, 201

    def delete(self, wishlist_id):
        wishlist_item = Wishlist.query.get(wishlist_id)
        if wishlist_item:
            db.session.delete(wishlist_item)
            db.session.commit()
            return {'message': 'Wishlist item deleted successfully'}, 200
        else:
            return {'error': 'Wishlist item not found'}, 404

# API Routes
api.add_resource(UserResource, '/api/users', '/api/users/<int:user_id>')
api.add_resource(WheelResource, '/api/wheels', '/api/wheels/<int:wheel_id>')
api.add_resource(PedalsResource, '/api/pedals', '/api/pedals/<int:pedals_id>')
api.add_resource(SimCockpitResource, '/api/cockpits', '/api/cockpits/<int:cockpit_id>')
api.add_resource(WishlistResource, '/api/wishlist', '/api/wishlist/<int:wishlist_id>')

if __name__ == '__main__':
    app.run(debug=True)