# hadiya_product_database


## How to Restore the database

1. Create an mysql docker container with username and password with database name "hadiya"
2. Restore the "V1__Create_Products_Table.sql" which helps you to create the product table in database
3. Once table is created restore the "V2__Insert_Dummy_Products.sql" which will put the data inside the table.