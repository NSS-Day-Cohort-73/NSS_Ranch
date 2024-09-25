# Welcome to Bug Wrangler Ranch

This first self-assessment is for you to hone several Core Skills that you need as a software developer.

Taking your time now to be thorough, reflective, patient and curious will give you the foundation to be successful throughout the rest of this course and your career.

If you rush this, or think of it as a test to be "passed", then you will already be on the wrong path.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Description

Slim Jenkins offers a vacation package for people who have always wanted to join a cattle driving team across the American Midwest.

He calls it the **Kansas Slim's Cattle Adventure**.

People join a team of experienced drovers who will train them in the basics of herding cattle and driving them across hundreds of miles to their destination at Old Red's Ranch.

Unfortunately, someone gained access to the code that produces an outline of the adventure to the paying customers, so Slim has hired you to examine and fix the code.

## Learning Objectives

Here are your learning objectives for this self-assessment.

1. Able to use the debugger to step through existing code to discover root causes of bugs.
2. Drawing a sequence diagram for a project.
   > Use the [sequencediagram.org](https://sequencediagram.org/) site to generate your sequence diagram. Make sure you save your work as you go.
3. Demonstrate learning efficiency by researching concepts you haven't seen before using your peers, mentors, and the World Wide Web as resources.
4. Awareness of when you need help, and then seeking it out.

## Starter Code

Slim Jenkins has the existing code on Github, so you need to download it from there. Actually, developers call this process _cloning a repository_.

1. In your terminal, to go your workspace directory.
    ```sh
    cd ~/workspace
    ```
2. Click on the repository link that you got in your Slack message from the Learning Platform.
3. On that page you will see a green **Code** button. Click on that.
4. A small popup will appear. Click on the **SSH** text.
5. Then click on the copy icon you see all the way to the right of the text.
6. Back in your terminal, you will run the following command, replacing the `{your URL here}` with what you copied.
    ```sh
    git clone {your URL here}
    ```
7. This will create a new sub-directory called `bug-wrangler-ranch`. Use the `cd` command to navigate into that directory and open it in VS Code.
    ```sh
    cd bug-wrangler-ranch
    code .
    ```

Open the `main.js` and create your `launch.json` so that you can debug the code starting with `main.js`. Then run the program and start the investigation.

## Example Output

If you are able to fix all of the bugs, you will output similar to what is below.

```sh
************************************************
**  K A N S A S   S L I M ' S   C A T T L E   **
************************************************

\|/         (__)
     '------(oo)
       ||   (__)               \|/
       ||w--||     \|/
   \|/
            \|/                     (__)
                             '------(oo)
                               ||   (__)
                               ||w--||     \|/

You will be accompanying 5 drovers as they drive 50 cattle to Old Red's Ranch for grazing

The herd is made of up the following types of cattle:
Ankole-Watusi,Brown Swiss,Brown Swiss,American Angus,Brown Swiss,
Ankina,American Angus,Ankina,Brown Swiss,Ankole-Watusi,Brown Swiss,
Brown Swiss,American Angus,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankina,Brown Swiss,Ankina,Ankole-Watusi,Brown Swiss,Brown Swiss,
Ankole-Watusi,American Angus,Brown Swiss,American Angus,Ankole-Watusi,
Ankole-Watusi,American Angus,Ankina,Ankina,Ankina,Ankole-Watusi,
American Angus,Brown Swiss,American Angus,Brown Swiss,American Angus,
American Angus,Ankina,Brown Swiss,American Angus,Ankina,Brown Swiss,
American Angus,Ankole-Watusi,Ankina,American Angus,Brown Swiss

Here is the team of drovers you will be joining
        * Melvyn Hethron
        * Yancy Gresley
        * Willabella Attarge
        * Ynes Gyenes
        * Farlie Spere


Your journey will take you through the wildness of the American Midwest and across the following terrain
        * forest
        * plain
        * river
        * mountain
```

## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. In the **main** module, one of the first lines of code is `const drovers = hireDrovers(cattleToDrive)`. Explain what the value of the `drovers` variable is when that line of code runs.
   > When the line of code const drovers = hireDrovers(cattleToDrive) is executed in the main module, the value of the drovers variable will be determined by the return value of the hireDrovers function.
   > To conclude, the drovers variable will contain the return value from the hireDrovers() function, which is influenced by the cattleToDrive parameter provided during the function call. The precise nature of the value depends on how the hireDrovers function is implemented.
2. At the bottom of the main module, you will see the following code - `for (const drover of drovers)`. Explain what the values of both the `drover` and the `drovers` variables are.
   > Drovers: This is an array containing a collection of drovers, which could be strings, objects, or any other type of data. Drover: This is a variable that holds the current element being iterated over in the loop.
3. In the **journey** module, there is a `journeyMaker()` function. In that function, there is a variable named `areas` which will have the value of an object. Use your debugger to show what the value of each key is on that object.
   > (https://drive.google.com/file/d/1RzR0SGhg_7FDaLGXJxzVxAY8iW2bAnRW/view?usp=drive_link)
4. Also in the **journey** module, there is the following code:
   ```js
   for (let forestNumber = 0; forestNumber < areas.forests; forestNumber++) {
      journey.push("forest")
   }
   ```
   Explain this code with your best vocabulary.
   > In essence, this code constructs an array named journey filled with the string "forest" repeated a number of times equal to areas.forests. It effectively captures the concept of traversing through multiple forests, as iterated by the loop.
5. Explain the value of the `database` variable in the **database** module. Be as comprehensive as possible.
   > The database is an object and is defined using the const variable, which means its reference cannot be reassigned.
   > The drovers property is also an array, containing objects that represent individuals who likely work with the cattle. Each drover object has the following properties:
   > id: A unique identifier for the drover.
   > first_name: The first name of the drover.
   > last_name: The last name of the drover.
   > gender: The gender of the drover.

   > The provided code defines a JavaScript object called `database` that serves as a mock database for managing cattle and their caretakers (drovers). The object shares two main properties: `cattleTypes`, an array of objects representing different cattle breeds (each with a unique id and breed name), and `drovers`, an array of objects detailing individuals who work with the cattle, including their id, first name, last name, and gender. The code also includes an export statement, allowing the `database` object to be accessed across different modules.
6. In the **drovers** module, there is a `hireDrovers()` function. You will notice the following code on that line - `(herdSize)`. What is that defining, and where does it get its value?
   > The `herdSize` notation in the `hireDrovers()` function represents a parameter that accepts an input value indicating the size of the herd needing drovers. This parameter allows the function to perform necessary calculations based on the herd size provided during function calls. The value for `herdSize` is assigned at the point of invocation, where a specific numeric value, such as the total number of animals in the herd, is passed to the function. Within the function, `herdSize` is essential for determining the number of drovers required, allocating resources, and making hiring drovers, thereby tailoring the function's functionality to the herd's needs.


## Final Step

Now you need to upload your code to Github so a coach can review it and the answers to your vocabulary and understanding questions. Watch the <a href="https://app.screencastify.com/v3/watch/AwPn0FXfji60TxHuUVkU" target="_blank">Sharing assessment repository<a> video for instructions on how to do it.
