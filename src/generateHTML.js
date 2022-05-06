const Intern = require("../lib/Intern");

function renderManager (manager){
    return `
    <div class="p-2 bd-highlight">
            <div class="card card-shadow col-lg-3" style="width: 14rem;">
                <div class="card-body bg-primary">
                    <h3 class="card-title">${manager.name}</h3>
                    <h4 class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${manager.id} </li>
                    <li class="list-group-item email">Email: ${manager.email} </li>
                    <li class="list-group-item office">Office Number: ${manager.office}</li>
                </ul>
            </div>
        </div>
    `
} 

function renderEngineer(engineer){
    return `
    <div class="p-2 bd-highlight">
            <div class="card card-shadow col-lg-3" style="width: 14rem;">
                <div class="card-body bg-primary">
                    <h3 class="card-title">${engineer.name}</h3>
                    <h4 class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${engineer.id}</li>
                    <li class="list-group-item email">Email: ${engineer.email}</li>
                    <li class="list-group-item github">GitHub:<a href='http://github.com/${engineer.github}' target='_blank'>${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    `
}


function renderIntern(intern){
    return `
    <div class="p-2 bd-highlight">
            <div class="card card-shadow col-md-4" style="width: 14rem;">
                <div class="card-body bg-primary">
                    <h3 class="card-title">${intern.name}</h3>
                    <h4 class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</h4>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item id">ID: ${intern.id}</li>
                    <li class="list-group-item email">Email: ${intern.email} </li>
                    <li class="list-group-item school">School: ${intern.school}</li>
                </ul>
            </div>
    </div>
    `
}

function allTeamMembers(team){

    let renderTeam = [];


    for(let i = 0; i < team.length; i++){

        const employee = team[i];
        const role = employee.getRole();

        
       if (role === 'Manager') {
            let managerCard = renderManager(employee);
            renderTeam += managerCard;
        } if (role === 'Engineer') {
            let engineerCard = renderEngineer(employee);
            renderTeam += engineerCard;
        } if (role === 'Intern'){
            let internCard = renderIntern(employee);
            renderTeam += internCard;
        } 
    }
    return renderTeam
}


function generateHTML(renderTeam){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Reset CSS  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
        <!-- Font Awesome  -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
        <!-- Google Fonts  -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet">
        <!-- Bootstrap  -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- Custom CSS  -->
        <link rel="stylesheet" type="text/css" href="style.css">
         <title>Team Profile Generator</title>
    </head>
    <body>
            <header>
                <h1>My Team</h1>
            </header>
            
            <div class="d-flex flex-row flex-wrap justify-content-center bd-highlight mt-5 mb-3">   
            ${allTeamMembers(renderTeam)}
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generateHTML;