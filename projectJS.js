//Declares varible for regex and a list of the days
let textRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

document.getElementById("myButton").addEventListener('click', myWindow)


//Function to make the new window
function myWindow(event) {
    //Checks to see if the entered email is an email, if not it prevents user from submiting the form
    if (!textRegex.test(document.getElementById("Email").value)) {
        event.preventDefault();
        alert("Email is invalid. Please try again");
    } else {
        event.preventDefault();
        let Name = document.getElementById("myName").value;
        let Breakfast = document.getElementById("Breakfast").value
        let Morning_Snack = document.getElementById("Morning Snack").value
        let Lunch = document.getElementById("Lunch").value
        let Afternoon_snack = document.getElementById("Afternoon Snack").value
        let Dinner = document.getElementById("Dinner").value

        //Addes elements into the new window
        let myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");

        //Using a for loop to print the meal plan of all the days
        for (i = 0; i < 7; i++) {
            myText += ("<br>")
            myText += ("<strong>" + daysOfWeek[i] + "</strong>")
            myText += ("<br>Breakfast: " + Breakfast);
            myText += ("<br>Morning Snack: " + Morning_Snack);
            myText += ("<br>Lunch: " + Lunch);
            myText += ("<br>Afternoon Snack: " + Afternoon_snack);
            myText += ("<br>Dinner: " + Dinner + "<br>");
        }


        //End of html for the new page
        myText += ("</body>\n</html>");

        //Opens the window and writes all the stuff into it
        flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText);

        //Adds a print button
        let printButton = flyWindow.document.createElement('button')
        printButton.textContent = "Print this page"

        printButton.addEventListener("click", function() {
            flyWindow.print();
        })
        flyWindow.document.body.appendChild(printButton)

    }
}