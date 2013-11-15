routers
=======

daladala routes files


 This app can be used to find city bus routes in dar-es-salaam famous as 'daladala'
 You can select two bus stop source and your destination and we will show your route
  Or just point two points on a map and we will guess the route for you



 ## Developers ##
 

   Installation requirement.

  1  postgres 9.2 or later

  2   posgis and pgrouting

  3   apache && php 




 Installation
 
1  create a database on your postgres server.


2  load postgis & pgrouting extensions. user create extension 'extension name';

3  or just select those extension from the postgres new extension menu.


4   import/restore the database locate in root folder of this app under db folder.


5   copy the root folder to your webserver directory.


6  Locate your browser to the app eg. http://localhost:8080/routes


##  now the app is ready ##
