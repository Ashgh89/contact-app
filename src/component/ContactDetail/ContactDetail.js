import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const data = location.state.data; // OR -> const { data } = location.state;
  // When we click on Link and go to user/id
  // {id: 87, name: 'ash', email: 'ghaneiash@gmail.com'}
  console.log(data);

  return (
    <div>
      <p>Username is : {data.name}</p>
      <p>Email is : {data.email}</p>
      <Link to="/">Go to Contact List</Link>
    </div>
  );
};

export default ContactDetail;
