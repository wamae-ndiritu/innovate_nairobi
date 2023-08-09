from math import radians, sin, cos, sqrt, atan2
from django.db.models import Emergency, Institution


class DistanceCalculator:
    @staticmethod
    def calculate_distance(lat1, lon1, lat2, lon2):
    # Radius of the Earth in kilometers
        Radius = 6371.0

        # defining variables for calculation
        lat1_rad = radians(lat1)
        lon1_rad = radians(lon1)
        lat2_rad = radians(lat2)
        lon2_rad = radians(lon2)

        dlon = lon2_rad - lon1_rad
        dlat = lat2_rad - lat1_rad
        
        #use some math to calculate the distance
        a = sin(dlat / 2)**2 + cos(lat1_rad) * cos(lat2_rad) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))

        distance = Radius * c
        return distance
    


    @staticmethod
    def find_nearest_institution(emergency):
        #feed emergency lat,long as parameter
        #get list of institutions 
        institutions = Institution.objects.all()
        shortest_distance = None
        nearest_institution = None

        for institution in institutions:
            distance = DistanceCalculator.calculate_distance(
                emergency.latitude, emergency.longitude,
                institution.latitude, institution.longitude
            )
            if shortest_distance is None or distance < shortest_distance:
                shortest_distance = distance
                nearest_institution = institution

        return shortest_distance, nearest_institution
