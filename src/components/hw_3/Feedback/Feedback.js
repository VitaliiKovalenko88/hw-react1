import Section from "components/hw-2/Section/Section";
import { FeedbackBtn } from "components/hw-2/Feedback/FeedbackBtn/FeedbackBtn";
import Statistics from "components/hw-2/Feedback/Statistics/Statistics";


const Feedback = () => {
return (
<div>
<h1>Please leave feedback</h1>
<Section>
  <FeedbackBtn
    feedback={[]}
    // feedbackOptions={this.countFeedback} 
    />
</Section>

<Section title={'Statistics'}>
  { <Statistics
      good={0}
      neutral={0}
      bad={0}
      // total={0}
      // positivePercentage={this.countPositiveFeedbackPercentage} 
      />}
</Section>
</div>)
}
export default Feedback;