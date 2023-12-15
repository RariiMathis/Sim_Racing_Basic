# models.py
from config import db


class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    _password_hash = db.Column(db.String(50), nullable=False)
    
    def __repr__(self):
        return f'<User {self.user_id}>'


class Wheel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    brand = db.Column(db.String(255), nullable=False)
    img = db.Column(db.String(255))
    model = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Wheel {self.id}>'


class Pedals(db.Model):
    pedals_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String, nullable=True)
    model = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    
    def __repr__(self):
        return f'<Pedals {self.pedals_id}>'


class SimCockpit(db.Model):
    cockpit_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String, nullable=True)
    model = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    
    def __repr__(self):
        return f'<SimCockpit {self.cockpit_id}>'


class Wishlist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'), nullable=False)
    brand = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String, nullable=True)
    model = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f'<Wishlist {self.id}>'
