// ===============================
// NOVUS CODE BREAKER
// ===============================

// TIMER
let timeLeft = 30 * 60;
const timer = document.getElementById("timer");

const countdown = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timer.textContent = minutes + ":" + seconds;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timer.textContent = "00:00";
        alert("TIME'S UP! NOVUS SYSTEM LOCKED.");
    }

    timeLeft--;
}, 1000);


// ===============================
// CHALLENGE DATA
// ===============================

const challenges = [

    {
        name: "HTML_01.html",
        language: "HTML",
        points: 100,
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My College Page</title
</head>

<body>

    <h1>Welcome to My College<h1>

    <p>Welcome to our college website.</p>

    <hr>

    <h2>About the College</h2>

    <p>
        Our college provides quality education
        and many opportunities for students.
    </p>

    <h2>Courses Offered</h2>

    <ul>
        <li>BCA</li>
        <li>BBA<li>
        <li>BCOM</li>
        <li>BSc</li>
    </ul>

    <h2>College Timings</h2>

    <table border="1">
        <tr>
            <th>Day</th>
            <th>Time</th>
        </tr>

        <tr>
            <td>Monday</td>
            <td>9:00 AM - 5:00 PM</td>
        </tr>

        <tr>
            <td>Tuesday</td>
            <td>9:00 AM - 5:00 PM<td>
        </tr>

        <tr>
            <td>Wednesday</td>
            <td>9:00 AM - 5:00 PM</td>
        </tr>
    </table>

    <h2>Student Registration</h2>

    <form>

        <label>Name:</label>
        <input type="text" name="name"
        <br><br>

        <label>Email:</label>
        <input type="email" name="email">
        <br><br>

        <label>Gender:</label>

        <input type="radio" name="gender" value="male">
        Male

        <input type="radio" name="gender" value="female">
        Female

        <br><br>

        <label>Course:</label>

        <select name="course">
            <option>BCA</option>
            <option>BBA</option>
            <option>BCOM<option>
        </select>

        <br><br>

        <label>Address:</label>
        <br>

        <textarea rows="4" cols="30"></textarea>

        <br><br>

        <input type="submit" value="Register">
        <input type="reset" value="Clear">

    </form>

    <hr>

    <p>Thank you for visiting our website.</p>

</body>
</html>`
    },

    {
        name: "HTML_02.html",
        language: "HTML",
        points: 150,
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My Favorite Books</title
</head>

<body>

    <h1>My Favorite Books</h1>

    <p>Here are some of my favorite books.</p>

    <hr>

    <h2>Book List</h2>

    <ol>
        <li>The Alchemist</li>
        <li>Wings of Fire</li>
        <li>Harry Potter<li>
        <li>Rich Dad Poor Dad</li>
    </ol>

    <h2>Book Details</h2>

    <table border="1">

        <tr>
            <th>Book Name</th>
            <th>Author</th>
        </tr>

        <tr>
            <td>The Alchemist</td>
            <td>Paulo Coelho</td>
        </tr>

        <tr>
            <td>Wings of Fire</td>
            <td>A.P.J. Abdul Kalam<td>
        </tr>

        <tr>
            <td>Harry Potter</td>
            <td>J.K. Rowling</td>
        </tr>

    </table>

    <h2>Book Registration</h2>

    <form>

        <label>Student Name:</label>
        <input type="text" name="student"
        <br><br>

        <label>Email:</label>
        <input type="email" name="email">
        <br><br>

        <label>Select Book:</label>

        <select name="book">

            <option>The Alchemist</option>
            <option>Wings of Fire</option>
            <option>Harry Potter<option>

        </select>

        <br><br>

        <label>Membership:</label>

        <input type="radio" name="member" value="yes">
        Yes

        <input type="radio" name="member" value="no">
        No

        <br><br>

        <label>Address:</label>
        <br>

        <textarea rows="4" cols="30"></textarea>

        <br><br>

        <input type="submit" value="Submit">
        <input type="reset" value="Clear">

    </form>

    <hr>

    <p>Thank you for visiting our book page.</p>

</body>
</html>`
    },

    {
        name: "CSS_01.css",
        language: "CSS",
        points: 200,
        code: `body {
    background-color: lightblue
    font-family: Arial;
    margin: 20px;
}

h1 {
    color: darkblue;
    text-align center;
    font-size: 30px;
}

p {
    color: black;
    font-size: 18px;
    line-height: 1.5;
}

.container {
    width: 80%;
    margin: auto;
    background-color: white;
    padding: 20px;
    border: 2px solid black;
}

.box {
    width: 300px;
    height: 150px;
    background-color: lightgreen;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
}

.box h2 {
    color: green
    text-align: center;
}

.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.button:hover {
    background-color: darkblue;
    color white;
}

.footer {
    background-color: gray;
    color: white;
    text-align: center;
    padding: 15px;
    margin-top: 20px;
}`
    },

    {
        name: "JS_01.js",
        language: "JavaScript",
        points: 300,
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Student Result</title>
</head>

<body>

    <h1>Student Result Calculator</h1>

    <p id="result">Result will appear here</p>

    <button onclick="calculateResult()">Calculate Result</button>

    <script>

        function calculateResult() {

            let name = "Ananya";
            let marks1 = 75;
            let marks2 = 82;
            let marks3 = 68;

            let total = marks1 + marks2 + marks3
            let average = total / 3;

            if (average >= 90) {
                grade = "A+";
            }
            else if (average >= 75) {
                grade == "A";
            }
            else if (average >= 60) {
                grade = "B";
            }
            else {
                grade = "C"
            }

            if (average >= 40) {
                status = "Pass";
            }
            else {
                status = "Fail";
            }

            document.getElementById("result").innerHTML =
                "Name: " + name + "<br>" +
                "Total Marks: " + total + "<br>" +
                "Average: " + average + "<br>" +
                "Grade: " + grade + "<br>" +
                "Status: " + status;

        }

        function resetResult() {
            document.getElementById("result").innerHTML = "Result cleared";
        }

    </script>

</body>
</html>`
    }

];


// ===============================
// VARIABLES
// ===============================

let currentChallenge = 0;
let completed = [];
let score = 0;


// ===============================
// OPEN CHALLENGE
// ===============================

function openChallenge(index) {

    currentChallenge = index;

    const challenge = challenges[index];

    document.getElementById("editorOverlay").classList.add("show");

    document.getElementById("fileTitle").textContent =
        challenge.name;

    document.getElementById("tabName").textContent =
        challenge.name;

    document.getElementById("codeEditor").value =
        challenge.code;
}


// ===============================
// CLOSE EDITOR
// ===============================

function closeEditor() {

    document.getElementById("editorOverlay")
        .classList.remove("show");
}


// ===============================
// SELECT CHALLENGE
// ===============================

function selectChallenge(index) {

    document.querySelectorAll(".menu-item").forEach(function(item) {
        item.classList.remove("active");
    });

    document.querySelectorAll(".menu-item")[index]
        .classList.add("active");

    openChallenge(index);
}


// ===============================
// RUN CODE
// ===============================

function runCode() {

    const button = document.querySelector(".run-btn");

    button.textContent = "✓ CODE EXECUTED";

    button.style.color = "#00ff88";

    setTimeout(function() {

        button.textContent = "▶ RUN CODE";

    }, 1500);
}


// ===============================
// SUBMIT CHALLENGE
// ===============================

function submitChallenge() {

    if (completed.includes(currentChallenge)) {

        alert("CHALLENGE ALREADY COMPLETED.");

        return;
    }

    completed.push(currentChallenge);

    score += challenges[currentChallenge].points;

    document.getElementById("score").textContent =
        String(score).padStart(3, "0");

    let percentage =
        (completed.length / challenges.length) * 100;

    document.getElementById("progress").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        completed.length + " / 4 COMPLETED";

    document.getElementById("successMessage").textContent =
        challenges[currentChallenge].name +
        " HAS BEEN SUCCESSFULLY CLEARED.";

    document.querySelector(".points").textContent =
        "+" + challenges[currentChallenge].points + " POINTS";

    document.getElementById("successPopup")
        .classList.add("show");

    document.querySelectorAll(".menu-item")[currentChallenge]
        .style.color = "#00ff88";
}


// ===============================
// CLOSE SUCCESS POPUP
// ===============================

function closeSuccess() {

    document.getElementById("successPopup")
        .classList.remove("show");

    closeEditor();
}


// ===============================
// KEYBOARD SHORTCUTS
// ===============================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeEditor();

    }

    if (event.ctrlKey && event.key === "Enter") {

        submitChallenge();

    }

});