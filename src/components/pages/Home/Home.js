import LeaguePicer from "../../features/LeaguePicker/LeaguePicker";

const Home = () => {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <LeaguePicer />
  )
}

export default Home;