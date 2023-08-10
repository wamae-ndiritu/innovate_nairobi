# works with both python 2 and 3
from __future__ import print_function

import africastalking

# Set your app credentials
username = "emsusername"
api_key = "eab132df3e885ea19c769bf339a2ce2b4a766a5701cc4aa4859432912b9186f0"
# Initialize the SDK
africastalking.initialize(username, api_key)
# Get the voice service
voice = africastalking.Voice


class VOICE:
    def __init__(self, call_to):
        self.call_to = call_to

    def call(self):
        # Set your Africa's Talking phone number in international format
        callFrom = "+254730731216"
        # Set the numbers you want to call to in a comma-separated list
        try:
            # Make the call
            result = voice.call(callFrom, callTo=[self.call_to])
            print(result)
        except Exception as e:
            print("Encountered an error while making the call:%s" % str(e))


# if __name__ == '__main__':
#     VOICE().call()
# institution = '+254742079321'
# VOICE(institution).call()
