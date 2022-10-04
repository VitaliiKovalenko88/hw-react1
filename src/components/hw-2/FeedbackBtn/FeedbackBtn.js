export const FeedbackBtn = ({ feedback, feedbackOptions }) => { 

  return feedback.map(feed => {
    // const feed = f.replace(f[0], f[0].toUpperCase())
      return <button onClick={feedbackOptions} key={feed}>{feed}</button>
  }) 
};