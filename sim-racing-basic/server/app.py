from flask_restful import Resource, reqparse
from config import app, db, api
from models import User, Wheel, Pedals, SimCockpit


# Create tables
with app.app_context():
    db.create_all()
# Resource Parsers
user_parser = reqparse.RequestParser()
user_parser.add_argument('username', type=str, help='Username is required', required=True)
user_parser.add_argument('email', type=str, help='Email is required', required=True)
user_parser.add_argument('_password_hash', type=str, help='Password hash is required', required=True)

product_parser = reqparse.RequestParser()
product_parser.add_argument('user_id', type=int, help='User ID is required', required=True)
product_parser.add_argument('brand', type=str, help='Brand is required', required=True)
product_parser.add_argument('img', type=str, help='Image is required', required=False)  # Assuming image is a URL
product_parser.add_argument('model', type=str, help='Model is required', required=True)
product_parser.add_argument('price', type=float, help='Price is required', required=True)

# Resources
class UserResource(Resource):
    def post(self):
        args = user_parser.parse_args()
        new_user = User(username=args['username'], email=args['email'], _password_hash=args['_password_hash'])
        db.session.add(new_user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201

class WheelResource(Resource):
    def post(self):
        args = product_parser.parse_args()
        new_wheel = Wheel(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_wheel)
        db.session.commit()
        return {'message': 'Wheel created successfully'}, 201

class PedalsResource(Resource):
    def post(self):
        args = product_parser.parse_args()
        new_pedals = Pedals(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_pedals)
        db.session.commit()
        return {'message': 'Pedals created successfully'}, 201

class SimCockpitResource(Resource):
    def post(self):
        args = product_parser.parse_args()
        new_sim_cockpit = SimCockpit(user_id=args['user_id'], brand=args['brand'], img=args['img'], model=args['model'], price=args['price'])
        db.session.add(new_sim_cockpit)
        db.session.commit()
        return {'message': 'Sim Cockpit created successfully'}, 201

# API Routes
api.add_resource(UserResource, '/users')
api.add_resource(WheelResource, '/wheels')
api.add_resource(PedalsResource, '/pedals')
api.add_resource(SimCockpitResource, '/cockpits')

if __name__ == '__main__':
    app.run(debug=True)
