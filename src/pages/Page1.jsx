import ShowText from "../components/ShowText"
import ShowBlogs from "../components/ShowBlogs"
import ShowCurrentDate from "../components/ShowCurrentDate"
import Counter from "../components/Counter"
import PersonForm from "../components/PersonForm"

const Page1 = () => {
  const blogs = [
    {author: 'Shamkhal', body: 'Comment faire du vélo en toute sécurité?'},
    {author: 'Xavier', body: 'Découvrons Allemagne ensemble'}
  ]

  const items = blogs.map((blog, index) =>
    <ShowBlogs key={index} item={blog} />
    )

  return (
    <div>
      <h1>Page 1</h1>
      <ShowText text={"Bonjour le monde!"} />
      <ShowCurrentDate />
      <ShowText text={"Ce texte est après la date."} />
      <Counter initialValue={21} />
      <br />
      <PersonForm />
      <br />
      <h1>La liste</h1>
      {items}
      <br />
    </div>
  )
}

export default Page1