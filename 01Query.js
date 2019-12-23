/*
json file
Json and xml are standards for exchanging data

Mongodb  is under nosql while Oracle is sql and mysql is 
basically a open source version of sql and we will be using Javafx

When dealing with ports and sockets think about it as an apartment
building and routing to a specific apartment

mongod
localhost:27017
127.0.0.1 :27017
gdd 27017

copy from curlly bracket to curlly bracket when converting json to java


db.hereos.find(selection, projection)
projection example
db.heroes.find({}, {name: 1, alias: 1 })
selection example
db.heroes.find({company: "dc"}, { name: 1, alias: 1, _id: 0 })
where company = "dc"  [SELECTION]
is the same as 
Select * [projection] from heroes
like in Oracle SQL class
*/

/*
use heroesdb
*/

 db = db.getSisterDB("herodb")

p1 ={_id:2000, company: "marvel",
       name: "tony starks", alias: "Iron Man", 
         abilities: [{ability: "running", level: 5 }
                    ,{ability: "flying", level: 8}
                    ,{ability: "Strength", level: 9}
                    ,{ability: "wealth", level: 10}
                    ,{ability: "intelligence", level: 10} ] }

db.heroes.insert(p1)

p2 ={_id:2001, company: "dc",
name: "bruce wayne", alias: "Batman", 
    abilities:  [{ability: "running", level: 5 }
                ,{ability: "Strength", level: 5}
                ,{ability: "wealth", level: 10}
                ,{ability: "intelligence", level: 10} ] }

db.heroes.insert(p2)


p3 ={_id:2002, company: "marvel",
name: "carol danvers", alias: "Captain Marvel", 
    abilities:  [{ability: "running", level: 8 }
                ,{ability: "flying", level: 10}
                ,{ability: "Strength", level: 10}
                ,{ability: "wealth", level: 4}
                ,{ability: "intelligence", level: 7} ] }

db.heroes.insert(p3)
 

p4 ={_id:2003, company: "marvel",
    name: "Bruce Banner", alias: "Hulk", 
        abilities:  [{ability: "running", level: 7 }
                    ,{ability: "Strength", level: 10}
                    ,{ability: "wealth", level: 4}
                    ,{ability: "intelligence", level: 10} ] }

db.heroes.insert(p4)
