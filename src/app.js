const express = require('express');
const app = express();
const port = process.env.PORT || 8000;   //for global hosting of app
const hbs = require('hbs');
const path = require('path');

//public static path
//console.log(`Our root folder path is : ${path.join(__dirname)}`);
//Our root folder path is : F:\javaprog\javahomepractise\Web Development\ExpressJS Tutorial\express_weather_app\src
//console.log(`Our root folder path is : ${path.join(__dirname,"../public")}`);
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');  //for template engine hbs.
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));  //built-in middleware


//routing
//app.get(route, callback);
app.get("/", (req, res) =>
              {
                // res.send(`<h1>This is home page</h1>`);
                res.render('index');  //after installing hbs.
              }
      );

app.get("/about", (req, res) =>
                    {
                      // res.send(`<h1>This is About page</h1>`);
                      res.render('about');
                    }
            );

app.get("/weather", (req, res) =>
                    {
                        // res.send(`<h1>This is weather page</h1>`);
                        res.render('weather');
                    }
        );

app.get("*", (req, res) =>
              {
                    // res.send(`<h1>404 error page</h1>`);
                    res.render('404error',{
                                              error_msg :`Opps! Page Not Found`
                                          }
                              );
              }
        );

app.get("/about/*", (req, res) =>
                      {
                            // res.send(`<h1>404 error page</h1>`);
                            res.render('404error',{
                                                      error_msg :`Opps! Page Not Found`
                                                  }
                                      );
                      }
        );

app.get("/weather/*", (req, res) =>
                      {
                            // res.send(`<h1>404 error page</h1>`);
                            res.render('404error',{
                                                      error_msg :`Opps! Page Not Found`
                                                  }
                                      );
                      }
        );



app.listen(port, () =>
                  {
                      console.log(`This is port no. ${port}`);
                  }
          );
