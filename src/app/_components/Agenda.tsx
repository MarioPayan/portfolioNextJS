const agendaURL = 'https://calendar.google.com/calendar/appointments/schedules'
const agendaID = 'AcZssZ2Uu3IeRy-DzPDHJ1B3LBYj_Y_3tQ930jyNccz7xXVXOM5g9iTwB5waibVkP2_KO2PYTM2Rw-E4?gv=true'
const agendaParams = 'gv=true'

const styles = {
  border: 0,
  width: '100%',
  height: '100vh',
  frameborder: 0,
}

const Agenda: React.FC = () => <iframe src={`${agendaURL}/${agendaID}?${agendaParams}`} style={styles}></iframe>

export default Agenda
