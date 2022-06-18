import excuteQuery from '../../lib/db'

export default async (req, res) => {
    if (req.method === 'POST') {
        excuteQuery(`INSERT INTO user (username, full_name, email, password) VALUES ('${req.body['username']}', '${req.body['full_name']}', '${req.body['email']}', '${req.body['password']}')`, [])
        let user = await excuteQuery('SELECT username, full_name FROM user', [])
        res.send(user);
    } else {
        let user = await excuteQuery('SELECT username, full_name FROM user', [])
        res.send(user);
    }
};