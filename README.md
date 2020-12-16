# Assignment 2 - Tile Matching Game (MongoDB)

To view the Vue repo, please click
[here](https://github.com/mabelsueh/trent-assignment-2-vue).

# Sample Collections & Documents
1. Collection: users
```
{
"_id”:"u1",
"username":"guest1",
"email":"guest1@thisemail.com",
"password":"Asdf1234"
}
```
2. Collection: scoreboard
```
{
"_id":"s1",
"username":"guest1",
"scoreInSeconds":{"$numberLong":"90"},
"datePlayed":{"$date":{"$numberLong":"1609430400000"}}
}
```

3. Collection: tile_images
```
{
"_id":"ti1",
"name":"sunflower",
"imageUrl":""
}
```