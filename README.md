# Full Stuck React app using Mongo DB as database
We have created a site that you can look for workplaces anywhere in the world. 

1.0 if for any reason you cant run this app email me on sarandis10@hotmail.com and i will send you a zipped version of it. 

# 2.0 to run the app
2.1 run the mongo DB server

2.2 go to the app and inside the name-test folder in terminal run the commands yarn, yarn seed and yarn serve.
you need to seed the DB and download all the node modules. 
if mongoose throws an error download it "yarn add mongoose"

2.3 make sure the server runs and then navigate to the client folder.
2.4 do yarn and yarn run the site should look something like this:

![image](https://user-images.githubusercontent.com/43549151/126072204-05d4e2b8-65bc-4da5-a3fb-95f50ec03631.png)

# 3.0 Technologies used 
3.1 We have created a backend API with basic authorisation via a TOKEN

3.2 data are aquired from a seed file

3.3 under the models folder we have created 2 schemas. one for the data we populated on the seeds file and one for the uses which are used to login to the app

![image](https://user-images.githubusercontent.com/43549151/126072554-0807423d-72ef-482b-a9f7-2d13625ab162.png)

3.4 we connedcted the Schema with the DB via a mongoose model

![image](https://user-images.githubusercontent.com/43549151/126072542-96162fe7-71d1-4b55-a9f4-3a10ba96d9c7.png)
