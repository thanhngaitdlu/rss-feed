const Feed = ({title, link, pubDate}) => {
    let formatted = {day:"numeric", month:"numeric", year:"numeric"};
    let articleDate = new Date(pubDate).toLocaleDateString("en-GB", formatted)
    return(<>
            <a href={link} target=" _blank" rel="noopener noreferrer"
            className="hover:opacity-70 hover:text-orange-600">
            <h3 className=" text-xl mb-1 underline" dangerouslySetInnerHTML={{__html: title}}></h3>
            <p>{articleDate}</p>
            </a>
        </>) 
}

export default Feed;