# e-Commerce Database with Sequelize

This is an example of express.js paired with sequelize in an e-commerce setting. 

When using this app, be sure to install the approprial node modules. An example script might look like
```
npm i
mysql -u {user} -p
Enter password: {password}

SOURCE ./db/schema.sql
exit

npm run seed
npm run watch
npm run start
```

You may need to make a .env file with the information for 
- DB_NAME='{db name}'
- DB_PASSWORD='{db pass}'
- DB_USER='{db user}'


This project is prepared for Insomnia for its get/post/put/delete requests. 
Download insomnia at [this link](https://insomnia.rest/)

## Project Info: 
This project was made as part of the UW coding bootcamp. 
- Github repo: [eCommerceSQLize](https://github.com/tjansson-ui/eCommerceSQLize)
- Video Demo available at: [tbd]()

### Node packages include: 
- [**Node.js**](https://nodejs.org/en) 
- [**Express.js**](https://expressjs.com/) 
- [**MySQL2**](https://www.npmjs.com/package/mysql2)
- [**Sequelize**](https://www.npmjs.com/package/sequelize)