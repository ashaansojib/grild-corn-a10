import { Link } from "react-router-dom";

const Chefs = ({ chef }) => {
    const { _id, chef_image, name, experience, recipes, likes, age } = chef;
    return (
        <div className="card rounded-none shadow-xl lg:p-0 p-2">
            <figure><img className="md:h-[300px] w-full" src={chef_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <li>Experience: {experience}</li>
                    <li>Recipes: {recipes}</li>
                    <li>Following: {likes}</li>
                    <li>Ages: {age}</li>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/chef-recipe/${_id}`} className="btn btn-primary">View Recepie</Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;