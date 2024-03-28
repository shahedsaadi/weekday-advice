import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res)=>{

    const today = new Date();   //"March 30, 2024 01:15:00", you can specify a specific date
    const day = today.getDay(); // getDay() method returns the day of the week (0 to 6)
    // console.log(day);

    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6){  // 0 = Sunday, 6 = Saturday
         type = "the weekend";
         adv = "it's time to have some fun";
    }

   res.render("index.ejs", {
    dayType: type,
    advice: adv
   });
});


app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
})