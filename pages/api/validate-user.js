export default async (req, res) => {
    let username = req.url.split('?username=')[1];
    let token =
        'AAAAAAAAAAAAAAAAAAAAAEb9VgEAAAAAZ%2BcNuc8r79eFd6sFG9G687MCkbw%3Dle0xSYGXgGOz5fyTjMNfz53d7BuxesIUDsGRet1E91ylax7PU3';

    await fetch('https://api.twitter.com/2/users/by/username/' + username, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    })
        .then((res) => res.json())
        .then((data) => {
            res.send({
                status: 200,
                user: data,
                message: 'OK'
            });
        })
        .catch((err) => {
            console.log('Error message: ', error);
        });
};
