import Navbar from "../navbar/Navbar"
import "./Invest.css"

function Invest() {
  return (
    <div class="invest">
      <div class="landing">
        <Navbar/>
        <div class="landing-content">
          <h2 class="subheading">Trade, not aid</h2>
          <h1 class="heading">Southern innovations<br /> addressing global problems</h1>
        </div>
      </div>
      <div class="hero">
        <h5 class="title">How we see it differently</h5>
        <p class="mot">The global South is rapidly catching up with the "developed" world.It's time for you to get to know the rapid development, innovation and drive
                       going on in this part of the world (East-Africa, South Asia and beyond).
        </p>
        <div class="city">
        <img src="../src/assets/heropic.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Invest;