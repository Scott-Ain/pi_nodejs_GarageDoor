# Edit line 9, 11 & 13 to match your chosen GPIO pin


import RPi.GPIO as GPIO

import time



GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)



GPIO.setup(27, GPIO.OUT)


GPIO.output(27,GPIO.LOW)


time.sleep(0.5)


GPIO.output(27, GPIO.HIGH)

GPIO.cleanup()