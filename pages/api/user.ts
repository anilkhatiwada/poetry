import excuteQuery from '../../lib/db'

export default async (req, res) => {
    let user = await excuteQuery('SELECT username, full_name FROM user', [])
    res.send(user);
};