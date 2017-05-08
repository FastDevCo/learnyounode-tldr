# NodeSchool learnyounode-tldr / fast edition

Start by doing what https://github.com/workshopper/learnyounode tells you to do (install Node, npm, learnyounode)

`exercises` contains all the files necessary with boilerplate.
`solutions` contains a working solution if you get stuck (>5min for an assignment).

## Hints

These hints are a bit more straightforward than what `learnyounode` gives.

### Exercise 2

`.slice(2)` drops `node` and `program2.js` from args.
Now you just need to sum the items of a list :)

protip: the cool kids would use `.slice(2).map(...).reduce(...)` but there are other ways too.

### Exercise 3

to read contents of a file

`fs.readFileSync('filename').toString()`

to calculate occurrences of a substring or character with regexp:

`'foobarfoobarfoobar'.match(/foo/g).length === 3`

### Exercise 4

```javascript
fs.someAsyncMethod(param1, param2, (err, data) => {
  // this is the callback, do something with err and data
  if (err) throw err
  console.log(data)
})
```

### Exercise 5

* `list.filter` and ```x.endsWith(`.${ext}`)``` are gonna help in the filtering.
* `fs.readdir(dir, (err, list) => {})`

### Exercise 6

* `program6_module.js` is the only thing you need to touch
* callback wants **two** params: err and filteredFiles

### Exercise 7

* when http.get gives you a response (`res`)

```javascript
res.on('data', data => {
  // handle the data
})
```

### Exercise 8

* response can pipe data in binary stream
* a lib like `bl` makes it nice to use the stream:
  * `npm install bl`
  * `res.pipe(bl((err, data) => { /* handle the data */ }))`

### Exercise 9

* you can do a new get request inside the callback of a get request

### Exercise 10

* yeah, nobody wants to format Dates by hand so use this:
```javascript
// npm install dateformat
const dateFormat = require('dateformat')
dateFormat(new Date(), 'yyyy-mm-dd HH:MM')
```

### Exercise 11

* see the exercise base `program11.js`

### Exercise 12

* see the exercise base `program12.js` is in pseudocode - try to code it in JS!
  * it's gonna be similar to `program11.js`

### Exercise 12

* again, we have some pseudocode for you to write !
