from config import app, db
from models import User, Wheel, Pedals, SimCockpit
from werkzeug.security import generate_password_hash

def seed_users():
    # Clear existing users
    db.session.query(User).delete()

    users = [
        {"username": "user1", "email": "user1@example.com", "_password_hash": generate_password_hash("password1")}
        # Add more user data as needed
    ]

    for user_data in users:
        user = User(**user_data)
        db.session.add(user)

    db.session.commit()

def seed_wheels():
    wheels = [
        {'user_id': 1, 'brand': 'Logitech', 'model': 'G920/G29', 'price': 299.99, 'img': 'https://images.squarespace-cdn.com/content/v1/603a9aca25c288203141fb81/1614616508882-DJ5Q9S4312SFQ9Y0Z96V/Logitech+G29+and+G920'},
        {'user_id': 2, 'brand': 'Logitech', 'model': 'G923', 'price': 349.99, 'img': 'https://betanews.com/wp-content/uploads/2020/08/g923-01.png'},
        {'user_id': 2, 'brand': 'Logitech', 'model': 'Pro Racing Wheel', 'price': 999.99, 'img': 'https://www.hartware.de/wp-content/uploads/2022/09/logitech-pro-racing-wheel-scaled.jpg'},
        {'user_id': 2, 'brand': 'Thrustmaster', 'model': 'T300', 'price': 399.99, 'img': 'https://brain-images-ssl.cdn.dixons.com/7/6/10166467/u_10166467.jpg'},
        {'user_id': 2, 'brand': 'Thrustmaster', 'model': 'TX Racing Wheel Leather Edition', 'price': 499.99, 'img': 'https://www.bhphotovideo.com/images/images2000x2000/thrustmaster_4469021_tx_racing_wheel_leather_1208439.jpg'},
        {'user_id': 2, 'brand': 'Thrustmaster', 'model': 'T818 Ferrari SF1000', 'price': 1099.99, 'img': 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105935256/fee_786_587_png'},
        {'user_id': 2, 'brand': 'Fanatec', 'model': 'Gran Turismo Pro DD', 'price': 699.95, 'img': 'https://www.racedepartment.com/news/fanatec-gran-turismo-dd-pro-wheel-and-pedal-set-review.309/cover-image'},
        {'user_id': 2, 'brand': 'Fanatec', 'model': 'Podium Wheel Base DD1 QR2', 'price': 999.95, 'img': 'https://fanatec.com/media/image/4f/d1/31/DD1_preview_3.jpg'},
        {'user_id': 2, 'brand': 'Fanatec', 'model': 'Podium Wheel Base DD2', 'price': 1499.95, 'img': 'https://th.bing.com/th/id/OIP.jY4wT0JVa3W9I60KWXZrLgAAAA?rs=1&pid=ImgDetMain'},
        {'user_id': 2, 'brand': 'Simucube ', 'model': 'Simucube 2 Sport Wheel base', 'price': 1199.00, 'img': 'https://www.mrpltd.co.nz/wp-content/blogs.dir/1127/files/2021/09/SC2SPORT.jpg'},
        {'user_id': 2, 'brand': 'Simucube ', 'model': 'Simucube 2 Pro Wheel base', 'price': 1379.00, 'img': 'https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/642658_328963_01_front_zoom.jpg'},
        {'user_id': 2, 'brand': 'Simucube ', 'model': 'Simucube Tahko Round Black Edition x Simucube Wheel base', 'price': 1917.00, 'img': 'https://simracewebshop.com/wp-content/uploads/2022/10/simucube-sport-tahko-wheel-e1665666544565.jpg'},
        {'user_id': 2, 'brand': 'Ascher Racing', 'model': 'Ascher Racing f28-SC V2 Sim Racing Steering Wheel-Wireless', 'price': 786.45, 'img': 'https://shop.gperformance.eu/wp-content/uploads/2021/03/shop.gperformance.eu-Ascher-Racing-F28-SC-V2-iso-view.jpg'},
        {'user_id': 2, 'brand': 'Ascher Racing', 'model': 'Ascher Racing F64 V3 Sim Racing Steering Wheel', 'price': 1153.95, 'img': 'https://www.simracingbay.com/wp-content/uploads/2022/03/F64-front-side.png'},
        {'user_id': 2, 'brand': 'Simxperience', 'model': 'AccuForce Pro V2 Steering System', 'price': 1299.00, 'img': 'https://www.simxperience.com/web/image/product.image/32/image_1024/AccuForce%20Pro%20V2%20Steering%20System?unique=589c595'},
        {'user_id': 2, 'brand': 'Precision Sim Engineering', 'model': 'GT3 Steering Wheel', 'price': 966.11, 'img': 'https://images.squarespace-cdn.com/content/v1/5b33829a31d4df8184da67bf/1542892954804-1BNZDBE8G0QLDTJLMZ9W/GT3+Shop.jpg?format=750w'},
        {'user_id': 2, 'brand': 'Precision Sim Engineering', 'model': 'GT1 Steering Wheel', 'price': 1618.09, 'img': 'https://images.squarespace-cdn.com/content/v1/5b33829a31d4df8184da67bf/1542892994499-7JOJLTBWX0AEEE4VRT78/GT1+Shop.jpg?format=750w'},
        {'user_id': 2, 'brand': 'Precision Sim Engineering', 'model': 'LM-X Steering Wheel', 'price': 2477.33, 'img': 'https://images.squarespace-cdn.com/content/v1/5b33829a31d4df8184da67bf/1605823694706-5PK239X5SCW9NZPPJYOV/LM-X+Shop.jpg?format=750w'},
        {'user_id': 2, 'brand': 'Ricmotech', 'model': 'Min-Mite Direct-Drive Steering system base', 'price': 1295.00, 'img': 'https://th.bing.com/th/id/OIP.AAtzuLb6qM_jVBx2Zu4XwgHaHa?rs=1&pid=ImgDetMain'},
        # Add more wheel data as needed
    ]

    for wheel_data in wheels:
        wheel = Wheel(**wheel_data)
        db.session.add(wheel)

    db.session.commit()

def seed_pedals():
    pedals = [
        {'user_id': 1, 'brand': 'Logitech', 'model': 'Pro Racing Pedals', 'price': 349.00, 'img': 'https://th.bing.com/th/id/OIP.ehJXfITu6NzHM-CSHmEsWAAAAA?rs=1&pid=ImgDetMain'},
        {'user_id': 2, 'brand': 'Thrustmaster', 'model': 'T3PM', 'price': 129.99, 'img': 'https://www.bhphotovideo.com/images/images2000x2000/thrustmaster_4060210_t3pm_pedal_set_1663182.jpg'},
        {'user_id': 1, 'brand': 'Fanatec', 'model': 'CSL Pedals', 'price': 79.99, 'img': 'https://example.com/pedals1.jpg'},
        {'user_id': 2, 'brand': 'Fanatec', 'model': 'CSL Pedals LC', 'price': 199.95, 'img': 'https://live.staticflickr.com/8524/29247468925_cd8a6ea8b6_k.jpg'},
        {'user_id': 1, 'brand': 'Fanatec', 'model': 'CSL Elite Pedals V2', 'price': 299.95, 'img': 'https://fanatec.com/media/image/aa/1c/e5/Product_thumbnail_CSL_Elite_Pedals_V2_1.jpg'},
        {'user_id': 2, 'brand': 'Fanatec', 'model': 'ClubSport Pedals V3', 'price': 399.95, 'img': 'https://fanatec.com/media/image/65/f9/5a/CSP_V3_preview.jpg'},
        {'user_id': 1, 'brand': 'Fanatec', 'model': 'ClubSport Pedals V3 Inverted', 'price': 599.95, 'img': 'https://th.bing.com/th/id/R.543d6938d25b452856053efcf411c1a0?rik=37nYR0kIQtQYQA&riu=http%3a%2f%2fwww.isrtv.com%2fwp-content%2fuploads%2f2017%2f02%2fCSPV3i_02.jpg&ehk=6DF4yP0Jr8UoqrI28YJeW4kKufzrjm3VSPslrzre5%2b4%3d&risl=&pid=ImgRaw&r=0 '},
        {'user_id': 2, 'brand': 'Simucube', 'model': 'Simucube Pedals', 'price': 2889.00, 'img': 'https://shop.gperformance.eu/wp-content/uploads/2023/05/Simucube-ActivePedal-3-pedal-set-1000x1000.jpg'},
        {'user_id': 2, 'brand': 'Ricmotec', 'model': 'GTpro1-S Overhung Professional Simulator Pedal Set-Gen 2', 'price': 1299.95, 'img': 'https://www.ricmotech.com/thumbnail.asp?file=assets/images/RGR-GTPP1SW-S-3.jpg&maxx=500&maxy=0'},
        {'user_id': 2, 'brand': 'Ricmotec', 'model': 'GTpro3 Tilton Professional Simultor Pedal Set-Gen 2', 'price': 1695.95, 'img': 'https://www.ricmotech.com/assets/images/rgr-gtpp3xtf_base%20plate2.jpg'},
        # Add more pedals data as needed
    ]

    for pedals_data in pedals:
        pedals_item = Pedals(**pedals_data)
        db.session.add(pedals_item)

    db.session.commit()

def seed_sim_cockpits():
    sim_cockpits = [
        {'user_id': 1, 'brand': 'Playseat', 'model': 'Playseat Challenge SimRacing Cockpit', 'price': 259.99, 'img': 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51ccJG-+OaL._AC_SX569_.jpg'},
        {'user_id': 2, 'brand': 'Playseat', 'model': 'Playseat Trophy', 'price': 645.54, 'img': 'https://playseat.com/media/catalog/product/cache/05ed9395b6f36ffdbd421674feeb3f04/p/l/playseat-trophy-black-01_1.jpg'},
        {'user_id': 2, 'brand': 'Playseat', 'model': 'Playseat Formule', 'price': 1076.62, 'img': 'https://playseat.com/media/catalog/product/cache/05ed9395b6f36ffdbd421674feeb3f04/p/l/playseat-f1-black-01.webp'},
        {'user_id': 2, 'brand': 'Playseat', 'model': 'Playseat Sensation Pro', 'price': 1615.47, 'img': 'https://playseat.com/media/catalog/product/cache/05ed9395b6f36ffdbd421674feeb3f04/p/l/playseat-sensation-actifit-01.webp'},
        {'user_id': 2, 'brand': 'Playseat', 'model': 'Playseat Formula Intelligence', 'price': 2693.17, 'img': 'https://playseat.com/media/catalog/product/cache/05ed9395b6f36ffdbd421674feeb3f04/p/l/playseat-intelligence-mercedes-01.webp'},
        {'user_id': 2, 'brand': 'Vevor', 'model': 'Racing Simulator Cockpit Steering Wheel Stand', 'price': 81.99, 'img': 'https://img.vevorstatic.com/us%2FG29YXARTZDJ000001V0%2Foriginal_img-v7%2Fracing-wheel-stand-m100-1.2.jpg?timestamp=1632474029000&format=webp'},
        {'user_id': 2, 'brand': 'Diwangus', 'model': 'Racing Wheel Stand Foldable Steering Wheel', 'price': 112.99, 'img': 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61vqluV35cL._SL1500_.jpg'},
        {'user_id': 2, 'brand': 'Minnher', 'model': 'Foldable Reinforced Steering Racing Wheel Stand', 'price': 142.00, 'img':'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Q8R061g2L._SL1500_.jpg'},
        {'user_id': 2, 'brand': 'Extreme', 'model': 'Sim Racing Wheel Stand Cockpit SXT V2', 'price': 249.00, 'img': 'https://th.bing.com/th?id=OPHS.gZYhc1%2bMFPzypw474C474&w=592&h=550&o=5&pid=21.1'},
        {'user_id': 2, 'brand': 'Next Level Racing ', 'model': 'F-GT lite Formula', 'price': 367.62, 'img': 'https://th.bing.com/th?id=OPHS.EZ4ecibiMTqW3g474C474&w=592&h=550&o=5&pid=21.1'},
        # Add more sim cockpit data as needed
    ]

    for cockpit_data in sim_cockpits:
        cockpit = SimCockpit(**cockpit_data)
        db.session.add(cockpit)

    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_users()
        seed_wheels()
        seed_pedals()
        seed_sim_cockpits()
