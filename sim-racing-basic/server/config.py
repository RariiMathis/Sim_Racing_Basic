# config.py

class Config:
    DEBUG = False
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'your_secret_key_here'

class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///dev_database.db'  # Development database URI

class ProductionConfig(Config):
    SECRET_KEY = 'your_secure_production_secret_key'
    SQLALCHEMY_DATABASE_URI = 'postgresql://user:password@localhost/production_database'
