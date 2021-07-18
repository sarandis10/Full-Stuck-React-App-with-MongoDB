# Full Stuck React app using Mongo DB as database
We have created a site that you can look for workplaces anywhere in the world. 

1.0 if for any reason you cant run this app email me on sarandis10@hotmail.com and i will send you a zipped version of it. 

# 2.0 to run the app
2.1 run the mongo DB server

2.2 go to the app and inside the name-test folder in terminal run the commands yarn, yarn seed and yarn serve.
you need to seed the DB and download all the node modules. 
if mongoose throws an error download it "yarn add mongoose"
![image](https://user-images.githubusercontent.com/43549151/126072605-0390f1d2-cdaa-4cb7-9830-23ece64b8368.png)


2.3 make sure the server runs and then navigate to the client folder.
2.4 do yarn and yarn run the site should look something like this:

![image](https://user-images.githubusercontent.com/43549151/126072204-05d4e2b8-65bc-4da5-a3fb-95f50ec03631.png)

# 3.0 Technologies used 
3.1 We have created a backed API with basic authorization via a TOKEN

3.2 data are acquired from a seed file

3.3 under the models folder we have created 2 schemas. one for the data we populated on the seeds file and one for the uses which are used to login to the app

![image](https://user-images.githubusercontent.com/43549151/126072554-0807423d-72ef-482b-a9f7-2d13625ab162.png)

3.4 we connedcted the Schema with the DB via a mongoose model

![image](https://user-images.githubusercontent.com/43549151/126072542-96162fe7-71d1-4b55-a9f4-3a10ba96d9c7.png)

3.5 we have used jsonwebtoken and bcrypt to encript and decript the Token. get the payload data check if it is on the correct format use it to login our users.
this is under the secure route.js 
![image](https://user-images.githubusercontent.com/43549151/126072674-9cf4b78f-d3a9-4d01-85a2-9cc36a44926e.png)

3.6 the logic of the back end lives on the controllers -> workspaces where we have functionality for GET, DELETE, ADD a new workspace. We havent implemented a PUT request
![image](https://user-images.githubusercontent.com/43549151/126072812-2332fe5e-cf7f-4fb1-bba1-bf5fb19dd67f.png)

3.7 Routes have been created on a separate file called router
![image](https://user-images.githubusercontent.com/43549151/126072886-14d0e686-96bd-46e0-bc80-53c646bf08ea.png)

3.8 constants that used quite often live on a separate file and exported directly 





