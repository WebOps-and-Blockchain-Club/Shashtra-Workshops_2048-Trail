import NavigationBar from "../components/Navbar"
import GameContent from "../components/GameContent"
import LeaderboardContent from "../components/LeaderboardContent"
import Footer from "../components/Footer"
import "../styles/dashboard.css"

const Dashboard = () => {
    return (
        <div>
            <NavigationBar />
            <div className="row content">
                <div className="col-8 game-content">
                    <GameContent />
                </div>
                <div className="col-4 leaderboard-content">
                    <LeaderboardContent />
                </div>
            </div>
            <div className="history-content">
                col
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard