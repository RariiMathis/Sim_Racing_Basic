# seed.py
from app import app, db  # Import the Flask app and SQLAlchemy db object
from models import User, Wheel, Pedals, SimCockpit

# Function to seed the database
def seed_database():
    with app.app_context():
        # Create users
        user1 = User(username='user1', email='user1@example.com', _password_hash='hashed_password1')
        user2 = User(username='user2', email='user2@example.com', _password_hash='hashed_password2')

        # Create wheels
        wheel1 = Wheel(user_id=1, brand='Brand1', model='Model1', price=100.00)
        wheel2 = Wheel(user_id=2, brand='Brand2', model='Model2', price=150.00)

        # Create pedals
        pedals1 = Pedals(user_id=1, brand='Brand3', model='Model3', price=75.00)
        pedals2 = Pedals(user_id=2, brand='Brand4', model='Model4', price=120.00)

        # Create sim cockpits
        cockpit1 = SimCockpit(user_id=1, brand='Brand5', model='Model5', price=500.00)
        cockpit2 = SimCockpit(user_id=2, brand='Brand6', model='Model6', price=700.00)

        # Add data to the session and commit to the database
        db.session.add_all([user1, user2, wheel1, wheel2, pedals1, pedals2, cockpit1, cockpit2])
        db.session.commit()

# Run the seed function
seed_database()
