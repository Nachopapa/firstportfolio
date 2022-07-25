import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Seunghwan Cho",
      title: "Want to be Developer",
      address:
        "http://google.com",
      icon: "assets/twitter.png",
      desc:
        "Here is my Linked In",
    },
    // {
    //   id: 2,
    //   name: "Alex Kalinski",
    //   title: "Co-Founder of DELKA",
    //   img:
    //     "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/youtube.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    //   featured: true,
    // },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: "CEO of ALBI",
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/linkedin.png",
    //   desc:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    // },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <a href="Http://linked.in">Linkiend</a>
              <img
                className="user"
                src={d.address}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}