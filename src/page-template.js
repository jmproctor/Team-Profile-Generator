function generateHTML(data) {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/a6614c4a77.js" crossorigin="anonymous"></script>
        <title>Our Team Profile</title>
    </head>
    <body>
        <header class="bg-danger py-5">
            <h1 class="fs-1 text-white text-center">My Team</h1>
        </header>
        <div class="d-flex container justify-content-center">
            <div class="d-flex card-deck col-9 flex-wrap justify-content-center align-self-center">
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header bg-primary text-white">
                        <p>Jim</p>
                        <p>Manager</p>
                    </div>
                    <div>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header bg-primary text-white">
                        <p>Dwight</p>
                        <p>Manager</p>
                    </div>
                    <div>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header bg-primary text-white">
                        <p>Pam</p>
                        <p>Manager</p>
                    </div>
                    <div>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header bg-primary text-white">
                        <p>Oscar</p>
                        <p>Manager</p>
                    </div>
                    <div>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>
                <div class="card rounded shadow m-4 col-3" style="width: 15rem;">
                    <div class="card-header bg-primary text-white">
                        <p>Kevin</p>
                        <p>Manager</p>
                    </div>
                    <div>
                        <ul class="list-group col">
                            <li class="list-group-item">ID: </li>
                            <li class="list-group-item">Email: </li>
                            <li class="list-group-item">Office Number: </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `
};

module.exports = generateHTML;