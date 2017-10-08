# Edit line 9, 11 & 13 to match your chosen GPIO pin


import RPi.GPIO as GPIO

import time



GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)



GPIO.setup(22, GPIO.OUT)


GPIO.output(22,GPIO.LOW)


time.sleep(0.5)


GPIO.output(22, GPIO.HIGH)

GPIO.cleanup()