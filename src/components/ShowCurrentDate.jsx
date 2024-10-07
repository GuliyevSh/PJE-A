const ShowCurrentDate = () => {
  const today = new Date()

  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;
  return (
    <div>
      <h3>Date actuel: {currentDate} </h3>
    </div>
  )
}

export default ShowCurrentDate