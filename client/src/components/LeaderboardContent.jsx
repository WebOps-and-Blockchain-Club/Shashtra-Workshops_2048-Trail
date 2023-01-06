import Table from 'react-bootstrap/Table';

const LeaderboardContent = () => {

    const leaderboardItems = Array(10).fill(0).map((_, i) => {
        return (
            <tr>
                <td>Mark{i}</td>
                <td>{i + 1}</td>
            </tr>
        )
    })

    return (
        <div className='card card-body m-4'>
            <div className='card-title text-center fs-3'>
                Leaderboard
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardItems}
                </tbody>
            </Table>
        </div>
    )
}

export default LeaderboardContent