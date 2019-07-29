# weather-app
Weather App using openweathermapapi

Download the dockerfile, and run the following commands:

docker build -t weather-app .

docker images

docker run -p 3000:3000 -d weather-app


After the run command, go to localhost:3000. You should be able to see the app.

