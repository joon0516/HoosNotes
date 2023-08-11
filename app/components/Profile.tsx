import PostCard from "./PostCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }: any) => {
  return (
    <section className="w-full">
      <div className="pb-5">
        <h3 className="profile_text pl-2 pb-2">{name} Profile</h3>
        <p className="profile_desc pl-2">{desc}</p>
      </div>

      <div>
        {data.map((post: any) => (
          <PostCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
