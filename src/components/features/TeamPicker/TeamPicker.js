import { useSelector } from 'react-redux/es/hooks/useSelector';

const TeamPicker = () => {
  const teams = useSelector(state => state.teams)[0].league.standings;

  return (
    <>
    {teams.map(group => group.map(team => <div>{team.team.name}</div>))}
    </>
  )
}

export default TeamPicker;