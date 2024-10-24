import smile from '../assets/sad-rounded-square-emoticon-svgrepo-com.svg';

const Error404 = () => {
  return (
    <section className="error404">
      <img src={smile} alt="грустный смайлик" />
      <span>404 error</span>
      <span>Page not found</span>
    </section>
)
}

export default Error404