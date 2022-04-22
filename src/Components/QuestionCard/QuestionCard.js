import Grid from "@material-ui/core/Grid";
import './QuestionCard.css'

function QuestionCard(props) {
  return (
    <Grid item xs={12} align = {props.align} className="question-card" style = {{padding: 20}}>
      {props.children}
    </Grid>
  );
}

export default QuestionCard;
