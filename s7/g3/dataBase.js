


fetch('https://sofin.wp-admin.it/public/api/v1/user')
    .then(response => response.json()) //quando hai finito la chiamata trtasforma la risposta in un file json
    .then(data => {                    //quando hai finito di trasformare la risposta in json. In json fai le seguenti cose
        console.log("Success:", data);
    })

     /*{
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marco",
            lastname: "Rossi",
            email: "tesdDSDSDSDssddst.shaylee@example.org",
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            role_id: 4
        }),
    }
)*/
