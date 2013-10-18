$ curl -O http://media.mongodb.org/zips.json

                                 Dload  Upload   Total   Spent    Left  Speed
100 2803k  100 2803k    0     0  1807k      0  0:00:01  0:00:01 --:--:-- 1848k
$
$ # this is just informational for you:
$ md5 zips.json
MD5 (zips.json) = 4854d69c2ac389f334c0abff03d96259
$
$ # now import it ...

> mongoimport --db pcat --collection zips < zips.json
> db.zips.count()
29467

Question: consider the state with the 4th most zip codes in it. How many zip codes does that state have? Use the aggregation framework to query this.

> db.zips.aggregate( { $group : { _id : "$state", countZips : { $sum : 1 } }}, { $sort: {countZips:-1}}, {$limit:4} );
answer: 1458
