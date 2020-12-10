# Structure 
This branch provided the code for structure of your project. When we worked on client project or big project then we have to handle design pattern and architecture
that easily understand by other developer.

### Fonts
How to use fonts in react-native.

- Create a fonts folder in assets folder in your project.
- Add all fonts files in the fonts folder.
- If you use react-native version < 0.59 then, add below code in package.json file.
```sh
"rnpm":{
    "assets":[
      "./assets/fonts/"
    ]
}
```
if react-native version >= 0.59, create a file `react-native.config.js` in root of project, add below code.
```sh 
module.exports = {
    assets: ["./src/assets/fonts"]
}
```
4. execute `react-native link` command
