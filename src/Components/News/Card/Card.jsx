import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { title, image, desc, author, publishedAt } = props;

  const newsData = {
    title: title,
    image: image,
    author: author,
    publishedAt: publishedAt,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde similique dignissimos harum ea quia commodi in non, provident laboriosam dicta vel, repudiandae autem, eaque accusamus sed. Animi quibusdam modi sint fuga beatae nemo tempore placeat odit molestias facere, in harum rerum veniam enim ullam nisi, quaerat ab sed blanditiis alias non quae mollitia? Illo cumque harum magnam fugiat quaerat unde libero veniam eveniet soluta ab odio quidem excepturi distinctio commodi, perferendis dignissimos qui at quod expedita mollitia voluptates! Itaque quibusdam possimus blanditiis accusamus dicta commodi necessitatibus animi suscipit tempora libero delectus reprehenderit ducimus, quis laboriosam velit eaque temporibus consequuntur, nam nesciunt incidunt sint esse aliquid. Illum dolore quidem quo maxime debitis esse eum alias aspernatur, suscipit blanditiis. Impedit neque sunt officiis odio magni omnis maxime porro qui soluta? Similique corrupti, fugiat nobis maxime perspiciatis rerum dolorum error totam odio ad non amet hic enim iusto incidunt qui illum quisquam quas earum exercitationem reiciendis maiores laudantium. Atque nulla libero odio animi exercitationem. Recusandae, sapiente at voluptas debitis quia ea unde veritatis sed, labore dolores provident quae voluptate doloremque enim aperiam et dolor suscipit amet totam dolorem fugit magnam, ducimus quaerat quasi! Incidunt impedit ab itaque aut provident hic labore repellendus fuga veritatis voluptatem facilis quidem quibusdam praesentium id, velit rem suscipit? Illo placeat vel maiores optio, laboriosam corrupti rerum sit adipisci alias at beatae sed praesentium nostrum a. Similique sunt eligendi error cupiditate quam ea quod magnam optio aliquam hic unde nemo, modi maiores nam illo sit explicabo cum porro recusandae fugit eaque commodi inventore provident. Rem est, rerum et velit corporis tenetur itaque similique quam libero? Odio, perferendis ducimus facere, aliquid nostrum inventore pariatur corrupti cumque, eos consectetur sit deleniti illo. Aspernatur reprehenderit consectetur voluptatem fugit pariatur, accusantium eos doloremque molestiae sequi reiciendis provident beatae ipsam natus omnis architecto repellat a rem repellendus rerum quis itaque, repudiandae harum in! Labore exercitationem omnis minima placeat rerum. Recusandae, quas eligendi. Aperiam est perspiciatis, ipsum corrupti quis adipisci. Cupiditate consequatur, voluptatem iusto, nostrum hic tempore harum at aspernatur, dolore fugit asperiores. Mollitia sunt ipsam quae quasi rem voluptatibus iure nam id soluta porro, ipsa maiores molestias non unde tenetur deleniti esse quisquam perferendis, totam repellendus illum. Consectetur, accusamus! Tempora sapiente voluptates delectus minima corporis dicta sint maiores, aliquid adipisci tenetur dolore porro a ea veniam maxime blanditiis incidunt nemo rerum placeat cupiditate! Modi dolores animi saepe inventore ea reiciendis eligendi sit natus, consequuntur voluptatem quo unde maiores veniam consequatur? Accusamus veniam impedit odio maiores molestias. Aliquid amet veritatis tenetur voluptatum? Est perferendis totam nemo modi blanditiis magnam nam deleniti minus, soluta delectus, labore velit illo amet iusto accusamus tempore quis repellendus expedita consequuntur iste. Praesentium ab nam, error beatae id placeat laudantium perferendis nostrum velit optio unde fugiat enim corporis laborum quasi animi explicabo ipsa sit fugit ut iusto voluptatem accusamus. Possimus quam cum ipsam ab totam accusamus quasi quas nihil odit praesentium est qui magnam quo quae, iste cupiditate omnis consequatur voluptate placeat? Fugiat, doloribus, dolorum aliquid quisquam, esse officia ducimus pariatur architecto dolor excepturi exercitationem! Totam itaque, natus quaerat rerum culpa numquam officia, atque sint ullam debitis officiis nihil? Inventore officiis nisi omnis quaerat. Aliquam, eos. Sequi, excepturi rerum architecto iusto vitae totam ab cum voluptatem nemo consectetur aliquam explicabo mollitia. Molestias, natus tempore numquam corrupti omnis illum asperiores accusantium alias distinctio, veniam officiis libero est!",
  };

  return (
    <Link className="Card" to="/newsContent" state={newsData}>
      <div className="cardContent">
        <img src={image} alt="" />
        <div className="content">
          <h2>{title.slice(0, 25)}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
