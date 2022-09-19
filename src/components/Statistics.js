export const Statistics = ({ title, stats }) => {
  return <section>
    <h2>{title?title:null}</h2>

    <ul>
      {stats.map(({ label, id, percentage }) => 
        <li key={id}>
          <span > {label}</span>
        <span> {percentage}%</span>
      </li>)}
    </ul>
  </section>
 }