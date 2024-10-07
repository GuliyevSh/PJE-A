const ShowBlogs = ({ item }) => {
  return (
    <div>
      <h3> {item.body} </h3>
      <h4> {item.author} </h4>
    </div>
  )
}

export default ShowBlogs