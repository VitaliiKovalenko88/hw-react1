export const FeedbackBtn = ({ feedback, feedbackOptions }) => { 

  return feedback.map(feed => {
    return <button onClick={feedbackOptions} key={feed}>{feed}</button>
  }) 
};