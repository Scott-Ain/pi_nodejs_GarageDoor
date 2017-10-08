## Raspberry pi IoT Garage door opener

### Getting Started
If you haven't already, install git and node.js on your device.

1. Fork or clone this repository onto your device. 
2. In your console, change directory to the repository then run `npm install` to install the required components.
3. Run `touch .env` to create your hidden, gitignored environment config file.
4. In .env, configure your environment as follows:
    * `PORT=` `8000`
    * `PASS=` Whatever you want your password to be
5. Run `npm start` to launch the server

When you make a POST request to the server, follow this structure:
`http://ipaddresshere/API/switches/door1?password=yourpassword`
Curl on a linux box is great for this.
eg:
curl --data "" http://youripaddress:8000/API/garages/door1?password='yourpassword'

### Next Steps
Configure the Python files to suit your needs and the GPIO pins you used. 
